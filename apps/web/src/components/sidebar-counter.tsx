"use client";

import { useState } from "react";

export function SidebarCounter() {
  const [count, setCount] = useState(0);

  return (
    <section className="mt-6 rounded-lg border bg-white p-3">
      <h3 className="font-medium text-sm">State Test</h3>
      <p className="mt-1 text-gray-600 text-xs">
        Increment this value, then switch dashboard pages.
      </p>
      <p className="mt-3 font-semibold text-2xl">{count}</p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="rounded bg-gray-900 px-3 py-1.5 text-white text-xs hover:bg-gray-700"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded border px-3 py-1.5 text-xs hover:bg-gray-100"
        >
          Reset
        </button>
      </div>
    </section>
  );
}
