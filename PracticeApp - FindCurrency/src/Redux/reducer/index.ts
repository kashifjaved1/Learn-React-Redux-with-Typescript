import { combineReducers } from '@reduxjs/toolkit';
import currencyReducer from './currenciesReducer';

const rootReducer = combineReducers({
    currencies: currencyReducer
});

export default rootReducer;