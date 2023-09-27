import axios from 'axios';




export const UserRegister = async (obj) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', obj)
    return response;
}

export const UserLogin = async (obj) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', obj)
    return response;
}
