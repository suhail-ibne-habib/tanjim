import React from 'react';

import ProductImage from '../assets/img/product2.png';
import PlaceHolder from '../assets/img/placeholder.png';

export default function SecondPage(){
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
                        <img src={ProductImage} alt="" />
                    </div>
                    
                </div>
            </div>
        </>
    )
}