import { ActionType } from "../types/actionTypes";
import { PayloadType } from "../types/payloadType";

interface SearchCurrenciesAction {
    type: ActionType.SEARCH_CURRENCY;
}

interface SearchCurrenciesSuccessAction {
    type: ActionType.SEARCH_CURRENCY_SUCCESS;
    payload: PayloadType | any
}

interface SearchCurrenciesFailureAction {
    type: ActionType.SEARCH_CURRENCY_FAILURE;
    payload: string
}

export type Action = SearchCurrenciesAction | SearchCurrenciesSuccessAction | SearchCurrenciesFailureAction;