import React from "react"
import "./styles.css"
import { CalWrapper } from "./useMemoWrapper/CalWrapper"
// import { AjaxListWrapper } from "./AjaxListWrapper/AjaxListWrapper"
// import { CounterWrapper } from "./useReducerWrapper/CounterWrapper"
// import { GameProvider } from "./useContextWrapper/GameProvider"
// import { GameProgress } from "./useContextWrapper/GamePrograss"

const App = () => {
  return (
    <div className="App">
      <h1>React Hooks Practice</h1>
      <div>
        {/* <CounterWrapper /> */}
        {/* <AjaxListWrapper /> */}
        {/* <GameProvider>
          <GameProgress />
        </GameProvider> */}
        <CalWrapper />
      </div>
    </div>
  )
}

export default App
