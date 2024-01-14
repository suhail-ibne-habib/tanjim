import React from 'react';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import Tree from '../../assets/img/tree (1).png'


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
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quis!</h3>
                                <p className="sub-title">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <img src={Tree} alt="" />
                            </div>
                        </div>

                        <p className="box-note">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quis!</p>

                        <p className="copyright">@solarfox</p>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}