import React from 'react';
import Sidebar from "../template/Sidebar";
import Copyright from '../template/Copyright';
import Car from '../../assets/img/car-worldicon.png'
import PlaceHolder from '../../assets/img/floating-img.jpg';

export default function FrSixthPage(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="grid">
                    <Sidebar title="" placeholder={PlaceHolder} />
                    <div className="page__content">
                        <div className="box light">
                            <div className="box__header">
                                <h2 className="title colored">Émissions de CO&#8322; évitées</h2>
                                <h3 className="sub-title">Ce bâtiment produit de l'énergie solaire !</h3>
                                <div className="line"></div>
                            </div> 
                            <div className="wrap">
                                <div className="wrapper">
                                    <h3 className='bold mb-4'>Quantité totale de CO&#8322; économisée : 319 t</h3>
                                    <div className="row" style={{height: "90%"}}>
                                        <div className="col-xs-12 col-sm-6">
                                            <h4 style={{fontWeight: 500}} className='mb-4'>Les émissions de CO&#8322; évitées correspondent environ à 61,2 fois la circonférence du monde avec une (Petite voiture).</h4>
                                            <h4 style={{fontWeight: 500}} className="mb-2">Distance parcourue : 2 451 085 km</h4>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">
                                            <img style={{width: "100%"}} src={Car} className='car-globe' alt="" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="wrapper">
                                <p className='mb-2'>Moi de la terre 40.074</p>
                                <Copyright />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}