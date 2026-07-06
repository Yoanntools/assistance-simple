
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const body = await req.json();

  const { situation } = body;

  const prompt = `
Tu es un assistant spécialisé dans les déménagements.

L'utilisateur décrit sa situation :
${situation}

Réponds avec :
- checklist
- étapes importantes
- emails ou courriers nécessaires
- organisation claire
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un assistant de déménagement." },
      { role: "user", content: prompt },
    ],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}
