import axios from 'axios';
import React, { useEffect, useState } from 'react';
const API_ENDPOINT = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
    const [term,setTerm] = useState("");
    useEffect(() => {
        (async () => {
            await 
            axios.get(API_ENDPOINT,{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            })
        })() 
    },[term])

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term </label>
                    <input 
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="input"/>
                </div>
            </div>
        </div>
    )
}
export default Search;