import { useEffect, useState } from "react"
import axios from "axios"
import User from "./User"

const ListUser = () => {
    const [users, setUsers] = useState([])

    // useEffect(() => {
    //     const url = 'https://jsonplaceholder.typicode.com/users';
    //     axios.get(url)
    //             .then(res => {
    //                 console.log(res.data)
    //                 setUsers(res.data)
    //             })
    //             .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        const fetchUsers = async() => {
            const url = 'https://jsonplaceholder.typicode.com/users';
            const res = await axios.get(url)
            setUsers(res.data)
        }
        fetchUsers()
    },[])

    return (
        <>
            <h1>List of Users</h1>
            {users && users.length && users.map(user => <User key={user.id} user={user} />)}
        </>
    )
}
export default ListUser