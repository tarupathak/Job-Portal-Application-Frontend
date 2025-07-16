import React from "react";

interface JobProps {
  jobs: any[];
  onSelect: (job: any) => void;
  selectedJob: any;
}

export default function JobList({ jobs, onSelect, selectedJob }: JobProps) {
  return (
    <div className="space-y-3 px-2 pb-6">
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
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              {isSelected && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md">
                  Selected
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 mt-1">{job.company} &bull; {job.location}</p>
            <p className="text-sm text-gray-500 mt-1">{job.experience}</p>
            <span className="inline-block mt-2 text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
              ⚡ Quick Apply
            </span>
          </div>
        );
      })}
    </div>
  );
}
