import axios from 'axios';


const headerConfig=()=>{
    return{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    }
}

export const UserRegister = async (obj) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration', obj)
    return response;
}

export const UserLogin = async (obj) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login', obj)
    return response;
}

const token = localStorage.getItem("token")
export const AddToCart = async (product_id) => {


    try {
        console.log('token',token)

        console.log(product_id)
        let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${product_id}`, {}, headerConfig())
        return response;
    }
    catch (error) {
        throw error;
    }
}