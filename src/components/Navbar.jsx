import React from "react";

export default function Navbar({ page, setPage }) {
  return (
    <nav className="flex justify-center gap-6 py-6 bg-white/60 shadow-md">
      <button
        className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all ${
          page === "view"
            ? "bg-indigo-600 text-white shadow"
            : "text-indigo-600 hover:bg-indigo-100"
        }`}
        onClick={() => setPage("view")}
      >
        View Items
      </button>
      <button
        className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all ${
          page === "add"
            ? "bg-pink-600 text-white shadow"
            : "text-pink-600 hover:bg-pink-100"
        }`}
        onClick={() => setPage("add")}
      >
        Add Item
      </button>
    </nav>
  );
}
