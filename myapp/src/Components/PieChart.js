import React from "react";
import Chart from "chart.js/auto";
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    return (
        <div>
            <Pie
                data={{
                    labels: ['UV (Low)', 'Wind Speed (MPH)', 'Humidity (g/kg)', 'Wind Change (%)'],
                    datasets: [
                        {
                            data: [1, 4, 28, 25],
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
        </div>
    );
}

export default PieChart;