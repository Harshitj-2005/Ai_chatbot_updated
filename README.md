# AI Chatbot with Gemini API & MongoDB

This is a **CLI-based AI chatbot** that interacts with users using **Google's Gemini API** for generating responses. It also **stores chat history** in a **MongoDB database** using Mongoose.

## 📌 Features
- **Conversational AI** powered by **Gemini API**.
- **MongoDB storage** to retain past conversations.
- **Real-time chat interface** using Node.js CLI.
- **Persistent chat history** for context-aware interactions.

## 🏗️ Project Structure
```
📁 Ai_chatbot_updated
┣ 📁 models
┃ ┗ 📜 schema.js       # Mongoose schema for chat storage
┣ 📁 server
┃ ┣ 📁 config
┃ ┃ ┗ 📜 db.js         # MongoDB connection setup
┣ 📜 chat1.js         # Main chatbot logic
┣ 📜 package.json     # Project dependencies
┣ 📜 .env             # API keys & environment variables
┗ 📜 README.md        # Project documentation
```

## 🚀 Getting Started
### 1️⃣ Prerequisites
- Node.js installed
- MongoDB database (local or cloud)
- API key for **Google Gemini API**

### 2️⃣ Installation
```sh
git clone https://github.com/Harshitj-2005/Ai_chatbot_updated.git
cd Ai_chatbot_updated
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file and add:
```
GEMINI_API_KEY=your_google_gemini_api_key
MONGODB_URL=your_mongodb_connection_url
```

### 4️⃣ Run the Chatbot
```sh
node chat1.js
```

## 🔧 Technologies Used
- **Node.js** (CLI interface)
- **Google Gemini API** (AI responses)
- **MongoDB + Mongoose** (Chat history storage)
- **Chalk** (CLI styling)
- **Dotenv** (Environment variables)

## 💡 Future Improvements
- Enhance memory retention using **vector databases**.
- Add **web-based interface**.
- Implement **multi-user chat history**.

## 🤝 Contribution
Feel free to fork and contribute! **Pull requests are welcome.**

## 📜 License
This project is **open-source** under the **MIT License**.
![MIT License](https://img.shields.io/badge/License-MIT-green.svg)


