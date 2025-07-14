import React from "react";

const contexts = [
  { value: "date", label: "Date" },
  { value: "mingle", label: "Mingle" },
  { value: "job-interview", label: "Job interview" },
];

export default function ContextRadioGroup({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-medium mb-2">Context:</span>
      <div className="flex gap-x-4">
        {contexts.map((context) => (
          <label
            key={context.value}
            className="flex items-center gap-1 cursor-pointer"
          >
            <input
              type="radio"
              name="context"
              value={context.value}
              checked={value === context.value}
              onChange={() => onChange(context.value)}
              className="accent-blue-600"
            />
            {context.label}
          </label>
        ))}
      </div>
    </div>
  );
}
