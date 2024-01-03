import React from 'react'

import boxImg from '../assets/img/solar.png'

export default function Box(props){
    return(
        <>
            <div class="box">
                <h3 class="box-title"> {props.title}</h3>
                <div class="details">
                    <img class="box-image" src={boxImg} alt="" />
                    <p class="box-subtitle">{props.speed}</p>
                </div>
            </div>
        </>
    )
}