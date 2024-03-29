import React, {useState, useEffect} from 'react';
import Product2 from '../template/Product2';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import { getProduct2 } from '../../data';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';

export default function NlThirdPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct2())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="" placeholder={PlaceHolder}/>
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Vermeden CO&#8322; uitstoot</h2>
                                <h3 className="sub-title">Dit gebouw produceert zonne-energie!</h3>
                                <div className="line"></div>
                            </div>
                            <div className="box__content">

                                <h3 className="bold">Vermeden CO&#8322; uitstoot sinds 30.11.2021:<br></br>
                            319 t; dit staat gelijik aan:</h3>
                                <div className="product-wrap" style={{alignItems: "flex-end"}}>
                                    {data.map( item => {
                                        return(
                                            <Product2 q={item.q} title={item.title} img={item.img} />
                                        )
                                    } )}
                                </div>
                                <Copyright />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}