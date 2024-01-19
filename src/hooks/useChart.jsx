import {useEffect, useState} from 'react'


export default function useChart(data, loading, chartOptions){

    const [optionsData, setOptionsData] = useState([])
    const [seriesData, setSeriesData] = useState([])

    useEffect(() => {
        if (!loading) {
            let optionsData = [];
            let seriesData = [];
            data.map(({ day, value }) => {
                optionsData.push(day);
                seriesData.push(value);
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