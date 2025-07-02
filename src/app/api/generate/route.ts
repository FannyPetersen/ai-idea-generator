import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  // MOCKED response
  const idea = `Here is a great AI-generated content idea based on your prompt: "${prompt}"`;

  // Send back mocked response
  return NextResponse.json({ idea });
}

