import {useEffect, useState} from "react";
import {getTimeToCompletion} from "../helper/helper";

const JobTable = ({job, onClick}) => {
  const [timeToCompletion, setTimeToCompletion] = useState(0)

  useEffect(() => {
    if (job.status === 'COMPLETE') {
      const completionTime = getTimeToCompletion(job)
      setTimeToCompletion(completionTime)
    }
  }, [])

  return (
    <table className='job-table' onClick={onClick}>
      <tbody>
      <tr>
        <td>
          Job ID
        </td>
        <td>
          {job.id}
        </td>
      </tr>
      {job.avg_cost_per_page > 0 && (
        <tr>
          <td>
            Average cost per page
          </td>
          <td>
            ${job.avg_cost_per_page}
          </td>
        </tr>
      )}
      {job.datetime && (
      <tr>
        <td>
          Start Date
        </td>
        <td>
          {job.datetime}
        </td>
      </tr>
      )}
      {job.materials_turned_in_at && (
      <tr>
        <td>
          End Date
        </td>
        <td>
          {job.materials_turned_in_at}
        </td>
      </tr>
      )}
      {(timeToCompletion !== 0) && (
        <tr>
          <td>
            Time to completion
          </td>
          <td>
            {timeToCompletion} days
          </td>
        </tr>
      )}

      <tr>
        <td>
          Location Type
        </td>
        <td>
          {job.location_type}
        </td>
      </tr>
      {job.provider_id > 0 && (
      <tr>
        <td>
          Provider ID
        </td>
        <td>
          {job.provider_id}
        </td>
      </tr>
      )}
      {job.provider_rating > 0 && (
      <tr>
        <td>
          Provider Rating
        </td>
        <td>
          {job.provider_rating}
        </td>
      </tr>
      )}
      <tr>
        <td>
          Status
        </td>
        <td>
          {job.status}
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default JobTable
