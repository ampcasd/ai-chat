const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function fetchAiResponse(prompt: string) {
  //   const { response } = await model.generateContent(prompt);
  return "There's no single, universally accepted answer to the meaning of life.  It's a question that has been pondered by philosophers, theologians, and individuals for millennia.  The meaning is often considered subjective and personal, shaped by individual beliefs, experiences, and values.\n\nSome common perspectives include:\n\n* **Nihilism:**  The belief that life is inherently without meaning or purpose.\n* **Existentialism:** The belief that individuals create their own meaning and purpose through their choices and actions.\n* **Absurdism:** The belief that the search for meaning in a meaningless universe is inherently absurd, but that we should embrace this absurdity.\n* **Spiritual/Religious Beliefs:** Many religions offer answers about the meaning of life, often involving serving a higher power, following divine commandments, and achieving enlightenment or salvation.\n* **Hedonism:** The belief that the meaning of life is to maximize pleasure and minimize pain.\n* **Purpose-driven life:** Finding meaning through contributing to something larger than oneself, such as a cause, community, or family.\n\nUltimately, the meaning of life is what you make it.  It's a question to explore and answer for yourself through reflection, experience, and interaction with the world.\n";

  //   return response.text();
}
