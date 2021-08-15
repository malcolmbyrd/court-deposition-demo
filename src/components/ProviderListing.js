import {useContext, useEffect, useState} from "react";
import {getAvgPageCost, getAvgProviderRating, getAvgTimeToCompletion, getDistanceBetweenPoints} from "../helper/helper";
import {Context} from "../store";

const ProviderListing = ({
                           job,
                           provider,
                           onClick,
                           setProviderCostData,
                           setProviderDistanceData,
                           setProviderRatingData,
                           setProviderSpeedData
                         }) => {

  const [state, dispatch] = useContext(Context)
  const [distanceFromJob, setDistanceFromJob] = useState(0)
  const [avgCostPerPage, setAvgCostPerPage] = useState(0)
  const [avgProviderRating, setAvgProviderRating] = useState(0)
  const [avgTime, setAvgTime] = useState('')

  useEffect(() => {
    if ((provider.latitude && provider.latitude !== '') && (provider.longitude && provider.longitude !== '')) {
      const dist = getDistanceBetweenPoints(job.latitude, job.longitude, provider.latitude, provider.longitude)
      setDistanceFromJob(Math.round(dist * 100) / 100)
    } else {
      setDistanceFromJob(0)
    }
    const avgPage = getAvgPageCost(state.jobs, provider)
    setAvgCostPerPage(avgPage)

    const avgRate = getAvgProviderRating(state.jobs, provider)
    setAvgProviderRating(avgRate)

    const avgCompletionTime = getAvgTimeToCompletion(state.jobs, provider)
    setAvgTime(avgCompletionTime)
  }, [])

  useEffect(() => {
    if (avgCostPerPage > 0) {
      setProviderCostData(providerCostData => [...providerCostData, avgCostPerPage]);
    }

    if (distanceFromJob > 0) {
      setProviderDistanceData(providerDistanceData => [...providerDistanceData, distanceFromJob]);
    }

    if (avgProviderRating > 0) {
      setProviderRatingData(providerRatingData => [...providerRatingData, avgProviderRating]);
    }

    if (avgTime > 0) {
      setProviderSpeedData(providerSpeedData => [...providerSpeedData, avgTime]);
    }
  }, [avgCostPerPage, distanceFromJob])

  return (
    <tr key={provider.id} onClick={onClick}>
      <td>
        <a href='#'>{provider.full_name}</a>
      </td>
      <td className='job-distance'>
        {distanceFromJob > 0 ? (distanceFromJob + ' km') : ('REMOTE')}
      </td>
      <td className='average-page-cost-data'>
        {(avgCostPerPage !== 0) ?
          <>${avgCostPerPage}</>
          : <>No Data Available</>}
      </td>
      <td>
        {(avgProviderRating) ?
          <>{avgProviderRating}</>
          : <>No Data Available</>}
      </td>
      <td>
        {(avgTime) ?
          <>{avgTime} days</>
          : <>No Data Available</>}
      </td>
    </tr>
  )
}

export default ProviderListing
