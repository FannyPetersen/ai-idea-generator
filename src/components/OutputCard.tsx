import React from "react";
import Spinner from "./Spinner";

export default function OutputCard({
  icebreaker,
  loading,
}: {
  icebreaker: string;
  loading?: boolean;
}) {
  return (
    <div className="w-full md:w-1/2 max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col items-center self-start mx-auto">
      {loading && <Spinner />}
      {icebreaker && !loading && (
        <div className="text-2xl p-4 bg-pink-50 text-pink-900 rounded w-full text-center">
          {icebreaker}
        </div>
      )}
    </div>
  );
}
