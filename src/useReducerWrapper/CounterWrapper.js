import React, { useState, useReducer } from "react"

const initalCount = { count: 0 }

const reducer = (state, actiion) => {
  switch (actiion.type) {
    case "plus":
      return { count: state.count + 1 }
    case "minus":
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const CounterWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initalCount)

  return (
    <div>
      <div className="title">{state.count}</div>
      <button onClick={() => dispatch({ type: "plus" })}>plus</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus</button>
    </div>
  )
}
