import { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducer'
import { initState } from './state'

const GlobalStateCtx = createContext()

export function GlobalStateProvider({ children }) {
  const stateAndReducer = useReducer(reducer, initState)

  return (
    <GlobalStateCtx.Provider value={stateAndReducer}>
      {children}
    </GlobalStateCtx.Provider>
  )
}

export function useGlobalState() {
  return useContext(GlobalStateCtx)
}
