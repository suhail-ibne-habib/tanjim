import React from 'react';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg'
import Home from '../../assets/img/ghor-icon.png'


export default function NlFifthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box box-shadow light">
                        <h2 className="title colored">Groene elektriteit voor de regio</h2>
                        <h3 className="sub-title">Facq, klaar voor de toekomst</h3>
                        <div className="line"></div>
                        <h3 className='bold'>Deze installatie levert op dit moment genoeg groene elektriciteit voor 11246 huishiudens.</h3>
                        <div className="wrap flex flex-direction-column justify-content-between">

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h4 style={{fontWeight: 500}}>De huidige zonne-energieproductie van 1.972,05 kWh is gelijk aan het elektriciteitsverbruik van 11246 3- persoonshuishoudens.</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                </div>
                            </div>
                            <p>Gemiddeld energievverbruik:<br></br>
                            3-persoonshuishouden 4 kWh per jaar(100 m&sup2; leefruimte)</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}