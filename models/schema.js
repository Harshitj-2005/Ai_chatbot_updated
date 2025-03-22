import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    prompt: { type: String, required: true },
    response: { type: String, required: true }
}, { timestamps: true });  // Auto-adds createdAt & updatedAt

const ChatData = mongoose.model("ChatData", chatSchema);

export default ChatData;
