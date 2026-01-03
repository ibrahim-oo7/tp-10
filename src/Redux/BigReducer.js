import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productsReducer } from "./productsReducer";
import { CartReducer } from "./CartReducer";

export const BigReducer = combineReducers({
    authentification : authReducer,
    products : productsReducer,
    cart : CartReducer
});

export default BigReducer;