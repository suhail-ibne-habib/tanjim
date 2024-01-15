import React from 'react';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Car from '../../assets/img/car-worldicon.png'


export default function Sixth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                {/* <div className="sidebar">
                </div> */}
                <div className="main full">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                    <div className="box light">
                        <h2 className="title colored">Avoided CO2 emissions</h2>
                        <h3 className="sub-title">This building produces solar energy!</h3>
                        <div className="line"></div>
                        <div className="wrap flex flex-direction-column justify-content-between">

                            <h3 className='bold'>Total amount of CO2 saved: 319 t</h3>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h4>The avoided CO2 emissions correspond approximately to 61.2 times the circumference of the world with a (Small car).</h4>
                                    <h4 className="mb-2">Distance traveled: 2,451,085 km</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <img src={Car} alt="" />
                                </div>
                            </div>
                            <p>I of the earth 40.074</p>

                        </div>
                        
                        <p className="copyright">@solarfox</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}