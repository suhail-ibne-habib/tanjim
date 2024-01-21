import React, {useState, useEffect} from 'react';

import Product from '../template/Product';

import { getProduct1 } from '../../data';

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';

export default function FrSecondPage(){

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
                        <h2 className="title colored">L'énergie verte pour un usage domestique</h2>
                        <h3 className="sub-title">Facq, prêt pour l'avenir</h3>
                        <div className="line"></div>
                        <h2><strong>Avec l'énergie solaire (107,73 kWh) générée aujourd'hui, vous pouvez utiliser les appareils électroménagers suivants pendant une heure:</strong></h2>
                        <div className="product-wrap">
                            {data.map( item => {
                                return(
                                    <Product price={item.price} img={item.img} />
                                )
                            } )}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}