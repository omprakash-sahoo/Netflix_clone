import { DEEP_SEEK } from "./constant";

const deepSeek = async (prompt) => {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${DEEP_SEEK}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-chat-v3.1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "No response from DeepSeek.";
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    return "Something went wrong. Please try again.";
  }
};

export default deepSeek;
