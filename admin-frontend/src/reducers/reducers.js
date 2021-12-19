import authReducer from "./auth.reducers";
import userReducer from './user.reducers';
import { combineReducers } from "redux";
import productReducer from './product.reducer';
import orderReducer from './order.reducer';
import categoryReducer from './category.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
})

export default rootReducer;
