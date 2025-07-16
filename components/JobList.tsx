import React from "react";
import { Briefcase, MapPin } from "lucide-react";

interface JobProps {
  jobs: any[];
  onSelect: (job: any) => void;
  selectedJob: any;
}

export default function JobList({ jobs, onSelect, selectedJob }: JobProps) {
  return (
    <div className="space-y-2 p-4">
      {jobs.map((job) => (
        <div
          key={job.jobId}
          onClick={() => onSelect(job)}
          className={`p-4 rounded-lg cursor-pointer transition shadow-sm hover:shadow-md border ${
            selectedJob?.jobId === job.jobId
              ? "bg-purple-100 border-purple-600"
              : "bg-white border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold text-purple-800">{job.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mt-1 gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mt-1 gap-2">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{job.experience}</p>
          <span className="inline-block mt-2 text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full font-medium">
            Quick Apply
          </span>
        </div>
      ))}
    </div>
  );
}
