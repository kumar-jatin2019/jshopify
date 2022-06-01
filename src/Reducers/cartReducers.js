
import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import { ADD_QUANTITY, ADD_SHIPPING, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY } from "../Actions/cart-type";



const initState = {
    items: [
        { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
        { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
        { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
        { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
        { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
        { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }

    ],
    addedItems: [],
    total: 0,
    quant: 0

}
// const cartReducer= (state = initState,action)=>{

//     //INSIDE HOME COMPONENT
//     if(action.type === ADD_TO_CART){
//         debugger;
//         let addedItem = state.items.find(item=> item.id === action.id)
//         console.log(addedItem);
//         //check if the action id exists in the addedItems
//        let existed_item= state.addedItems.find(item=> action.id === item.id)

//        if(existed_item)

//        {
//         debugger;
//           addedItem.quantity += 1

//           let newTotal = state.total + addedItem.price
//           return{
//               ...state,
//               total: newTotal,
//               quant:state.quant + 1

//           }
//         //    return{
//         //       ...state,
//         //        total: state.total + addedItem.price ,
//         //        quant:  addedItem.quantity  + state.quant - 1
//         //         }
//       }
//        else{
//           addedItem.quantity = 1;
//           //calculating the total
//           let newTotal = state.total + addedItem.price 
//           let newQuantity = state.quant+ addedItem.quantity
//           console.log(newQuantity);

//           return{
//               ...state,
//               addedItems: [...state.addedItems, addedItem],
//               total : newTotal,
//               quant:newQuantity
//           }

//       }
//   }
//     if(action.type === REMOVE_ITEM){
//         let itemToRemove= state.addedItems.find(item=> action.id === item.id)
//         let new_items = state.addedItems.filter(item=> action.id !== item.id)
//         console.log(new_items);
//            let newQuant = state.quant;
//         console.log(newQuant);
//         debugger;
//         //calculating the total
//         let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
//         console.log(itemToRemove)

//          let newQuantity = state.quant - itemToRemove.quantity
//          console.log(newQuantity)

//         return{
//             ...state,
//             addedItems: new_items,
//             total: newTotal,
//             quant:newQuantity

//         }
//     }
//     //INSIDE CART COMPONENT
//     if(action.type=== ADD_QUANTITY){
//         debugger;
//         let addedItem = state.items.find(item=> item.id === action.id)
//           addedItem.quantity += 1 
//           let newTotal = state.total + addedItem.price
//           let newQuantity = state.quant + 1;

//           return{
//               ...state,
//               addedItems: [...state.addedItems],
//               total: newTotal,
//               quant:newQuantity
//           }
//     }
//     if(action.type=== SUB_QUANTITY){  
//         debugger;
//         let addedItem = state.items.find(item=> item.id === action.id) 
//         //if the qt == 0 then it should be removed
//         if(addedItem.quantity === 1){
//             let new_items = state.addedItems.filter(item=>item.id !== action.id)
//             let newTotal = state.total - addedItem.price
//             let newQuantity = state.quant -1
//             return{
//                 ...state,
//                 addedItems: new_items,
//                 total: newTotal,
//                 quant:newQuantity
//             }
//         }
//         else {
//             debugger;
//             addedItem.quantity -= 1
//             let newTotal = state.total - addedItem.price
//             let newQuantity = state.quant -1

//             return{
//                 ...state,
//                 addedItems: [...state.addedItems],
//                 total: newTotal,
//                 quant:newQuantity
//             }
//         }

//     }

//     if(action.type=== ADD_SHIPPING){
//           return{
//               ...state,
//               total: state.total + 6
//           }
//     }

//     if(action.type=== 'SUB_SHIPPING'){
//         return{
//             ...state,
//             total: state.total - 6
//         }
//   }

//   else{
//     return state
//     }

// }

// export default cartReducer


// New Code 




export default (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            debugger;
            let addedItem = state.items.find(item => item.id === payload)
            console.log(addedItem);
            //check if the payload id exists in the addedItems
            let existed_item = state.addedItems.find(item => payload === item.id)

            if (existed_item) {
                debugger;
                addedItem.quantity += 1

                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    total: newTotal,
                    quant: state.quant + 1

                }

            }
            else {
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price
                let newQuantity = state.quant + addedItem.quantity
                console.log(newQuantity);

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal,
                    quant: newQuantity
                }

            }


        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => payload === item.id)
            let new_items = state.addedItems.filter(item => payload !== item.id)
            console.log(new_items);
            let newQuant = state.quant;
            console.log(newQuant);
            debugger;
            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)

            let newQuantity = state.quant - itemToRemove.quantity
            console.log(newQuantity)

            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                quant: newQuantity

            }



        case ADD_QUANTITY:
            
            debugger;
                    let addedProd = state.items.find(item=> item.id === payload)
                      addedProd.quantity += 1 
                      let newTotals = state.total + addedProd.price
                      let newQuantityy = state.quant + 1;
            
                      return{
                          ...state,
                          addedItems: [...state.addedItems],
                          total: newTotals,
                          quant:newQuantityy
                      }



           case SUB_QUANTITY:

           let addedItemSub = state.items.find(item=> item.id === payload) 
                   //if the qt == 0 then it should be removed
                   if(addedItemSub.quantity === 1){
                       let new_items = state.addedItems.filter(item=>item.id !== payload)
                       let newTotal = state.total - addedItemSub.price
                       let newQuantity = state.quant -1
                       return{
                           ...state,
                           addedItems: new_items,
                           total: newTotal,
                           quant:newQuantity
                       }
                   }
                   else {
                       debugger;
                       addedItemSub.quantity -= 1
                       let newTotal = state.total - addedItemSub.price
                       let newQuantity = state.quant -1
           
                       return{
                           ...state,
                           addedItems: [...state.addedItems],
                           total: newTotal,
                           quant:newQuantity
                       }
                   }




        default:
            return state;
    }
};
  //


