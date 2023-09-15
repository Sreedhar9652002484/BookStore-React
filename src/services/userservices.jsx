import axios from 'axios';


export const UserRegister=async(obj)=>{
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',obj)
}