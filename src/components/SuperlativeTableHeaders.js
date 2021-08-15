import React from "react";

const SuperlativeTableHeaders = ({ job, fastestProviderTime }) => {
  return (
    <thead>
      <tr>
        <th>Cheapest Provider</th>
        {(job.location_type !== 'REMOTE') ? (
          <th>Closest Provider</th>
        ) : <th>Remote Job</th>}
        <th>
          Highest Rated Provider
        </th>
        {(fastestProviderTime && fastestProviderTime > 0 && fastestProviderTime < 100) && (
        <th>
          Fastest Provider
        </th>
        )}
      </tr>
    </thead>
  )
}

export default SuperlativeTableHeaders
