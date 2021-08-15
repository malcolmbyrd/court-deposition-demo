import {useContext} from "react";
import JobListing from "./JobListing";
import {Context} from "../store";
import Header from "./Header";
import GetJobsButton from "./GetJobsButton";

const Content = () => {
  const [state, dispatch] = useContext(Context)

  return (
    <>
      <div>
        <Header />
        <GetJobsButton />
        {state.jobs.length > 1 && (
          <div className='jobs-container'>
            {state.jobs.length > 0 && state.jobs.map((job, i) => {
              if ((!job.provider_id || job.provider_id === '')) {
                return (
                  <div className='job-listing' key={job.id}>
                    <JobListing job={job} />
                  </div>
                )
              }
            })}
          </div>
        )}

      </div>
    </>
  )
}

export default Content;
