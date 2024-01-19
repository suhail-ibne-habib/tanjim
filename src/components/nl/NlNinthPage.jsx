import React, { useEffect, useState } from 'react';

import Chart from 'react-apexcharts'

import PlaceHolder from '../../assets/img/floating-img.jpg';
import useApiData from '../../hooks/useChartData';
import useChart from '../../hooks/useChart';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart"

export default function NlNinth(){

        const chartOptions = {
            id: 'seventh-page',
            colors: ["#ffd800", "transparent"],
            width: '100%',
            enabled: false,
            name: 'Stroomopbrengst (Facq Zaventem showroo...)',
        }
        
        const { data, loading, error } = useApiData(URL);
        const {options, series } = useChart(data, loading, chartOptions);

        return(
            <>
                <div className="page full-screen background">
                    <div className="shadow"></div>
                    <div className="sidebar">
                        <div className="wrap sidebar-float flex">
                            <img src={PlaceHolder} alt="" />
                        </div>
                    </div>
                    <div className="main">
                        <div className="box light">
                            <h2 className="title colored">Vermeden Co<sub>2</sub> uitstoot: 280,21 t</h2>
                            <h3 className="sub-title">Facq gaat voor hernieuwbare energie</h3>
                            <div className="line"></div>
                            <div className="wrap flex align-center">

                                { !loading && <Chart options={options} series={series} type="bar" width={"100%"} height={'320'} /> }

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        )

}