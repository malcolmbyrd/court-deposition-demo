export const getDistanceBetweenPoints = (a1, a2, b1, b2) => {
  return getDistanceFromLatLonInKm(a1, a2, b1, b2)
}

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2-lat1);  // deg2rad below
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
}

const deg2rad = (deg) => {
  return deg * (Math.PI/180)
}

export const getAvgPageCost = (jobs, provider) => {
  let numberOfJobsThisProviderHasDone = 0
  let totalPageCost = 0;
  let result;

  jobs.filter((job) => {
    if ((job.provider_id === provider.id) && (job.avg_cost_per_page > 0) && (job.status === 'COMPLETE')) {
      numberOfJobsThisProviderHasDone++
      totalPageCost = totalPageCost + Math.round(job.avg_cost_per_page * 100) / 100
    }
  })

  if (numberOfJobsThisProviderHasDone > 0) {
    result = Math.round((totalPageCost / numberOfJobsThisProviderHasDone) * 100) / 100
  }
  else {
    result = 0
  }

  return result
}

export const getAvgProviderRating = (jobs, provider) => {
  let numberOfJobsThisProviderHasDone = 0
  let totalRating = 0;
  let result;

  jobs.filter((job) => {
    if ((job.provider_id === provider.id) && (job.provider_rating > 0)) {
      numberOfJobsThisProviderHasDone++
      totalRating = totalRating + parseInt(job.provider_rating)
    }
  })

  if (numberOfJobsThisProviderHasDone > 0) {
    result = (totalRating / numberOfJobsThisProviderHasDone)
  }
  else {
    result = 0
  }

  return result
}

export const getTimeToCompletion = (job) => {
  const startDate = new Date(Date.parse(job.datetime.toString()))
  const endDate = new Date(Date.parse(job.materials_turned_in_at.toString()))
  const timeDifference = endDate.getTime() - startDate.getTime()
  return timeDifference / (1000 * 3600 * 24)
}

export const getAvgTimeToCompletion = (jobs, provider) => {
  let numberOfJobsThisProviderHasDone = 0
  let totalTime = 0;
  let result;

  jobs.filter((job) => {
    if ((job.provider_id === provider.id) && (job.status === 'COMPLETE')) {
      numberOfJobsThisProviderHasDone++
      totalTime = totalTime + getTimeToCompletion(job)
    }
  })

  if (numberOfJobsThisProviderHasDone > 0) {
    result = Math.round((totalTime / numberOfJobsThisProviderHasDone) * 100) / 100
  }
  else {
    result = 0
  }

  return result
}
