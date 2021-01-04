import axios from 'axios';
import React, { useEffect, useState } from 'react';
const API_ENDPOINT = 'https://en.wikipedia.org/w/api.php';

const Search = () => {
    const [term,setTerm] = useState("");
    const [results,setResults] = useState([]);


    useEffect(() => {
        console.log('rerender');
        const timeId = setTimeout(() => {
            if(term){
                (async () => {
                    const {data} = await 
                    axios.get(API_ENDPOINT,{
                        params:{
                            action:'query',
                            list:'search',
                            origin:'*',
                            format:'json',
                            srsearch:term
                        }
                    })
                    setResults(data.query.search)
                })() 
            }
        },500);

        // Cleanup
        return () => {
            console.log('cleanup');
           clearTimeout(timeId)
        }

    },[term])

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >VISIT</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}
export default Search;