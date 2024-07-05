import { useEffect, useRef } from "react"

const RefsDemo = () => {
    const userRef = useRef()
    const langRef = useRef()

    useEffect(() => {
        userRef.current.focus()
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Name - ${userRef.current.value}, Language - ${langRef.current.value}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username </label>
                <input type="text" id="username" ref={userRef} />
            </div>
            <br />
            <div>
                <label htmlFor="language">Language </label>
                <input type="text" id="language" ref={langRef} />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}
export default RefsDemo