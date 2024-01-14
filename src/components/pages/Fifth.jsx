import React, {useState, useEffect} from 'react';

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
                <div className="main" style={{paddingLeft: 0}}>
                    
                    
                    <div className="box light">
                        <h2 className="title colored">Lorem Ipsum is simply</h2>
                        <h3 className="sub-title">Lorem Ipsum is simply</h3>
                        <div className="line"></div>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quis!</h3>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate iure dicta ipsum saepe similique nobis pariatur consequuntur, sapiente praesentium dolorem!</h4>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <img src={Home} alt="" />
                            </div>
                        </div>
                        
                        <p className="copyright">@solarfox</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}