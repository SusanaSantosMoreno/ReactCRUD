import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {

    state = {
        hospitales: [],
        status: false
    }

    componentDidMount = () => {
        this.cargarHospitales();
    }

    cargarHospitales = () => {
        axios.get(`${Global.urlHospitales}/webresources/hospitales`).then(res => {
            this.setState({
                hospitales: res.data,
                status: true
            })
        });
    }

    render() {
        return (
            <div className='container mt-3'>
                <h1 className='text-center mt-3 mb-3'>Hospitales</h1>
                <table className='table mt-3'>
                    <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Dirección</th>
                            <th scope='col'>Teléfono</th>
                            <th scope='col'>Camas</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && this.state.hospitales.map((hosp) => {
                            return (
                                <tr key={hosp.idhospital} scope='row'>
                                    <td>{hosp.idhospital}</td>
                                    <td>{hosp.nombre}</td>
                                    <td>{hosp.direccion}</td>
                                    <td>{hosp.telefono}</td>
                                    <td>{hosp.camas}</td>
                                    <td><NavLink to={`/details/${hosp.idhospital}`}>Detalle</NavLink></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
