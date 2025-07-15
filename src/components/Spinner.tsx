import React from "react";

export default function Spinner() {
  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-pink-600"></span>
      <span className="text-pink-600 font-medium">Generating...</span>
    </div>
  );
}
