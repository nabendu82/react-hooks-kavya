import { useState } from "react"

const ObjDemo = () => {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})} />
            <h2>First Name - {name.firstName}</h2>
            <h2>Last Name - {name.lastName}</h2>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}
export default ObjDemo