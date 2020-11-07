import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/CRUD/Home';
import Create from './components/CRUD/Create';
import Edit from './components/CRUD/Edit';
import Details from './components/CRUD/Details';

export default class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/create' component={Create}></Route>
                    <Route exact path='/edit' component={Edit}></Route>
                    <Route exact path='/edit/:idHospital' render={(props) => {
                        var idHospital = props.match.params.idHospital;
                        return (
                            <Edit idHospital={idHospital}></Edit>
                        );
                    }}></Route>
                    <Route exact path='/details/:idHospital' render={(props) => {
                        var idHospital = props.match.params.idHospital;
                        return (
                            <Details idHospital={idHospital}></Details>
                        );
                    }}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
