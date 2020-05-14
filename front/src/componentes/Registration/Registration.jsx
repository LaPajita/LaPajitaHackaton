import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.scss';
import MyContext from "../../context";

const Registration = () => {
    const [values, setValues] = useState(
        {
            email: "",
            password: "",
            name: "",
            confirmPassword: ''
        }
    );

    const handleChange = event => {
        const { name, value } = event.target;
        setValues(
            {
                ...values,
                [name]: value
                //sets name equal to the key
            }
        );
    };

    const handleSubmit = event => {
        event.preventDefault();
        submit();
    };

    // ------CONTEXTO------
    const valueFromContext = useContext(MyContext);
    const state = valueFromContext.hooksState
    const setStateContext = valueFromContext.setHooksState;

    const submit = () => {
        fetch('https://thelittlestraw.herokuapp.com/register', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: values.name,
                password: values.password,
                email: values.email,
                confirmPassword: values.confirmPassword
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                document.getElementById("buttonToRegister").click();   
                setStateContext({ ...state, usuario: responseJson })
            })
    }

    return (

        <div className='Registration'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="headingForm text-center ">
                            <img className='logo'
                                src='https://s6.gifyu.com/images/logo-blanco-lapajita.png'
                                alt='logo La Pajita'
                                width='200px'
                                height='auto' />
                        </div>
                        <div className="select text-center ">
                            <Link to="/" className="loginLink1"> Entrar</Link>
                            <Link to="/registro" className="loginLink2"> Registrarme</Link>
                        </div>
                        <Form onSubmit={handleSubmit} className="login-form">
                            <FormGroup>
                                <Label className="labelForm"><FontAwesomeIcon icon={faEnvelope} />  Correo</Label>
                                <Input
                                    name='email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="labelForm"><FontAwesomeIcon icon={faUser} /> Usuario</Label>
                                <Input
                                    name='name'
                                    type='user'
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="labelForm"><FontAwesomeIcon icon={faKey} />  Contraseña </Label>
                                <Input
                                    name='password'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="labelForm"><FontAwesomeIcon icon={faKey} />  Repetir contraseña</Label>
                                <Input
                                    name='confirmPassword'
                                    type='password'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                        </Form>
                        <div className="formButton">
                            <Button onClick={() => submit()} className="btn-lg btn-dark btn-block"> REGISTRARME </Button>
                            <Link to="/" id="buttonToRegister" style={{ display: 'none' }}>boton transparente</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Registration;
