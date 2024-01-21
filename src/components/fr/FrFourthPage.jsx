import React from 'react';

import PlaceHolder from '../../assets/img/fr/fr-floating.jpeg';
import Tree from '../../assets/img/tree.png'


export default function FrFourthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box light">
                        
                        <h2 className="title colored">Émissions de CO&#8322; évitées</h2>
                        <h3 className="sub-title">Ce bâtiment produit de l'énergie solaire !</h3>
                        <div className="line"></div>
                        
                        <div className="wrap flex flex-direction-column justify-content-between flex-1">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h3 className='mb-5 bold'>Quantité totale de CO&#8322; économisée : 319 t</h3>
                                    <h3>Il faudrait planter 25 491 arbres pour éliminer la même quantité de CO&#8322; de l’air en 10 ans.</h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 text-center">
                                    <img style={{width: "80%"}} src={Tree} alt="" />
                                </div>
                            </div>

                            <p className="box-note">100 m&sup2; de forêt, avec 80 arbres, éliminent environ une tonne de CO2 de l'air en un an</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}