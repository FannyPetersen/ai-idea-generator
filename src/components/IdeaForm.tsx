import React, { useState } from "react";

const IdeaForm = ({ onSubmit }: { onSubmit?: (prompt: string) => void }) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && onSubmit) {
      onSubmit(prompt);
    }
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask anything"
        className="border rounded px-3 py-2 flex-1"
      />
      <button
        type="submit"
        className="ml-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate
      </button>
    </form>
  );
};

export default IdeaForm;
