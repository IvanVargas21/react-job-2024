import React from 'react';
import jobs from '../jobs.json'
import JobListing from './JobListing';

const JobListings = () => {
  //(starting, ending) = (inclusive, exclusive)
  const recentJobs = jobs.slice(0, 3);

  return (
    <>
      {/* Browse Jobs */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job)=>(
                    //key, ensures that each Joblisting component gets a unique identifier.
                    <JobListing key={job.id} job={job}/>
            ))}
            {/* Job Listing 1 */}

            {/* Job Listing 2 */}
            
            {/* Job Listing 3 */}
            
          </div>
        </div>
      </section>
    </>
  )
}

export default JobListings