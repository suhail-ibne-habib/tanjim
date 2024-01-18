import React, { useEffect, useState } from 'react';

import { Chart } from 'react-google-charts';

import PlaceHolder from '../../assets/img/floating-img.jpg';
import useApiData from '../../hooks/useChartData';

const options = {
    title: "AThis building produces solar energy!",
    seriesType: "bars",
    series: { 1: { type: "line" } },
    backgroundColor: {
        fill: 'rgba(255, 255, 255, 0.1)',
        fillOpacity: 0.1
    },
    colors: ['#ffd800'],
};

const URL = "https://uatapi.display-anywhere.com/api/GetEnergyYearWiseChart"

export default function Eigth(){
        
        const [chartData, setChartData] = useState([])

        // Your component code
        const { data, loading, error } = useApiData(URL);

        useEffect(() => {
            if (!loading) {
                const chart = [
                    ["Year", "Power output (Facq Zaventem showroom...)"],
                    ...data.map(({ year, value }) => [year.toString(), value]),
                ];
                setChartData(chart);
            }
        }, [loading, data]);

        useEffect(() => {
            console.log(chartData);
          }, [chartData]);


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
                            <h2 className="title colored">Avoided CO&#8322; emissions: 280.21 t</h2>
                            <h3 className="sub-title">Facq goes for renewable energy</h3>
                            <div className="line"></div>
                            <div className="wrap">

                                { chartData && <Chart
                                                chartType="ComboChart"
                                                width="100%"
                                                min-height="50vh"
                                                data={chartData}
                                                options={options}
                                            />

                                }

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </>
        )

}