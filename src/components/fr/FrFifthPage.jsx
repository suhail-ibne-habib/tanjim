import React from 'react';

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg'
import Home from '../../assets/img/ghor-icon.png'


export default function FrFifthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box box-shadow light">
                        <h2 className="title colored">De l'électricité verte pour la région</h2>
                        <h3 className="sub-title">Facq, prêt pour l'avenir</h3>
                        <div className="line"></div>
                        <h3 className='bold'>Cette installation fournit actuellement suffisamment d’électricité verte pour 11 246 foyers.</h3>
                        <div className="wrap flex flex-direction-column justify-content-between">

                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h4 style={{fontWeight: 500}}>La production actuelle d'énergie solaire de 1 972,05 kWh équivaut à la consommation électrique de 11 246 foyers de 3 personnes.</h4>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <img style={{width: "80%"}} src={Home} className='house-img' alt="" />
                                </div>
                            </div>
                            <p>Consommation énergétique moyenne :<br></br>
                                Ménage de 3 personnes 4 kWh par an (100 m&sup2; de surface habitable)</p>
                        </div>
                        
                        <p className="copyright">&copy;solarfox</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}