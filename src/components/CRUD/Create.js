import React, { Component } from 'react';
import Global from "./../../Global";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class Create extends Component {
    cajaIdHospital = React.createRef();
    cajaNomHospital = React.createRef();
    cajaDirHospital = React.createRef();
    cajaTelHospital = React.createRef();
    cajaCamHospital = React.createRef();

    state = {
        status: false
    }

    crearHospitales = (e) => {
        e.preventDefault();
        var hosp = {
            idhospital: parseInt(this.cajaIdHospital.current.value),
            nombre: this.cajaNomHospital.current.value,
            direccion: this.cajaDirHospital.current.value,
            telefono: this.cajaTelHospital.current.value,
            camas: parseInt(this.cajaCamHospital.current.value)
        }
        axios.post(`${Global.urlHospitales}/webresources/hospitales/post`, hosp).then(res => {
            console.log(res.status);
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
                    <h1 className='text-center'>Crear Hospitales</h1>
                    <form onSubmit={this.crearHospitales}>
                        <div className='mb-3'>
                            <label htmlFor='cajaIdHospital' className='form-label'>Id:</label>
                            <input type='text' className='form-control' id='cajaIdHospital' ref={this.cajaIdHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaNomHospital' className='form-label'>Nombre:</label>
                            <input type='text' className='form-control' id='cajaNomHospital' ref={this.cajaNomHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaDirHospital' className='form-label'>Dirección:</label>
                            <input type='text' className='form-control' id='cajaDirHospital' ref={this.cajaDirHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaTelHospital' className='form-label'>Teléfono:</label>
                            <input type='text' className='form-control' id='cajaTelHospital' ref={this.cajaTelHospital} />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='cajaCamHospital' className='form-label'>Camas:</label>
                            <input type='text' className='form-control' id='cajaCamHospital' ref={this.cajaCamHospital} />
                        </div>
                        <button className='btn btn-outline-dark float-right'>Aceptar</button>
                    </form>
                </div>
            )
        }
    }
}
