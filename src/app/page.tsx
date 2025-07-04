"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";

export default function Home() {
  const [icebreaker, setIcebreaker] = useState("");
  const [loading, setLoading] = useState(false);

  const generateIcebreaker = async (
    tone: string,
    context: string,
    topic?: string
  ) => {
    setLoading(true);
    const prompt =
      `Generate a ${tone} icebreaker for a ${context} situation.` +
      (topic ? ` It should be related to ${topic}.` : "") +
      ` Keep it short and engaging. Don't end with a question. Only the icebreaker, no introduction or extra phrases."`;

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setIcebreaker(data.icebreaker);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start gap-6 pt-50">
      <h1 className="text-2xl font-bold">AI-powered Icebreaker Generator</h1>
      <InputForm onSubmit={generateIcebreaker} />
      {loading && (
        <div className="flex items-center gap-2 mt-4">
          <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-600"></span>
          <span>Generating...</span>
        </div>
      )}
      {icebreaker && !loading && (
        <div className="mt-4 p-4 border rounded bg-gray-50 w-1/2 text-center">
          {icebreaker}
        </div>
      )}
    </main>
  );
}
