import React, { useState } from "react";
import { actionCreators, useAppDispatch, useAppSelector } from "../Redux";

export const Currencies: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useAppDispatch();
    const {loading, data, error} = useAppSelector(state => state.reducers.currencies);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actionCreators.searchCurrencies(searchTerm));
        setSearchTerm('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={searchTerm} onChange={e =>  setSearchTerm(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading....</h3>}
            {
            // !error && !loading && data && data.map((name : string) => <li >{name}</li> )
            }
        </>
    );
}