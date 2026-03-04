import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Chart from './Components/ResultCharts/Chart';

const App = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
        <Chart></Chart>
      </nav>
    </div>
  );
};

export default App;

