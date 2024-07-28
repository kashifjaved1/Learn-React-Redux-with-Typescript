import axios from "axios"
import { Dispatch } from "redux"
import { Action } from "../actions"
import { ActionType } from "../types/actionTypes"
import { PayloadType } from "../types/payloadType"


export const searchCurrencies = (searchTerm: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_CURRENCY
        })

        try {
            const {data} = await axios.get('https://freetestapi.com/api/v1/currencies?search', {
                params: {
                    query: searchTerm
                }
            });

            const currency = data.objects.map((result: any) => {
                console.log(result);
                
                return {
                    name: result.name
                }
            });

            dispatch({
                type: ActionType.SEARCH_CURRENCY_SUCCESS,
                payload: currency
            })
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_CURRENCY_FAILURE,
                payload: error.message
            })
        }
    }
}