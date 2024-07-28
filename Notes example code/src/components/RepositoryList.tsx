import React, { useState } from "react";
import { actionCreators, useAppDispatch, useAppSelector } from "../state";


export const RepositoryList : React.FC = () => {
    const [term,setTerm] = useState('');
    const dispatch = useAppDispatch();
    const { data,error,loading } = useAppSelector(state => state.reducers.repositories);

    const onSubmit = (event : React.FormEvent<HTMLFormElement> ) =>  {
        event.preventDefault();
        dispatch(actionCreators.searchRepositories(term));

    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" value={term} onChange={e =>  setTerm(e.target.value)} />
            <button type="submit">Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading....</h3>}
        {
           !error && !loading && data && data.map((name : string) => <li >{name}</li> )
        }
    </div>
}