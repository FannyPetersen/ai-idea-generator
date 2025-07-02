import React, { useState } from "react";
import ToneRadioGroup from "./ToneRadioGroup";

const IdeaForm = ({
  onSubmit,
}: {
  onSubmit?: (prompt: string, tone: string) => void;
}) => {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("funny");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && onSubmit) {
      onSubmit(prompt, tone);
    }
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
      <ToneRadioGroup value={tone} onChange={setTone} />
      <div className="flex gap-2 items-center w-full">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything"
          className="border rounded px-3 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default IdeaForm;
