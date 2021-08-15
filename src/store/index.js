import {createContext, useReducer} from 'react';

const initialState = {
  jobs: [],
  providers: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return {
        ...state,
        jobs: action.payload
      };
    case 'SET_PROVIDERS':
      return {
        ...state,
        providers: action.payload
      }
  }

  return state
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initialState)
export default Store
