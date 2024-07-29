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
            const {data} = await axios.get('https://freetestapi.com/api/v1/currencies?', {
                params: {
                    search: searchTerm
                }
            });

            console.log("Hurray! Got some data: " + data);
            const currency : PayloadType = data.map((result: any) => {
                console.log(result);
                
                return {
                    name: result.name,
                    code: result.code,
                    symbol: result.symbol,
                    exchange_rate: result.exchange_rate,
                    countries: result.countries.map((c: string) => c),
                    description: result.description
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