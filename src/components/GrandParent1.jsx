import React from 'react'
import Parent1 from './Parent1'
import UserRobin from './UserRobin'

const GrandParent1 = () => {
    return (
        <div>
            <Parent1 />
            <UserRobin />
        </div>
    )
}

export default GrandParent1