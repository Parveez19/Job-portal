import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h3 className="text-xl font-bold">{job.position}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">📍 {job.workLocation}</p>
      <p className="text-sm text-blue-500 font-medium">{job.workType}</p>
      <p className={`mt-2 text-sm font-semibold ${
        job.status === "pending" ? "text-yellow-500" :
        job.status === "interview" ? "text-green-500" :
        "text-red-500"
      }`}>
        {job.status.toUpperCase()}
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
