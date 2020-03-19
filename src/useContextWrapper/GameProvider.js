import React, { useReducer, createContext } from "react"

const DispatchContext = createContext()
const StateContext = createContext()

const defaultState = {
  dieOne: 0
}

const reducer = (state, action) => {
  return state
}

const GameProvider = ({ children }) => {
  const initState = {
    ...defaultState
  }

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export { GameProvider, DispatchContext, StateContext }
