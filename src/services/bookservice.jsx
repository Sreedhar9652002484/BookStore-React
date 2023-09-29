import axios from "axios"


const headerConfig = () => {
    return {
        headers: {
            'x-access-token': localStorage.getItem("token")
        }
    }
}

export const GetAllBooks = async () => {
    let response = await axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book');
    return response;
}

export const AddToCart = async (product_id) => {
    try {

        let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${product_id}`, {}, headerConfig())
        return response;
    }
    catch (error) {
        throw error;
    }
}
export const GetAllCartItem = async () => {
    try {
        let response = await axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items', headerConfig())
        return response;
    }

    catch (error) {
        throw error;
    }

}
export const AddQuantity = async (cartItem_id, count) => {
    try {
        const requestbody = {

            "quantityToBuy": count

        }
        let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartItem_id}`, requestbody, headerConfig())
        return response;
    }
    catch (error) {
        throw error;
    }
}
export const RemoveItem = async (cartItem_id) => {
    try {
        
        let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${cartItem_id}`,headerConfig())
        return response;
    }
    catch (error) {
        throw error;
    }
}
export const CustomerDetailsEdit = async (obj) => {
    try {
        let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,obj,headerConfig())
        return response;
    }
    catch (error) {
        throw error;
    }
}
