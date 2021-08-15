import React from "react";

const SuperlativeTableHeaders = ({ job }) => {
  return (
    <thead>
      <tr>
        <th>Cheapest Provider</th>
        {job.location_type !== 'REMOTE' && (
          <th>Closest Provider</th>
        )}
        <th>Highest Rated Provider</th>
        <th>Fastest Provider</th>
      </tr>
    </thead>
  )
}

export default SuperlativeTableHeaders
