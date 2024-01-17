import React, {useState, useEffect} from 'react';

import Product from '../template/Product';

import { getProduct1 } from '../../data';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

export default function NlSecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct1())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box light">
                        <h2 className="title colored">Groene stroom voor huishoudelijk gebruik</h2>
                        <h3 className="sub-title">Facq, klaar voor de toekomst</h3>
                        <div className="line"></div>
                        <h2><strong>Met de (107,73 kWh) vandaag opgewekte zonne-energie kunt u volgende huishoudelijke apparaten een uur gebruiken:</strong></h2>
                        <div className="product-wrap">
                            {data.map( item => {
                                return(
                                    <Product price={item.price} img={item.img} />
                                )
                            } )}
                        </div>
                        <p className="copyright">@solarfox</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}