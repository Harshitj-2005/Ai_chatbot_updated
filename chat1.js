import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import readlineSync from "readline-sync";
import chalk from "chalk";
import connectDB from "./server/config/db.js";
import ChatData from "./models/schema.js";

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error(chalk.red("❌ Error: Missing API key. Set GEMINI_API_KEY in .env file."));
    process.exit(1);
}

(async () => {
    try {
        await connectDB();
        console.log(chalk.blue("Database connected."));
        startChat();
    } catch (error) {
        console.error(chalk.red("Database connection failed:"), error.message);
    }
})();

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function getGeminiResponse(prompt, conversationHistory) {
    try {
        const context = conversationHistory.map(chat => `User: ${chat.prompt}\nAI: ${chat.response}`).join("\n");
        const fullPrompt = context ? `${context}\nUser: ${prompt}` : prompt;

        const result = await model.generateContent({ contents: [{ parts: [{ text: fullPrompt }] }] });
        const response = result.response.text();
        return chalk.green(response);
    } catch (error) {
        console.error(chalk.red("API Error:"), error.message);
        return chalk.red("Failed to get AI response.");
    }
}

async function saveChatToDB(prompt, response) {
    try {
        const chatEntry = new ChatData({ prompt, response });
        await chatEntry.save();
        console.log(chalk.blueBright("Chat saved to database."));
    } catch (error) {
        console.error(chalk.red(" Database Error:"), error.message);
    }
}

async function startChat() {
    console.log(chalk.blue("🚀 Hi Harshit, chat with Gemini AI! Type 'exit' to stop."));
    
    while (true) {
        const userInput = readlineSync.question(chalk.cyan("You: "));

        if (userInput.toLowerCase() === "exit") {
            console.log(chalk.yellow("👋 Goodbye!"));
            break;
        }

        console.log("🤖 Thinking...");

        const conversationHistory = await ChatData.find().limit(5); // Retrieve last 5 messages

        const aiResponse = await getGeminiResponse(userInput, conversationHistory);
        console.log("Gemini AI:", aiResponse);

        await saveChatToDB(userInput, aiResponse);
    }
}
