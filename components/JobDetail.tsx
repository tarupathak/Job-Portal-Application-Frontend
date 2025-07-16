import React from "react";
import { Job } from "@/types/job";

interface JobDetailProps {
  job: Job;
}

export default function JobDetail({ job }: JobDetailProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm h-full">
      <div className="flex justify-between items-start border-b pb-4 mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-gray-600 text-sm mt-1">{job.company}</p>
          <p className="text-gray-500 text-sm">{job.location}</p>
        </div>
        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 text-sm shadow transition"
        >
          ⚡ Quick Apply
        </a>
      </div>

      <div className="space-y-3 text-sm text-gray-700">
        <div>
          <span className="font-medium">Employment Type:</span>{" "}
          <span className="text-gray-600">{job.employment_type}</span>
        </div>
        <div>
          <span className="font-medium">Experience:</span>{" "}
          <span className="text-gray-600">{job.experience}</span>
        </div>
        <div>
          <span className="font-medium">Posted On:</span>{" "}
          <span className="text-gray-600">
            {new Date(job.postedDateTime).toDateString()}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {["Management", "Heavy lifting", "Sanitation", "Entry level"].map(
            (tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Full Job Description
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          This is a <span className="font-medium">{job.employment_type?.toLowerCase()}</span> role for a{" "}
          <span className="font-medium">{job.title}</span> at{" "}
          <span className="font-medium">{job.company}</span> located in{" "}
          <span className="font-medium">{job.location}</span>. The role includes
          responsibilities related to the position and experience level mentioned.
        </p>
      </div>
    </div>
  );
}
