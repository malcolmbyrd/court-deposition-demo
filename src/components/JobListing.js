import {useState} from "react";
import JobModal from "./JobModal";
import JobTable from "./JobTable";

const JobListing = ({job}) => {
  const [jobModalOpen, setJobModalOpen] = useState(false)

  return (
    <>
      <JobTable job={job} onClick={() => setJobModalOpen(true)} />

      {jobModalOpen && (
        <JobModal job={job} closeFunction={() => setJobModalOpen(false)} />
      )}
    </>
  )
}

export default JobListing
