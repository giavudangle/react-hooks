import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GOOGLE_TRANSLATE_API_ENDPOINT = 'https://translation.googleapis.com/language/translate/v2';
const GOOGLE_TRANSLATE_API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

export default function Convert({language,text}) {
    const [translated,setTranslated] = useState('')
    const [debouncedText,setDebouncedText] = useState(text);
    useEffect(() => {
        const textTypingTimerId = setTimeout(() => {
            setDebouncedText(text);
        },500)
        return () => clearTimeout(textTypingTimerId)
    },[text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(GOOGLE_TRANSLATE_API_ENDPOINT,{},{
                params:{
                    q:debouncedText,
                    target:language.value,
                    key:GOOGLE_TRANSLATE_API_KEY
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    },[language,debouncedText])

    return (
        <div>
            <h2 className="ui header">{translated}</h2>
        </div>
    )
}
