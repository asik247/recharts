import React, { Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Chart from './Components/ResultCharts/Chart';
import BarChart2 from './Components/XiosUse/BarChart';
import axios from 'axios';

const promieData = axios.get('Studnent.json')
console.log(promieData);






const App = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
        <Chart></Chart>
       <Suspense fallback={<h1>Loaddin...</h1>}>
       
         <BarChart2 promieData={promieData}></BarChart2>
       </Suspense>
      </nav>
    </div>
  );
};

export default App;

