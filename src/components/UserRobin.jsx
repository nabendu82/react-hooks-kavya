import React, { useContext } from 'react'
import { CountContext } from '../App'

const UserRobin = () => {
    const countContext = useContext(CountContext)

    return (
        <h2>
        <h2>UserRobin - {countContext.count}</h2>
        <button onClick={() => countContext.dispatch('increment')}>Increment</button>
        <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.dispatch('reset')}>Reset</button>
    </h2>
    )
}

export default UserRobin