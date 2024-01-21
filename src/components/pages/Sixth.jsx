import React from 'react';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Car from '../../assets/img/car-worldicon.png'


export default function Sixth(){

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
                        <h2 className="title colored">Avoided CO&#8322; emissions</h2>
                        <h3 className="sub-title">This building produces solar energy!</h3>
                        <div className="line"></div>
                        <div className="wrap">

                            <h3 className='bold mb-4'>Total amount of CO&sup2; saved: 319 t</h3>
                            <div className="row" style={{height: "90%"}}>
                                <div className="col-xs-12 col-sm-6">
                                    <h4 style={{fontWeight: 500}} className='mb-4'>The avoided CO&#8322; emissions correspond approximately to 61.2 times the circumference of the world with a (Small car).</h4>
                                    <h4 style={{fontWeight: 500}} className="mb-2">Distance traveled: 2,451,085 km</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6 flex align-end">
                                    <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                </div>
                            </div>

                        </div>

                        <p className='mb-2'>I of the earth 40.074</p>

                    </div>
                    
                </div>
            </div>
        </>
    )
}