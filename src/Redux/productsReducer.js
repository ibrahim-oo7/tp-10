import { ADD_PRODUCT,DETAILS,FILTER_PRODUCT } from "./ActionType";

const stateInitial = {
products: [
    {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    category: "electronics",
    description: "Bluetooth wireless headphones with noise cancellation",
    image: "th.jpg",
  },
  {
    id: 2,
    title: "Men Cotton Jacket",
    price: 89.5,
    category: "men's clothing",
    description: "Warm cotton jacket for men, suitable for winter",
    image: "tj.jpg",
    
  },
  {
    id: 3,
    title: "Women Gold Necklace",
    price: 120,
    category: "jewelery",
    description: "Elegant gold necklace for women",
    image: "OIP.jpg",
    
  },
  {
  id: 4,
  title: "Smart Watch Series 5",
  price: 149.99,
  category: "electronics",
  description: "Smart watch with heart rate monitor, GPS, and fitness tracking",
  image: "watch.jpg",
},
{
  id: 5,
  title: "Running Sneakers",
  price: 75,
  category: "men's clothing",
  description: "Lightweight running sneakers with breathable material",
  image: "sperdina.jpg",
},
{
  id: 6,
  title: "Leather Travel Backpack",
  price: 110,
  category: "men's clothing",
  description: "Durable leather backpack suitable for travel, work, and daily use",
  image: "malita.jpg",
},
{
  id: 7,
  title: "Smart Fitness Watch",
  price: 75,
  category: "electronics",
  description: "Track your daily activity and heart rate with this smart fitness watch",
  image: "watch 2.jpg",
},
{
  id: 8,
  title: "Women's Summer Dress",
  price: 45,
  category: "women's clothing",
  description: "Light and breezy summer dress, perfect for casual outings",
  image: "kswa.jpg",
},
{
  id: 9,
  title: "Stainless Steel Water Bottle",
  price: 25,
  category: "jewelery",
  description: "Reusable stainless steel water bottle, keeps drinks cold or hot for hours",
  image: "qraei.jpg",
},
{
  id: 10,
  title: "Wireless Gaming Mouse",
  price: 60,
  category: "electronics",
  description: "Ergonomic wireless mouse with customizable buttons for gaming",
  image: "sourie.jpg",
}
],
filteredProducts: [],
loading: false,
error: null,
selectedCategory: "all", 
maxPrice: 0,
productDetails : null
};

export const productsReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case ADD_PRODUCT : 
            return {
                ...state,
                products : [...state.products,action.payload]
            }
        case DETAILS :
          return {
            ...state,
            productDetails : action.payload
          }
        case FILTER_PRODUCT : 
          return {
            ...state,
            filteredProducts : 
            action.payload === "" ? state.products 
            : state.products.filter(pro => pro.category.includes(action.payload)) 
          }
        default :
            return state;            
    }         
}
