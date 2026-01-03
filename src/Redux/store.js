import { createStore } from "redux";

import  {BigReducer} from "./BigReducer";

export const store = createStore(BigReducer);

export default store;