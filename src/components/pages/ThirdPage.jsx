import React, {useState, useEffect} from 'react';

import Product2 from '../template/Product2';

import PlaceHolder from '../../assets/img/floating-img.jpg';

import { getProduct2 } from '../../data';

export default function SecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct2())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main align-end" style={{paddingLeft: 0}}>
                    
                    
                    <div className="box light">
                        <h2 className="title colored">Avoided CO&sup2; emissions</h2>
                        <h3 className="sub-title">This building produces solar energy!</h3>
                        <div className="line"></div>
                        <h3 className="bold">Avoided CO&sup2; emissions since 30.11.2021:<br></br>319t; this is equivalent to:</h3>
                        <div className="product-wrap" style={{alignItems: "flex-end"}}>
                            {data.map( item => {
                                return(
                                    <Product2 q={item.q} title={item.title} img={item.img} />
                                )
                            } )}
                        </div>
                        <p className="copyright">&copy;solarfox</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}