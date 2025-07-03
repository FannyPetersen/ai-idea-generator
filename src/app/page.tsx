"use client";

import { useState } from "react";
import InputForm from "@/components/InputForm";

export default function Home() {
  const [icebreaker, setIcebreaker] = useState("");

  const generateIcebreaker = async (prompt: string) => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    console.log("Response from API:", data);
    setIcebreaker(data.icebreaker);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start gap-6 pt-24">
      <h1 className="text-2xl font-bold">AI-powered Icebreaker Generator</h1>
      <InputForm onSubmit={generateIcebreaker} />
      {icebreaker && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="font-semibold mb-2">Your AI-generated icebreaker:</h2>
          <p>{icebreaker}</p>
        </div>
      )}
    </main>
  );
}
