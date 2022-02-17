import React, {useEffect, useRef, useState} from 'react'
import {removeUser, updateUser} from "./userServiceFetch";
import {createUser, getAllUsers} from "./userServiceAxios";

function App() {
    const [users, setUsers] = useState([])

    const updateUsers = () => {
        getAllUsers()
            .then(json => setUsers(json))
    }

    useEffect(() => {
        updateUsers()
    }, [])

    const addUser = (event) => {
        event.preventDefault()
        const valueName = nameRef.current.value
        const valueLastName = lastNameRef.current.value
        const newUser = {name: `${valueName}`, last_name: `${valueLastName}`}

        createUser(newUser).then(() => {
            console.log('add new user:', newUser)
            updateUsers()
        })
        nameRef.current.value = null
        lastNameRef.current.value = null
    }

    const deleteUser = (id) => {
        removeUser(id).then(() => {
            console.log('deleted user with id =', id)
            updateUsers()
        })
    }

    const editUser = (event, user) => {
        event.preventDefault()
        updateUser(user).then(() => {
            console.log('edit user:', user)
            updateUsers()
        })
    }

    const changeName = (event, id) => {
        const newUsers = users.map(user => {
            if (user.id === id) {
                user.name = event.target.value
            }
            return user
        })
        setUsers(newUsers)
    }

    const changeLastName = (event, id) => {
        const newUsers = users.map(user => {
            if (user.id === id) {
                user.last_name = event.target.value
            }
            return user
        })
        setUsers(newUsers)
    }

    const nameRef = useRef(null)
    const lastNameRef = useRef(null)

    return (
        <div className="App">
            <h3>Add new User</h3>
            <form action="">
                <input type="name" ref={nameRef}/>
                <input type="lastName" ref={lastNameRef}/>
                <button onClick={(event) => addUser(event)}>Add User</button>
            </form>
            <h3>List of Users</h3>
            {users.map(user => <div key={user.id}>
                <form action="">
                    <input onChange={(event) => changeName(event, user.id)} value={user.name}/>
                    <input onChange={(event) => changeLastName(event, user.id)} value={user.last_name}/>
                    <button onClick={(event) => editUser(event, user)}>Save</button>
                    <button onClick={() => deleteUser(user.id)}>delete</button>
                </form>
            </div>)}
        </div>
    );
}

export default App;
