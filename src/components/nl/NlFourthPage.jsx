import React from 'react';

import PlaceHolder from '../../assets/img/nl/nl-floating.jpeg';
import Tree from '../../assets/img/tree.png'


export default function NlFourthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box light">
                        
                        <h2 className="title colored">ÉVermeden CO&#8322; uitstoot</h2>
                        <h3 className="sub-title">Dit gebouw produceert zonne-energie!</h3>
                        <div className="line"></div>
                        
                        <div className="wrap flex flex-direction-column justify-content-between flex-1">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h3 className='mb-5 bold'>Totaal bespaarde hoeveelheid CO&#8322;: 319 t</h3>
                                    <h3>Er zouden 25.491 bomen moeten worden geplant om dezelfde hieveelheid CO&#8322; uit de lucht te verwijderen in de komonde 10 jaar.</h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 text-center">
                                    <img style={{width: "80%"}} src={Tree} alt="" />
                                </div>
                            </div>

                            <p className="box-note">100m&sup2; bos, met 80 bomen, verwijdert in een jaar ongevver een ton CO2 uit de lucht</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}