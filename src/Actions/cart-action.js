import { ADD_QUANTITY, ADD_SHIPPING, ADD_TO_CART, LOGIN_USER, REMOVE_ITEM, SUB_QUANTITY } from "./cart-type";
import axios from "axios";




// create airlines
export const createAirlines = (data) => async dispatch => {
    const result = await axios.post("http://localhost:4000/login", data);
  
  
    dispatch({
      type: LOGIN_USER,
      payload: result.data,
    })
  }

export const addToCart = (id) => async dispatch => {
  
  
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    })
  }


  export const removeItem = (id) => async dispatch => {
  
  
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    })
  }


  export const addQuantity = (id) => async dispatch => {
  
  
    dispatch({
      type: ADD_QUANTITY,
      payload: id,
    })
  }


  export const subtractQuantity = (id) => async dispatch => {
  
  
    dispatch({
      type: SUB_QUANTITY,
      payload: id,
    })
  }




  //add cart action
// export const addToCart= (id)=>{
//     debugger;
//     return{
//         type: ADD_TO_CART,
//         id
//     }
// }


//remove item action
// export const removeItem=(id)=>{
//     return{
//         type: REMOVE_ITEM,
//         id
//     }
// }





//subtract qt action
// export const subtractQuantity=(id)=>{
//     return{
//         type: SUB_QUANTITY,
//         id
//     }
// }


  
//add qt action
// export const addQuantity=(id)=>{
//     return{
//         type: ADD_QUANTITY,
//         id
//     }
// }
