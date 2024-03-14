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
                            label: 'Temperature',
                            data: [30, 40, 10, 20, 40, 17, 32],
                            backgroundColor: ['blue', 'green', 'orange', 'red'],
                        }
                    ]
                }}
                height={300}
                width={400}
                options={{
                    maintainAspectRatio: false,
                }}
            />
        </div>
    );
}

export default LineChart;