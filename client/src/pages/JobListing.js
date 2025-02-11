import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard"; // Import JobCard component

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token if authentication is required
        const response = await axios.get("http://localhost:8080/api/v1/job/get-job", {
          headers: { Authorization: `Bearer ${token}` }, // Add authorization if needed
        });

        setJobs(response.data); // Ensure API returns a proper job list
      } catch (error) {
        console.error("Error fetching jobs:", error.response?.data || error.message);
        setError("Failed to load jobs. Please check the server.");
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-3xl font-semibold mb-5">Available Jobs</h2>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          jobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <p className="text-gray-500">No jobs available.</p>
        )}
      </div>
    </div>
  );
};

export default JobList;
