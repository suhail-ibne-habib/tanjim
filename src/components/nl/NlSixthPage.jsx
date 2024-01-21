import React from 'react';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';
import Car from '../../assets/img/car-worldicon.png'


export default function NlSixthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <div className="wrap sidebar-float flex">
                        <img src={PlaceHolder} alt="" />
                    </div>
                </div>
                <div className="main">
                    <div className="box light">
                        <h2 className="title colored">Vermeden CO&#8322; uitstoot</h2>
                        <h3 className="sub-title">Dit gebouw produceert zonne-energie!</h3>
                        <div className="line"></div>
                        <div className="wrap">

                            <h3 className='bold mb-4'>Totaal bespaarde hoeveelheid CO&#8322;: 319 t</h3>
                            <div className="row" style={{height: "90%"}}>
                                <div className="col-xs-12 col-sm-6">
                                    <h4 style={{fontWeight: 500}} className='mb-4'>De vermeden CO&#8322;-uitstoot komt ongeveer overeen met 61,2 maal de wereldomtrek met een (Kleine auto).</h4>
                                    <h4 style={{fontWeight: 500}} className="mb-2">Afgelegde afstand: 2.451.085 km</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6 flex align-end">
                                    <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                </div>
                            </div>

                        </div>

                        <p className='mb-2'>ek van de aarde 40.074</p>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}