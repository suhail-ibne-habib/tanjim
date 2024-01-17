import React,{useEffect, useState} from 'react';

import axios from 'axios';

import setCookie from '../hooks/setCookie';
import getCookies from '../hooks/getCookies';

import Box from '../components/Box'

import source, {getFrData} from '../data'

export default function Boxes(props){

    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [cookieData, setCookieData] = useState([])

    useEffect(()=>{
        axios.post("https://uatapi.display-anywhere.com/api/getenergysummary")
        .then(resp => {
            if (resp.status === 200) {
                const res = JSON.parse(resp.data.data)
                
                const formattedData = Object.entries(res[0]).map(([title, speed]) => ({
                    title: title.charAt(0).toUpperCase() + title.slice(1), // Capitalize the first letter
                    speed: `${speed} ${title === 'yearly' ? 'MWh' : 'kWh'}`
                }));
                setResult(formattedData)
            }

        })
        .catch(error => setError(error))
        
    }, [])

    useEffect(()=>{
        const cookieArray = getCookies();
        setCookieData(cookieArray);

    }, [])

    useEffect( ()=>{
        if( cookieData.length === 0 ){
            if( props.ln === "fr" ){
                setResult(getFrData);
            }else{
                setResult(result)
            }

            result.map( item=>{
                return setCookie(item.title, item.speed)
            })
        }
    }, [cookieData, result, props.ln])

    return(
        <>
            <div className="grid-3" id="boxes">
                {cookieData.map((item, idx)=>{
                    return <Box key={idx} title={item.title} speed={item.speed} />
                })}
            </div>
        </>
    )
}