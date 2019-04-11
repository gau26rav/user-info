import React, {Component, Fragment} from 'react';
import { empData } from '../data/EmpData';
import { PersonalInfo } from '../personal-info-component/personal-info-component';
import { Link } from 'react-router-dom';
import { Route} from 'react-router-dom';

class ContactUs extends Component {

    constructor(props){
        super(props);
        this.state = {emp :{}};
    }

    fetchUserDetail(id){
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            /* .then(response => response.json())
            .then(json => console.log('Inside Fetch' + json)) */
    }

    async componentDidMount(){
        let empStream = await this.fetchUserDetail(this.props.match.params.id);
        let employeeDetail = await empStream.json();
        this.setState({emp : employeeDetail});
        console.log(`Fetched data !${JSON.stringify(this.state.emp)}`);
    }
    
    render() {
       //This is how we can place the all the properties of an object in the DOM
     /*  const empElement =Object.keys(this.state.emp).filter(key=>(key!=='address'||key!=='company') ).map(key=>(
            <div key={key}><span>{key}</span></div>
        )); */
        return (
            <Fragment>
                <h1>Contact us @Delhi</h1>
                <Link to="contat/1">User 1</Link>
                <Link to="contat/2">User 2</Link>
                <Link to="contat/3">User 3</Link>
                <Route component ={ContactUs}></Route>
                {/* {empElement} */}
                {this.state.emp.id && <PersonalInfo {...this.state}></PersonalInfo> }
            </Fragment>
        );
    }
}

export default ContactUs;