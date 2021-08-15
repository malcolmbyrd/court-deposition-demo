import {useContext} from "react";
import {Context} from "../store";
import JobTable from "./JobTable";

const ProviderDetail = ({ provider, onClick }) => {
  const [state, dispatch] = useContext(Context)

  return (
    <div className='provider-detail-container'>
      <button className='primary' type='button' onClick={onClick}>Back</button>
      <h3>Jobs this provider has done</h3>

      <div className='provider-detail-table-container'>
        {state.jobs.map((job, i) => {
          if (job.provider_id === provider.id) {
            return (
                <JobTable job={job} onClick={() => null} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ProviderDetail
