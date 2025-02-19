import React, { useReducer } from 'react'
import './App.css'
import GrandParent1 from './components/GrandParent1'
// import GrandParent from './components/GrandParent'

// export const UserContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      <GrandParent1 />
    </CountContext.Provider>
  )
}

export default App
