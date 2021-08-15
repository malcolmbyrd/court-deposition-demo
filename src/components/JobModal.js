import React from "react";
import {Modal, Header, Content} from "./Modal";
import FrontEndService from "../services/frontEndService";
import {useContext, useEffect, useState} from "react";
import {Context} from "../store";
import ProviderListing from "./ProviderListing";
import ProviderDetail from "./ProviderDetail";
import ProviderTableHeaders from "./ProviderTableHeaders";

const JobModal = ({job, closeFunction}) => {
  const [state, dispatch] = useContext(Context)
  const [viewingProviders, setViewingProviders] = useState(true) // Toggle between list and individual
  const [viewingProvider, setViewingProvider] = useState({}) // Store single provider for detail view

  const [cheapestProvider, setCheapestProvider] = useState({
    full_name: 'Expensive Provider',
    avg_cost_per_page: '99999999'
  })
  const [cheapestProviderCost, setCheapestProviderCost] = useState(0)

  const [closestProvider, setClosestProvider] = useState({})
  const [closestProviderDistance, setClosestProviderDistance] = useState('9999')

  const [highestRatedProvider, setHighestRatedProvider] = useState({})
  const [bestProviderRating, setBestProviderRating] = useState(9)

  const [fastestProvider, setFastestProvider] = useState({})
  const [fastestProviderTime, setFastestProviderTime] = useState(0)

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

  return (
    <Modal classname='jobs-modal'>
      <Header title={'Providers Available For Job'} closeFunction={closeFunction}/>

      <p>
        &nbsp;If one provider fulfills more than one criteria superlative, they are likely a strong candidate for the job.
      </p>

      <p>
        <br />
        &nbsp;The cheapest provider is: <b>{cheapestProvider.full_name}</b>,
        with an average page cost of <b>${cheapestProviderCost}</b>
      </p>

      {job.location_type !== 'REMOTE' && (
        <p>
          <br />
          &nbsp;The closest provider is: <b>{closestProvider.full_name}</b>, {closestProviderDistance}km away
        </p>
      )}

      <p>
        <br />
        &nbsp;One of the highest rated providers is: <b>{highestRatedProvider.full_name}</b>,
        with an average rating of <b>{bestProviderRating}</b>. <br />
        &nbsp;A rating of 1 is common, so make sure to check other factors.
      </p>

      <p>
        <br />
        &nbsp;The fastest provider is: <b>{fastestProvider.full_name}</b>,
        with an average completion time of <b>{fastestProviderTime}</b> days
      </p>

      <Content className='jobs-modal-content'>
        {viewingProviders && (
          <table>
            <ProviderTableHeaders />
            <tbody>
            {state.providers.length > 0 && (state.providers.map((provider, i) => {
                return (
                  <ProviderListing
                    key={provider.id}
                    job={job}
                    provider={provider}
                    onClick={() => viewProvider(provider)}
                    cheapestProvider={cheapestProvider}
                    setCheapestProvider={setCheapestProvider}
                    setCheapestProviderCost={setCheapestProviderCost}
                    closestProvider={closestProvider}
                    setClosestProvider={setClosestProvider}
                    closestProviderDistance={closestProviderDistance}
                    setClosestProviderDistance={setClosestProviderDistance}
                    highestRatedProvider={highestRatedProvider}
                    setHighestRatedProvider={setHighestRatedProvider}
                    bestProviderRating={bestProviderRating}
                    setBestProviderRating={setBestProviderRating}
                    fastestProvider={fastestProvider}
                    fastestProviderTime={fastestProviderTime}
                    setFastestProvider={setFastestProvider}
                    setFastestProviderTime={setFastestProviderTime}
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
