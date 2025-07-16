"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {


  return (
    <div className="min-h-screen bg-white flex text-black">
      <div className="w-full md:w-2/5 lg:w-1/3 border-r h-screen overflow-y-auto">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search by location..."
            value={""}
            className="border p-2 w-full rounded"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
