import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

    constructor(props) {
    super();
    this.state = {
      cpu: 0,
      ram: 0,
      diskusage: 0,
      totaldisk: 0,
      freedisk: 0, 
      percentdisk:0 
      
    }
    this.loadData = this.loadData.bind(this)
  }

  componentDidMount() {
    this.loadData()
    setInterval(this.loadData, 300);
  }

  async loadData() {
    try {
        const res = await fetch('/stats');
        const blocks = await res.json();
        console.log(blocks);
        const ram = blocks.ram;
        const cpu = blocks.cpu;
        const cpucount = blocks.cpucount;
        const diskusage = blocks.diskusage;
        const totaldisk = blocks.totaldisk;
        const freedisk = blocks.freedisk;
        const percentdisk = blocks.percentdisk;

        
        console.log(ram);
        console.log(cpucount);
        this.setState({
           cpu, ram, cpucount , diskusage, totaldisk, freedisk, percentdisk
        })
        
    } catch (e) {
      console.log(e);
    }
 
  }



  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Assessment SmartCow</p>
          <div>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th><h4>Id</h4></th>
      <th><h4>Stats</h4></th>
      <th><h4>Value</h4></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h5>1</h5></td>
      <td><h5>Cpu</h5></td>
      <td><h5>{this.state.cpu}</h5></td>
    </tr>
    <tr>
      <td><h5>2</h5></td>
      <td><h5>Cpu Count</h5></td>
      <td><h5>{this.state.cpucount}</h5></td>
    </tr>
    <tr>
      <td><h5>3</h5></td>
      <td><h5>Memory</h5></td>
      <td><h5>{this.state.ram}</h5></td>
    </tr>
    <tr>
      <td><h5>4</h5></td>
      <td><h5>Total Disk</h5></td>
      <td><h5>{this.state.totaldisk}</h5></td>
    </tr>
    <tr>
      <td><h5>5</h5></td>
      <td><h5>Disk Usage</h5></td>
      <td><h5>{this.state.diskusage}</h5></td>
    </tr>
    <tr>
      <td><h5>6</h5></td>
      <td><h5>Free Disk</h5></td>
      <td><h5>{this.state.freedisk}</h5></td>
    </tr>
    <tr>
      <td><h5>7</h5></td>
      <td><h5>Disk Usage Percentage</h5></td>
      <td><h5>{this.state.percentdisk}%</h5></td>
    </tr>
    
  </tbody>
</Table>
          </div>
        </header>
        
      </div>
      
      
      );
      
  }
}
export default App;
