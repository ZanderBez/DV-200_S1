import React from "react";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
                    datasets: [
                        {
                            label: 'Temperature °C',
                            data: [30, 40, 10, 20, 40, 17, 32],
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