import { NextRequest, NextResponse } from "next/server";
import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "No prompt provided" },
        { status: 400 }
      );
    }

    const chatCompletion = await client.chatCompletion({
      provider: "novita",
      model: "deepseek-ai/DeepSeek-V3",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return NextResponse.json({
      icebreaker: chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Hugging Face API error:", error);
    return NextResponse.json(
      { error: "Failed to generate icebreaker" },
      { status: 500 }
    );
  }
}
