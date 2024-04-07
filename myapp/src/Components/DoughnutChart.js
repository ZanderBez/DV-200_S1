import React, { useEffect, useState } from "react";
import { Doughnut } from 'react-chartjs-2';
import Chart from "chart.js/auto";

const DoughnutChart = ({ data }) => {
    const [doughnutData, setDoughnutData] = useState(null);

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

            setDoughnutData(newData);
        }
    }, [data]);

    return (
        <div>
            {doughnutData ? (
                <Doughnut
                    data={{
                        labels: ['Temperature °C','Wind Speed (MPH)', 'Humidity (g/kg)', 'Wind Change (%)'],
                        datasets: [
                            {
                                data: doughnutData,
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

export default DoughnutChart;
