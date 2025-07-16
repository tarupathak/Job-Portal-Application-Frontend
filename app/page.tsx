"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobList from "@/components/JobList";
import JobDetail from "@/components/JobDetail";
import { Job } from "@/types/job";

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (location = "") => {
    setLoading(true);
    try {
      const url = location
        ? `https://job-portal-application-backend-production.up.railway.app/api/jobs/search?location=${location}`
        : "https://job-portal-application-backend-production.up.railway.app/api/jobs";
      const { data } = await axios.get(url);
      setJobs(data);
      setSelectedJob(data[0] || null);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-gray-50 text-gray-900">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="w-full md:w-2/5 lg:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 max-h-[50vh] md:max-h-none overflow-y-auto bg-white">
        <div className="sticky top-0 z-10 bg-white p-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold mb-3">Search Jobs by Location</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 border border-gray-300 p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              onClick={() => fetchJobs(searchLocation)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>
        <div className="p-2">
          <JobList jobs={jobs} onSelect={setSelectedJob} selectedJob={selectedJob} />
        </div>
      </div>
      <div className="w-full md:w-3/5 lg:w-2/3 overflow-y-auto bg-white p-4 sm:p-6">
        {selectedJob ? (
          <JobDetail job={selectedJob} />
        ) : (
          <div className="text-center text-gray-400 mt-10 text-base sm:text-lg">
            Select a job to see details
          </div>
        )}
      </div>
    </div>
  );
}
