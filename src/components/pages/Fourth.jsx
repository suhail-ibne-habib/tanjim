import React from 'react';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Tree from '../../assets/img/tree.png'


export default function Fourth(){

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main">
                    
                    
                    <div className="box light">
                        
                        <h2 className="title colored">Avoided CO&#8322; emissions </h2>
                        <h3 className="sub-title">This building produces solar energy!</h3>
                        <div className="line"></div>
                        
                        <div className="wrap flex flex-direction-column justify-content-between flex-1">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <h3 className='mb-5 bold'>Total amount of CO&#8322; saved: 319 t</h3>
                                    <h3>25,491 trees would have to be planted to remove the same amount of CO&#8322; from the air in 10 years.</h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 text-center">
                                    <img style={{width: "80%"}} src={Tree} alt="" />
                                </div>
                            </div>

                            <p className="box-note">100m&sup2; of forest, with 80 trees, removes approximately one ton of CO&#8322; from the air in a year</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}