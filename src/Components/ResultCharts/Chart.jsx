import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
const marks =
    [
        { "id": 1, "name": "Rahim", "physics": 75, "chemistry": 68, "math": 80 },
        { "id": 2, "name": "Karim", "physics": 70, "chemistry": 72, "math": 78 },
        { "id": 3, "name": "Sakib", "physics": 85, "chemistry": 80, "math": 90 },
        { "id": 4, "name": "Nayeem", "physics": 60, "chemistry": 65, "math": 70 },
        { "id": 5, "name": "Arif", "physics": 88, "chemistry": 84, "math": 92 }
    ]


const Chart = () => {
    return (
        <div>
            {/* <LineChart width={500} height={500} data={marks}>
                <CartesianGrid></CartesianGrid>
                <Line dataKey={'physics'}></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
                <XAxis dataKey={'name'}></XAxis>

                <Legend></Legend>

            </LineChart> */}


            {/* Bar Chart code start here */}
            <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618  }} data={marks}>
                <XAxis dataKey={'name'}></XAxis>
                <Bar dataKey={'math'}></Bar>
                <Bar dataKey={marks.name}></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;