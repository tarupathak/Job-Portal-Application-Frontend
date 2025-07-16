"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobList from "@/components/JobList";

export default function Home() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [searchLocation, setSearchLocation] = useState("");

  const fetchJobs = async (location = "") => {
    const url = location
      ? `https://job-portal-application-backend-production.up.railway.app/api/jobs/search?location=${location}`
      : "https://job-portal-application-backend-production.up.railway.app/api/jobs";
    const { data } = await axios.get(url);
    setJobs(data);
    setSelectedJob(data[0] || null);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#f4f4f4] to-[#ffffff] text-black flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 lg:w-1/3 border-r h-screen overflow-y-auto bg-white shadow-md">
        <div className="p-6 border-b bg-white sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-purple-700 mb-4">Find Jobs</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full text-sm focus:outline-purple-500"
            />
            <button
              onClick={() => fetchJobs(searchLocation)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm transition"
            >
              Search
            </button>
          </div>
        </div>
        <JobList jobs={jobs} onSelect={setSelectedJob} selectedJob={selectedJob} />
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center text-gray-400">
        <p className="text-lg">Select a job to view details</p>
      </div>
    </div>
  );
}
