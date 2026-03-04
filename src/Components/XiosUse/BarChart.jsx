import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const BarChart2 = ({promieData}) => {
    const studnetDataUse = use(promieData)
    // console.log(studnetDataUse);
    const allDatas = studnetDataUse.data;
    console.log(allDatas);



    const marksChartData = allDatas.map(studentData=>{
        const student = {
            name:studentData.school.name,
            year:studentData.school.academicYear,
            mark:studentData.school.math
        }
     
        return student
    })
    console.log(marksChartData);
    
    return (
        <div>
           <BarChart data={marksChartData} width={500} height={500}>
            <XAxis dataKey={'year'}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={'mark'}></Bar>
           </BarChart>
        </div>
    );
};

export default BarChart2;