import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';
import { Redirect } from "react-router-dom";

export default class Edit extends Component {

    cajaNomHospital = React.createRef();
    cajaDirHospital = React.createRef();
    cajaTelHospital = React.createRef();
    cajaCamHospital = React.createRef();

    state = {
        hospital: {},
        status: false
    }

    componentDidMount = () => {
        this.recogerHospital();
    }

    recogerHospital = () => {
        axios.get(`${Global.urlHospitales}/webresources/hospitales/${this.props.idHospital}`).then(res => {
            this.setState({
                hospital: res.data
            })
        });
    }

    editarHospital = (e) => {
        e.preventDefault();
        var hosp = {
            idhospital: parseInt(this.props.idHospital),
            nombre: this.cajaNomHospital.current.value,
            direccion: this.cajaDirHospital.current.value,
            telefono: this.cajaTelHospital.current.value,
            camas: this.cajaCamHospital.current.value
        }
        axios.put(`${Global.urlHospitales}/webresources/hospitales/put`, hosp).then(res => {
            this.setState({
                status: true
            })
        });
    }


    render() {
        if (this.state.status == true) {
            return <Redirect to='/'></Redirect>;
        } else {
            return (
                <div className='container mt-3'>
                    <h1 className='text-center'>Editar Hospitales</h1>
                    <form onSubmit={this.editarHospital}>
                        <div className='mb-3'>
                            <label htmlFor='cajaIdHospital' className='form-label'>Id:</label>
                            <input type='text' className='form-control' id='cajaIdHospital'
                                defaultValue={this.props.idHospital} readOnly />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaNomHospital' className='form-label'>Nombre:</label>
                            <input type='text' className='form-control' id='cajaNomHospital' defaultValue={this.state.hospital.nombre}
                                ref={this.cajaNomHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaDirHospital' className='form-label'>Dirección:</label>
                            <input type='text' className='form-control' id='cajaDirHospital' defaultValue={this.state.hospital.direccion}
                                ref={this.cajaDirHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaTelHospital' className='form-label'>Teléfono:</label>
                            <input type='text' className='form-control' id='cajaTelHospital'
                                defaultValue={this.state.hospital.telefono}
                                ref={this.cajaTelHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaCamHospital' className='form-label'>Camas:</label>
                            <input type='text' className='form-control' id='cajaCamHospital' defaultValue={this.state.hospital.camas}
                                ref={this.cajaCamHospital} />
                        </div>
                        <button className='btn btn-outline-dark float-right'>Aceptar</button>
                    </form>
                </div>
            )
        }
    }
}
