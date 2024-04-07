import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const TimeChart = (data) => {
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
                            backgroundColor: 'white',
                            borderColor: 'rgb(193, 165, 123)',
                            tension: '0.4'
                        }
                    ]
                }}
                height={650}
                width={1300}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

export default TimeChart;
