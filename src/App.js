import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {empData as employeeData} from './data/EmpData';
import DisplayComponent from './display-component/display-all-employee-component';
import { PersonalInfo } from './personal-info-component/personal-info-component';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      empData: employeeData,
      showAllEmp : true,
      personalInfo: {}
    };
  }

  
  showAllEmpView = function(){
    this.setState({
      showAllEmp : !this.state.showAllEmp
    });
  }.bind(this)

  fetchPersonalInfo = (emp)=>{
    let info = this.state.empData.filter((data)=>data.id===emp.id);
    console.log(`Inside fetch personal info ${info[0]}`);
    this.setState({
      personalInfo : info[0]
    });
  };

  componentDidMount(){
    const URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
    .then((response)=>response.json())
    .then((data) =>this.setState({empData :data}));
  }

  render() {
    const {empData} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      <div className = "display-all-emp">
        {(this.state.showAllEmp) ?
          <DisplayComponent empData = {empData} fetchPersonalInfo = {this.fetchPersonalInfo} back = {this.showAllEmpView} /> : 
          <PersonalInfo emp={this.state.personalInfo} back = {this.showAllEmpView} />
        }
      </div>
      </div>
    );
  }
}

export default App;
