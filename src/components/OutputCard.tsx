import React from "react";

export default function OutputCard({ icebreaker }: { icebreaker: string }) {
  return (
    <div className="w-full md:w-1/2 max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center self-start mx-auto">
      <span className="text-pink-600 font-bold mb-2">Your Icebreaker:</span>
      <div className="text-2xl p-4 bg-pink-50 text-pink-900 rounded w-full text-center">
        {icebreaker}
      </div>
    </div>
  );
}
