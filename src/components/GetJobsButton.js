import FrontEndService from "../services/frontEndService";
import {useContext} from "react";
import {Context} from "../store";

const GetJobsButton = () => {
  const [state, dispatch] = useContext(Context)

  const getJobs = () => {
    FrontEndService.fetchJobs().then(r =>
      dispatch({type: 'SET_JOBS', payload: r})
    )
  }

  return (
    <div className='jobs-button-container'>
      <button className='primary jobs-button' type='button' onClick={() => getJobs()}>Get Jobs</button>
    </div>
  )
}

export default GetJobsButton
