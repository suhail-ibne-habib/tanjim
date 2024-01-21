import React, {useState, useEffect} from 'react';

import Product from '../template/Product';

import { getProduct1 } from '../../data';

import PlaceHolder from '../../assets/img/floating-img.jpg';

export default function SecondPage(){

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
                        <h2 className="title colored">Green energy for household use</h2>
                        <h3 className="sub-title">Facq, ready for the future</h3>
                        <div className="line"></div>
                        <h2 className='box-para'><strong>With the (107.73 kWh) solar energy generated today you can use the following household appliances for an hour:</strong></h2>
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