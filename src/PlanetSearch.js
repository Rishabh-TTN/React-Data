import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {Route, withRouter} from 'react-router-dom';
import Planet from './Planet';

class PlanetSearch extends Component {
    constructor() {
        super();
        this.state = {
            planets: []
        };
    }


componentDidMount(){
    let initialPlanets = [];
    fetch('https://swapi.co/api/planets/')
        .then(response => {
            return response.json();
        }).then(data => {
        initialPlanets = data.results.map((planet) => {
            return planet
        });
        console.log(initialPlanets);
        this.setState({
            planets: initialPlanets,
        });
    });
}
render() {
    return (
        <Planet state={this.state}/>
    );
}
}
export default PlanetSearch;