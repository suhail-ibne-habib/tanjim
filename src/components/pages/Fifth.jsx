import React from 'react';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Home from '../../assets/img/ghor-icon.png'


export default function Fourth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box box-shadow light">
                        <h2 className="title colored">Green electricity for the region</h2>
                        <h3 className="sub-title">Facq, ready for the future</h3>
                        <div className="line"></div>
                        <h3 className='bold'>This installation currently supplies enough green electricity for 11,246 households.</h3>
                        <div className="wrap flex flex-direction-column justify-content-between">

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h4 style={{fontWeight: 500}}>The current solar energy production of 1,972.05 kWh is equal to the electricity consumption of 11,246 3-person households.</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                </div>
                            </div>
                            <p>Average energy consumption:<br></br>
                                3-person household 4 kWh per year (100 m&sup2; living space)</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}