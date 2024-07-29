import { Action } from "../actions";
import { ActionType } from "../types/actionTypes";
import { PayloadType } from "../types/payloadType";

export interface CurrenciesState {
    loading: boolean;
    data: PayloadType | any;
    error: string | null;
}

const initialState: CurrenciesState = {
    loading: false,
    data: null,
    error: null
}

const currencyReducer = (state = initialState, action: Action) : CurrenciesState => {
    switch (action.type) {
        case ActionType.SEARCH_CURRENCY:
            return {loading: true, data: null, error: null};

        case ActionType.SEARCH_CURRENCY_SUCCESS:
            return {loading: false, data: action.payload, error: null};

        case ActionType.SEARCH_CURRENCY_FAILURE:
            return {loading: false, data: null, error: action.payload};

        default:
            return state;
    }
}

export default currencyReducer;