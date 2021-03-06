import React from "react";
import {Modal, Header, Content} from "./Modal";
import FrontEndService from "../services/frontEndService";
import {useContext, useEffect, useState} from "react";
import {Context} from "../store";
import ProviderListing from "./ProviderListing";
import ProviderDetail from "./ProviderDetail";
import ProviderTableHeaders from "./ProviderTableHeaders";
import SuperlativeTableHeaders from "./SuperlativeTableHeaders";

const JobModal = ({job, closeFunction}) => {
  const [state, dispatch] = useContext(Context)
  const [viewingProviders, setViewingProviders] = useState(true) // Toggle between list and individual
  const [viewingProvider, setViewingProvider] = useState({}) // Store single provider for detail view

  const [providerCostData, setProviderCostData] = useState([])
  const [minCost, setMinCost] = useState(9999)

  const [providerDistanceData, setProviderDistanceData] = useState([])
  const [minDistance, setMinDsitance] = useState('9999')

  const [providerRatingData, setProviderRatingData] = useState([])
  const [bestProviderRating, setBestProviderRating] = useState(9)

  const [providerSpeedData, setProviderSpeedData] = useState([])
  const [fastestProviderTime, setFastestProviderTime] = useState(999999)

  const viewProvider = (provider) => {
    setViewingProviders(false)
    setViewingProvider(provider)
  }

  const getProviders = () => {
    FrontEndService.fetchProviders().then(r => {
        dispatch({type: 'SET_PROVIDERS', payload: r})
        console.log(r)
      }
    )
  }

  useEffect(() => {
    getProviders()
  }, [])

  useEffect(() => {
    if (providerCostData.length > 0) {
      let cheapestProviderCost = Math.min.apply(null, providerCostData)

      if (cheapestProviderCost < minCost) {
        setMinCost(cheapestProviderCost)
      }
    }
    if (providerDistanceData.length > 0) {
      let closestProviderDistance = Math.min.apply(null, providerDistanceData)

      if (closestProviderDistance < minDistance) {
        setMinDsitance(closestProviderDistance)
      }
    }
    if (providerRatingData.length > 0) {
      let highestRating = Math.min.apply(null, providerRatingData)

      if (highestRating < bestProviderRating) {
        setBestProviderRating(highestRating)
      }
    }
    if (providerSpeedData.length > 0) {
      let fastestProvider = Math.min.apply(null, providerSpeedData)

      if (fastestProvider < fastestProviderTime) {
        setFastestProviderTime(fastestProvider)
      }
    }
  }, [providerCostData])

  return (
    <Modal classname='jobs-modal'>
      <Header title={'Providers Available For Job'} closeFunction={closeFunction}/>

      <p>
        If one provider fulfills more than one criteria superlative, they are likely a strong candidate for the job.
      </p>

      <div className='jobs-modal-content'>
        <table>
          <SuperlativeTableHeaders job={job} fastestProviderTime={fastestProviderTime}/>
          <tbody>
          <tr>
            <td>
              ${minCost}
            </td>
            {job.location_type !== 'REMOTE' ? (
              <td>
                {minDistance}km
              </td>
            ) : <td>Consider Remote Provider</td>}
            <td>
              {bestProviderRating}
            </td>
            {(fastestProviderTime && fastestProviderTime > 0 && fastestProviderTime < 100) && (
              <td>
                {fastestProviderTime} days
              </td>
            )}
          </tr>
          </tbody>
        </table>
      </div>

      <Content className='jobs-modal-content'>
        {viewingProviders && (
          <table>
            <ProviderTableHeaders/>
            <tbody>
            {state.providers.length > 0 && (state.providers.map((provider, i) => {
                return (
                  <ProviderListing
                    key={provider.id}
                    job={job}
                    provider={provider}
                    onClick={() => viewProvider(provider)}
                    providerCostData={providerCostData}
                    setProviderCostData={setProviderCostData}
                    providerDistanceData={providerDistanceData}
                    setProviderDistanceData={setProviderDistanceData}
                    providerRatingData={providerRatingData}
                    setProviderRatingData={setProviderRatingData}
                    bestProviderRating={bestProviderRating}
                    setBestProviderRating={setBestProviderRating}
                    providerSpeedData={providerSpeedData}
                    setProviderSpeedData={setProviderSpeedData}
                  />
                )
              })
            )}
            </tbody>
          </table>
        )}
        {!viewingProviders && (
          <ProviderDetail provider={viewingProvider} onClick={() => setViewingProviders(true)}/>
        )}
      </Content>
    </Modal>
  )
}

export default JobModal
