import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function fetchAiResponse(prompt: string) {
  try {
    const { response } = await model.generateContent(prompt);
    return response.text();
  } catch (error) {
    console.error(error);
    return new Array(10)
      .fill(
        "This is a mocked response. Clone the project, spin up a local environment with your Gemini API key and try again."
      )
      .join("\n\n");
  }
}
