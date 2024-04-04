import React, { useEffect, useState } from "react";
import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
    const [pieData, setPieData] = useState(null);

    useEffect(() => {
        if (data) {
            const newData = [
                data.list[0].wind.speed,
                data.list[0].main.humidity,
                data.list[0].clouds.all
            ];

            setPieData(newData);
        }
    }, [data]);

    return (
        <div>
            {pieData ? (
                <Pie
                    data={{
                        labels: ['Wind Speed (MPH)', 'Humidity (g/kg)', 'Wind Change (%)'],
                        datasets: [
                            {
                                data: pieData,
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
                    width={400}
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

export default PieChart;
