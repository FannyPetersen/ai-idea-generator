"use client";

import { useState } from "react";
import IdeaForm from "@/components/IdeaForm";

export default function Home() {
  const [idea, setIdea] = useState("");

  const generateIdea = async (prompt: string) => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    console.log("Response from API:", data);
    setIdea(data.idea);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start gap-6 pt-24">
      <h1 className="text-2xl font-bold">AI Idea Generator</h1>
      <IdeaForm onSubmit={generateIdea} />
      {idea && (
        <div className="mt-6 p-4 bg-green-100 rounded">
          <h2 className="font-semibold mb-2">Your AI-generated idea:</h2>
          <p>{idea}</p>
        </div>
      )}
    </main>
  );
}
