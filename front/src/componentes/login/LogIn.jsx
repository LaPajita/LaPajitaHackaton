
import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './LogIn.scss';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MyContext from "../../context";


const LogIn = () => {
    const [values, setValues] = useState(
        {
            email: "",
            password: ""
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
        fetch('https://thelittlestraw.herokuapp.com/login', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: values.password,
                email: values.email
            })
        })
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                //si recibo un error, entonces muestro los errores
                //si no recibo error, hago click en buttonToHome y actualiza el estado del contexto
                document.getElementById("buttonToHome").click();                    
                setStateContext({ ...state, usuario: responseJson })
            })
    }

    

    return (
        <div className="loginInPage">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 ">
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
                                <Label className="labelForm">{<FontAwesomeIcon icon={faUser} />} Email</Label>
                                <Input
                                    name='email'
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="labelForm">{<FontAwesomeIcon icon={faKey} />}  Contraseña </Label>
                                <Input
                                    name='password'
                                    type='password'
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder=''
                                />
                            </FormGroup>
                            <div className="passwordForgot text-center ">¿Has olvidado tu contraseña?</div>
                        </Form>
                        <div className="formButton">
                            <Button onClick={() => submit()} className="btn-lg btn-dark btn-block buttonStyle ">  <span>ENTRAR</span></Button>
                            <Link to ="/Home" id="buttonToHome" style={{display: 'none'}}>boton transparente</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LogIn;
