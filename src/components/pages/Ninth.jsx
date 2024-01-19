import React, { useEffect, useState } from 'react';

import Chart from 'react-apexcharts'

import PlaceHolder from '../../assets/img/floating-img.jpg';
import useApiData from '../../hooks/useChartData';

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart"

export default function Ninth(){
        
        const [optionsData, setOptionsData] = useState([])
        const [seriesData, setSeriesData] = useState([])

        // Your component code
        const { data, loading, error } = useApiData(URL);

        useEffect(() => {
            if (!loading) {
                let optionsData = [];
                let seriesData = [];
                const chart = [
                    // ["Year", "Power output (Facq Zaventem showroom...)"],
                    ...data.map(({ year, value }) => {
                        optionsData.push(year);
                        seriesData.push(value);
                    }),
                ];
                setOptionsData(optionsData)
                setSeriesData(seriesData)
            }

            return(()=>{})
        }, [loading, data]);

        const options = {
            chart: {
              id: 'ninth-page'
            },
            xaxis: {
                categories: optionsData
            },
            colors: ["#ffd800", "transparent"]
        }
        const series = [
            {
                name: 'Power output (Facq Zaventem showroom...)',
                data: seriesData
            },
            {
                name: '',
                data: []
            }
        ]

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
                            <h2 className="title colored">Avoided CO2 emissions: 280.21 t</h2>
                            <h3 className="sub-title">Facq goes for renewable energy</h3>
                            <div className="line"></div>
                            <div className="wrap">

                                {seriesData.length > 0 && <Chart options={options} series={series} type="bar" width={"100%"} height={'320'} /> }

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        )

}