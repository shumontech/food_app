"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SearchInput = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const value = form.search.value.trim();

    if (!value) return; // ✅ empty হলে কিছু করবে না

    // ✅ existing params copy করা
    const newParams = new URLSearchParams(params.toString());

    newParams.set("search", value);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mt-5">
          <input
            name="search"
            type="text"
            placeholder="Search food..."
            className="border-2 w-96 rounded-lg p-3"
          />
          <button className="py-2 px-6 bg-gray-600 text-white rounded cursor-pointer hover:bg-gray-800 transition">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;