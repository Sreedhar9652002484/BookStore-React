import axios from "axios"

export const GetAllBooks=async()=>{
    let response=await axios.get('https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book');
    return response;
}
export const AddQuantity=async (cartitemid)=>{
    let response=await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${cartitemid}`);
    return response;
}