import React, { useState } from "react";
import ToneRadioGroup from "./ToneRadioGroup";
import ContextRadioGroup from "./ContextRadioGroup";

const contextToTones: Record<string, { value: string; label: string }[]> = {
  date: [
    { value: "funny", label: "Funny" },
    { value: "romantic", label: "Romantic" },
    { value: "friendly", label: "Friendly" },
    { value: "relaxed", label: "Relaxed" },
    { value: "inspiring", label: "Inspiring" },
    { value: "quirky", label: "Quirky" },
  ],
  mingle: [
    { value: "funny", label: "Funny" },
    { value: "formal", label: "Formal" },
    { value: "friendly", label: "Friendly" },
    { value: "relaxed", label: "Relaxed" },
    { value: "inspiring", label: "Inspiring" },
    { value: "quirky", label: "Quirky" },
  ],
  "job-interview": [
    { value: "professional", label: "Professional" },
    { value: "formal", label: "Formal" },
    { value: "friendly", label: "Friendly" },
    { value: "relaxed", label: "Relaxed" },
    { value: "inspiring", label: "Inspiring" },
  ],
};

const InputForm = ({
  onSubmit,
}: {
  onSubmit?: (tone: string, context: string, topic?: string) => void;
}) => {
  const [context, setContext] = useState("date");
  const [tone, setTone] = useState("funny");
  const [topic, setTopic] = useState("");

  React.useEffect(() => {
    const availableTones = contextToTones[context];
    if (!availableTones.find((t) => t.value === tone)) {
      setTone(availableTones[0].value);
    }
  }, [context, tone]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(tone, context, topic);
    }
    setTopic("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
      <ContextRadioGroup value={context} onChange={setContext} />
      <ToneRadioGroup
        value={tone}
        onChange={setTone}
        tones={contextToTones[context]}
      />
      <div className="flex gap-2 items-center w-96 mx-auto">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Optional: Topic or theme"
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

export default InputForm;
