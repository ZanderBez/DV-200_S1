import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';

const LineChart = (data) => {
    console.log(data)
    const lineData = data.data
    const [newLabel, setNewLabel ] = useState([])
    const [newTemp, setNewTemp ] = useState([])

    useEffect(() => {
        if (lineData && lineData.list && lineData.list.length > 0) {
            let lastLoggedDay = null;
            const temperatures = [];
            const labels = [];

            lineData.list.forEach((item) => {
                const currentDate = new Date(item.dt_txt);
                const currentDay = currentDate.getDate();

                if (lastLoggedDay !== currentDay) {
                    labels.push(currentDate.toDateString()); 
                    temperatures.push(item.main.temp - 273.15); 
                    lastLoggedDay = currentDay; 
                }
            });

            setNewTemp(temperatures);
            setNewLabel(labels);
        }
    }, [lineData]);

    return (
        <div>
            <Line
                data={{
                    labels: newLabel,
                    datasets: [
                        {
                            label: 'Temperature °C',
                            data: newTemp,
                            borderColor: 'white',
                            backgroundColor: [
                                'rgb(34, 40, 49)', 
                                'rgb(60, 90, 94)', 
                                'rgb(193, 165, 123)', 
                                'rgb(236, 236, 236)',
                             ],
                        }
                    ]
                }}
                height={300}
                width={200}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                color: 'white', 
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)', 
                            },
                        },
                        y: {
                            ticks: {
                                color: 'white', 
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)', 
                            },
                        },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white', 
                            },
                        },
                    },
                }}
            />
        </div>
    );
}

export default LineChart;