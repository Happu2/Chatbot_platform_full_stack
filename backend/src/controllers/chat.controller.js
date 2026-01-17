const axios = require("axios");
const Prompt = require("../models/Prompt");
const Chat = require("../models/Chat");

exports.chatWithAgent = async (req, res) => {
  try {
    const { projectId, message } = req.body;

    // ✅ Sequelize syntax
    const prompts = await Prompt.findAll({
      where: { ProjectId: projectId }
    });

    const systemPrompt = prompts.map(p => p.content).join("\n");

    // Save user message
    await Chat.create({
      ProjectId: projectId,
      role: "user",
      message
    });

    // Gemini API call
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: `${systemPrompt}\n\nUser: ${message}`
              }
            ]
          }
        ]
      }
    );

    const aiMessage =
      geminiResponse.data.candidates[0].content.parts[0].text;

    // Save AI message
    await Chat.create({
      ProjectId: projectId,
      role: "assistant",
      message: aiMessage
    });

    res.json({ reply: aiMessage });
  } catch (error) {
    res.status(500).json({
      error: error.response?.data || error.message
    });
  }
};
exports.getChatHistory = async (req, res) => {
  try {
    const { projectId } = req.params;

    const chats = await Chat.findAll({
      where: { ProjectId: projectId },
      order: [["createdAt", "ASC"]],
      attributes: ["id", "role", "message", "createdAt"]
    });

    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
