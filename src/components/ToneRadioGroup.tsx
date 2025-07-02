import React from "react";

const tones = [
  { value: "funny", label: "Funny" },
  { value: "formal", label: "Formal" },
  { value: "relaxed", label: "Relaxed" },
];

export default function ToneRadioGroup({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-medium">Tone:</span>
      {tones.map((tone) => (
        <label
          key={tone.value}
          className="flex items-center gap-1 cursor-pointer"
        >
          <input
            type="radio"
            name="tone"
            value={tone.value}
            checked={value === tone.value}
            onChange={() => onChange(tone.value)}
            className="accent-blue-600"
          />
          {tone.label}
        </label>
      ))}
    </div>
  );
}
