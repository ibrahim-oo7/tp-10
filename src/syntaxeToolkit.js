// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [
//     { id: 1, name: "product1", prix: 13.44, qte: 0 },
//     { id: 2, name: "product2", prix: 15.66, qte: 0 },
//     { id: 3, name: "product3", prix: 12.0, qte: 0 },
//     { id: 4, name: "product4", prix: 14.55, qte: 0 },
//     { id: 5, name: "product5", prix: 10.99, qte: 0 }
//   ],
//   Qtes: 0,
//   total: 0,
//   cart: []
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     setQuantity: (state, action) => {
//       const { id, value } = action.payload;

//       // update products
//       state.products = state.products.map(product =>
//         product.id === id ? { ...product, qte: value } : product
//       );

//       // update cart
//       state.cart = state.cart.map(item =>
//         item.id === id ? { ...item, qte: value } : item
//       );
//     },

//     addCart: (state, action) => {
//       state.cart.push(action.payload);
//     },

//     removeCart: (state, action) => {
//       state.cart = state.cart.filter(item => item.id !== action.payload);
//     },

//     updateCart: (state, action) => {
//       state.cart = state.cart.map(item =>
//         item.id === action.payload.id ? action.payload : item
//       );
//     },

//     setQuantityTotal: (state, action) => {
//       state.Qtes += Number(action.payload);
//     },

//     setTotal: (state, action) => {
//       state.total += Number(action.payload);
//     }
//   }
// });

// export const {
//   setQuantity,
//   addCart,
//   removeCart,
//   updateCart,
//   setQuantityTotal,
//   setTotal
// } = cartSlice.actions;

// export default cartSlice.reducer;
