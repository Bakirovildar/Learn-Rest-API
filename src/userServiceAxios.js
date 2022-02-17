const url = 'http://localhost:3001'
const axios = require('axios');

const getAllUsers = () => {
    return axios.get(`${url}/users`)
        .then(response => response.data)
}

const createUser = (user) => {
    return axios.post(`${url}/users`, user)
}

const updateUser = (user) => {
    return axios.put(`${url}/users/${user.id}`, user)
}

const removeUser = (id) => {
    return axios.delete(`${url}/users/${id}`)
}

export {getAllUsers, createUser, removeUser, updateUser}