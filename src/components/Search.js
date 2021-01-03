import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_URL = 'https://en.wikipedia.org/w/api.php';



const Search = () => {
    const [term,setTerm] = useState("");

 
    useEffect(() => {
      (fetch(API_URL,{
          params:{
              action:'query',
              list:'search',
              origin:'*',
              format:'json',
              srsearch:term
          }
      })).then(data => console.log(data))
      ()
      
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