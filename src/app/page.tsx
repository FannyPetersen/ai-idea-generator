"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";
import OutputCard from "@/components/OutputCard";

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
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl">
        <div className="w-full md:w-1/2 max-w-xl bg-white rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 mx-auto">
          <h1 className="text-2xl font-bold text-pink-700 mb-2 text-center">
            💡 AI-powered Icebreaker Generator
          </h1>
          <InputForm onSubmit={generateIcebreaker} />
        </div>
        {(icebreaker || loading) && (
          <OutputCard icebreaker={icebreaker} loading={loading} />
        )}
      </div>
    </main>
  );
}
