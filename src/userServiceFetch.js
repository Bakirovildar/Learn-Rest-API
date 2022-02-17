const url = 'http://localhost:3001'

const getAllUsers = () => {
    return fetch(`${url}/users`)
        .then(response => response.json())
}

const createUser = (user) => {
    return fetch(`${url}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

const updateUser = (user) => {
    return fetch(`${url}/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

const removeUser = (id) => {
    return fetch(`${url}/users/${id}`, {
        method: 'DELETE'
    })
}

export {getAllUsers, createUser, removeUser, updateUser}