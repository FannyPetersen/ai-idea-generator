import React from "react";

const ALL_TONES = [
  { value: "funny", label: "Funny" },
  { value: "romantic", label: "Romantic" },
  { value: "friendly", label: "Friendly" },
  { value: "relaxed", label: "Relaxed" },
  { value: "inspiring", label: "Inspiring" },
  { value: "quirky", label: "Quirky" },
  { value: "formal", label: "Formal" },
  { value: "professional", label: "Professional" },
];

export default function ToneRadioGroup({
  value,
  onChange,
  availableTones,
}: {
  value: string;
  onChange: (value: string) => void;
  availableTones: string[];
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-medium">Tone:</span>
      {ALL_TONES.map((tone) => {
        const isAvailable = availableTones.includes(tone.value);
        return (
          <label
            key={tone.value}
            className={`flex items-center gap-1 cursor-pointer ${
              !isAvailable ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="radio"
              name="tone"
              value={tone.value}
              checked={value === tone.value}
              onChange={() => isAvailable && onChange(tone.value)}
              className="accent-blue-600"
            />
            {tone.label}
          </label>
        );
      })}
    </div>
  );
}
