import {useContext, useEffect, useState} from "react";
import {getAvgPageCost, getAvgProviderRating, getAvgTimeToCompletion, getDistanceBetweenPoints} from "../helper/helper";
import {Context} from "../store";

const ProviderListing = ({
                           job,
                           provider,
                           onClick,
                           cheapestProvider,
                           setCheapestProvider,
                           setCheapestProviderCost,
                           closestProvider,
                           setClosestProvider,
                           closestProviderDistance,
                           setClosestProviderDistance,
                           highestRatedProvider,
                           setHighestRatedProvider,
                           bestProviderRating,
                           setBestProviderRating,
                           fastestProvider,
                           fastestProviderTime,
                           setFastestProvider,
                           setFastestProviderTime,
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
      if ((avgCostPerPage < cheapestProvider.avg_cost_per_page)) {
        setCheapestProvider(provider)
        setCheapestProviderCost(avgCostPerPage)
      }
    }

    if (distanceFromJob > 0) {
      if (!closestProvider.longitude && provider.latitude && provider.longitude) {
        setClosestProvider(provider)
        setClosestProviderDistance(distanceFromJob)
      }
      else if (closestProviderDistance && (distanceFromJob < parseInt(closestProviderDistance))) {
        setClosestProvider(provider)
        setClosestProviderDistance(distanceFromJob)
      }
    }

    if (avgProviderRating > 0) {
      if (!highestRatedProvider.full_name && avgProviderRating > 0) {
        setHighestRatedProvider(provider)
        setBestProviderRating(avgProviderRating)
      }
    }
    else if (bestProviderRating > 0 && ((avgProviderRating > 0) && (avgProviderRating < bestProviderRating))) {
      setHighestRatedProvider(provider)
      setBestProviderRating(avgProviderRating)
    }

    if (avgTime > 0) {
      if (!fastestProvider.full_name && avgTime > 0) {
        setFastestProvider(provider)
        setFastestProviderTime(avgTime)
      }
    }
    else if (fastestProviderTime > 0 && ((avgTime > 0) && (avgTime < fastestProviderTime))) {
      setFastestProvider(provider)
      setFastestProviderTime(avgTime)
    }
  }, [avgCostPerPage, distanceFromJob])

  return (
    <tr key={provider.id} onClick={onClick}>
      <td>
        <a href='#'>{provider.full_name}</a>
      </td>
      <td className='job-distance'>
        {distanceFromJob > 0 ? (distanceFromJob + ' km') : ('N/A or REMOTE')}
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
