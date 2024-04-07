import React, { useEffect, useState } from "react";
import { Radar } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const RadarChart = ({ data }) => {
    const [radarData, setRadarData] = useState(null);

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

            setRadarData(newData);
        }
    }, [data]);

    return (
        <div>
            {radarData ? (
                <Radar
                    data={{
                        labels: ['Temperature °C','Wind Speed (MPH)', 'Humidity (g/kg)', 'Wind Change (%)'],
                        datasets: [
                            {   label: 'Report',
                                data: radarData,
                                backgroundColor: [
                                    'rgba(60, 90, 94, 0.8)',
                                    'rgba(34, 40, 49, 0.8)',
                                    'rgba(193, 165, 123, 0.8)',
                                    'rgba(236, 236, 236, 0.8)',
                                ],
                            }
                        ]
                    }}
                    height={300}
                    width={400}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                           r: {
                                ticks: {
                                    color: 'white',
                                },
                                angleLines: {
                                    color: 'rgb(193, 165, 123)',
                                },
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.5)',
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

export default RadarChart;
