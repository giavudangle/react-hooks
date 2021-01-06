

import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'




const options = [
    {
        label:'English',
        value:'en'
    },
    {
        label:'Vietnamese',
        value:'vi'
    },
    {
        label:'Chinese (Simplified)	',
        value:'zh'
    },
    {
        label:'Korean',
        value:'ko'
    },
]


export default function Translate() {
    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input value={text} onChange={e => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
            label='Select a language'
            onSelectedChange={setLanguage}
            selected={language}
            options={options}/>
            <hr/>
            <h3 className='ui header'>Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}
