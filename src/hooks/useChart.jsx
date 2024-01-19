import {useEffect, useState} from 'react'


export default function useChart(data, loading, chartOptions){

    const [optionsData, setOptionsData] = useState([])
    const [seriesData, setSeriesData] = useState([])

    useEffect(() => {
        if (!loading) {
            let optionsData = [];
            let seriesData = [];
            data.map((entry) => {
                const keys = Object.keys(entry);
                optionsData.push(entry[keys[0]]);
                seriesData.push(entry[keys[1]]);
                return null;
            })
            setOptionsData(optionsData)
            setSeriesData(seriesData)
        }
        
    }, [loading, data]);

    const options = {
        chart: {
          id: chartOptions.id,
          width: chartOptions.width,
        },
        xaxis: {
            categories: optionsData
        },
        colors: chartOptions.colors,
        dataLabels: {
            enabled: chartOptions.enabled
        }
    }
    const series = [
        {
            name: chartOptions.name,
            data: seriesData
        },
        {
            name: '',
            data: []
        }
    ]

    return {options, series};

}