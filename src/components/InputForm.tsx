import React, { useState, useEffect, useRef } from "react";
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
    { value: "friendly", label: "Friendly" },
    { value: "relaxed", label: "Relaxed" },
    { value: "inspiring", label: "Inspiring" },
    { value: "formal", label: "Formal" },
    { value: "professional", label: "Professional" },
  ],
};

const InputForm = ({
  onSubmit,
}: {
  onSubmit?: (tone: string, context: string, topic?: string) => void;
}) => {
  const [context, setContext] = useState("date");
  const [tone, setTone] = useState(contextToTones["date"][0].value);
  const [topic, setTopic] = useState("");
  const prevContext = useRef(context);

  useEffect(() => {
    const availableTones = contextToTones[context];
    if (prevContext.current !== context) {
      setTone(availableTones[0].value);
      prevContext.current = context;
    } else if (!availableTones.find((t) => t.value === tone)) {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      <ContextRadioGroup value={context} onChange={setContext} />
      <ToneRadioGroup
        value={tone}
        onChange={setTone}
        availableTones={contextToTones[context].map((t) => t.value)}
      />
      <div className="flex flex-col items-center w-96 mx-auto">
        <span className="font-medium mb-2">Topic or theme (optional):</span>
        <div className="flex gap-2 items-center w-full">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. remote work, first date, dogs"
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Generate
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
