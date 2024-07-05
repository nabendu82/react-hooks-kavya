import React from "react"

const Count = ({ text, count }) => {
    console.log(`Rendering ${text} - ${count}`)
    return (
        <h4>{text} - {count}</h4>
    )
}
export default React.memo(Count)