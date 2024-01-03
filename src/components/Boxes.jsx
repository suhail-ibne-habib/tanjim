import React,{useEffect, useState} from 'react';
import Box from '../components/Box'

import source from '../data'

export default function Boxes(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(source)
    }, [])

    console.log(data)

    return(
        <>
            <div className="grid-3" id="boxes">
                {data.map(item=>{
                    return <Box title={item.title} speed={item.speed} />
                })}
            </div>
        </>
    )
}