import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { Redirect, NavLink } from "react-router-dom";


export default class Details extends Component {

    state = {
        hospital: {},
        status: false,
        delete: false
    }

    componentDidMount = () => {
        this.recogerHospital();
    }

    recogerHospital = () => {
        axios.get(`${Global.urlHospitales}/webresources/hospitales/${this.props.idHospital}`).then(res => {
            this.setState({
                hospital: res.data,
                status: true
            })
        });
    }

    eliminarHospital = () => {
        axios.delete(`${Global.urlHospitales}/webresources/hospitales/delete/${this.props.idHospital}`).then(res => {
            this.setState({
                delete: true
            })
        })
    }

    render() {
        if (this.state.delete == true) {
            return <Redirect to='/'></Redirect>;
        } else {
            return (
                <div className='container mt-5'>
                    {this.state.status == true && <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.hospital.nombre}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Camas: {this.state.hospital.camas}</h6>
                            <p className="card-text">Dirección: {this.state.hospital.direccion} - Teléfono: {this.state.hospital.telefono}
                            </p>
                            <NavLink className="card-link" to={`/edit/${this.state.hospital.idhospital}`}>Editar</NavLink>
                            <a className="card-link" href='#' onClick={this.eliminarHospital}>Eliminar</a>
                        </div>
                    </div>}

                </div>
            )
        }
    }
}
