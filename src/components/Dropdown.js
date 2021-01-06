import React, { useState,useEffect,useRef } from 'react'

export default function Dropdown({options,selected,onSelectedChange,label}) {
    const [visible,setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const bodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return ;
            }
            setVisible(false);
        };

        document.body.addEventListener('click',bodyClick);

        return () => document.body.removeEventListener('click',bodyClick);
    },[])

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        return(
            <div 
            onClick={() => onItemSelected(option)}
            key={option.value} 
            className="item">
                {option.label}
            </div>
        ) 
    })

    const onItemSelected = (option) => {
        onSelectedChange(option)
        setVisible('')
    }



    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                onClick={() => setVisible(!visible)} 
                className={`ui selection dropdown ${visible ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ visible ? 'transition visible' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
