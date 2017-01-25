import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NzxChart from './chart/chart';
import { AIAData } from "./chart/data";
import { timeParse } from 'd3-time-format';

class App extends Component {
    constructor(){
        super();
        let chartData = [];
        const aiaData = AIAData();
        aiaData.forEach((d) => {
          let newDataPoint = {};
          newDataPoint.date = new Date(timeParse("%Y-%m-%d")(d.date).getTime());
          newDataPoint.open = d.open_price;
          newDataPoint.high = d.high_price;
          newDataPoint.low = d.low_price;
          newDataPoint.close = d.close_price;
          newDataPoint.volume = d.volume;
          chartData.push(newDataPoint);
        });
        console.info(chartData.length + ' items added to chart data');
        this.cd = chartData;
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <NzxChart width={1000} ratio={1} data={this.cd} />
      </div>
    );
  }
}

export default App;
