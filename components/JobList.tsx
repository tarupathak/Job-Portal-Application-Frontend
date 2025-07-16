import React from "react";
import { Job } from "@/types/job";

interface JobListProps {
  jobs: Job[];
  onSelect: (job: Job) => void;
  selectedJob: Job | null;
}

export default function JobList({
  jobs,
  onSelect,
  selectedJob,
}: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-gray-400 text-sm sm:text-base">
        No jobs found.
      </div>
    );
  }

  return (
    <div className="space-y-4 px-2 sm:px-4 pb-6">
      {jobs.map((job) => {
        const isSelected = selectedJob?.jobId === job.jobId;

        return (
          <div
            key={job.jobId}
            onClick={() => onSelect(job)}
            className={`cursor-pointer rounded-md border p-4 shadow-sm transition-all duration-200 ${
              isSelected
                ? "bg-purple-50 border-purple-600 shadow-md"
                : "bg-white hover:bg-gray-50 border-gray-200"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {job.title}
              </h3>
              {isSelected && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md self-start sm:self-auto">
                  Selected
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {job.company} &bull; {job.location}
            </p>
            <p className="text-sm text-gray-500 mt-1">{job.experience}</p>
            <span className="inline-block mt-2 text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full w-fit">
              ⚡ Quick Apply
            </span>
          </div>
        );
      })}
    </div>
  );
}
