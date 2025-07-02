"use client";

import IdeaForm from "@/components/IdeaForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start gap-6 pt-24">
      <h1 className="text-2xl font-bold">AI Idea Generator</h1>
      <IdeaForm />
    </main>
  );
}
