import React, { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const BarChart = ({ data }) => {
    const [barData, setBarData] = useState(null);
    
    const kelvinToCelsius = (kelvin) => {
        return kelvin - 273.15;
      };

    useEffect(() => {
        if (data) {
            const newData = [
                kelvinToCelsius(data.list[0].main.temp).toFixed(1),
                data.list[0].wind.speed,
                data.list[0].main.humidity,
                data.list[0].clouds.all
            ];

            setBarData(newData);
        }
    }, [data]);

    return (
        <div>
            {barData ? (
                <Bar
                    data={{
                        labels: ['Temperature °C', 'Wind Speed (MPH)', 'Humidity (g/kg)', 'Wind Change (%)'],
                        datasets: [
                            {   label: 'Report',
                                data: barData,
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
                    width={600}
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
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default BarChart;
