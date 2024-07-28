import { combineReducers } from "redux";
import currencyReducer from "./currenciesReducer";


const rootReducer = combineReducers({
    currencies: currencyReducer
})

export default rootReducer;