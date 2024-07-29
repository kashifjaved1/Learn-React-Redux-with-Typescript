import React, { useState } from "react";
import { actionCreators, useAppDispatch, useAppSelector } from "../Redux";

export const Currencies: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useAppDispatch();
    const {loading, data, error} = useAppSelector(state => state.currencies);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actionCreators.searchCurrencies(searchTerm));
        setSearchTerm('');
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Enter currency name to search" value={searchTerm} onChange={e =>  setSearchTerm(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading....</h3>}
            {
                !error && !loading && data && data.length === 1 ? (
                    <>
                    <br />
                    <li>Name: {data[0].name}</li>
                    <li>Description: {data[0].description}</li>
                    <li>Code: {data[0].code}</li>
                    <li>Symbol: {data[0].symbol}</li>
                    <li>Exchange Rate: {data[0].exchange_rate}</li>
                    <li>Countries: <ul>{data[0].countries.map((country: string) => <li>{country}</li>)}</ul></li>
                </>
                ) : null
            }
        </>
    );
}