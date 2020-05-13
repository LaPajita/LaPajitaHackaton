import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Registration.scss';



const Registration = () => {
    const [values, setValues] = useState ({email: "", password: "", user: ""});

    const handleChange = event => {
        const {name, value} = event.target;
        console.log(event.target.name);
        console.log(event.target.value);
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

    function submit() {
        console.log("successful submit");
    }

      return (
      
        <div className='Registration'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-2">
                        <div className="headingForm text-center ">
                        <img className='logo'
                            src='https://s6.gifyu.com/images/logo-blanco-lapajita.png'
                            alt='logo La Pajita'
                            width= '100px'
                            height='auto' />
                        </div>
                        <div className="select text-center ">
                            <a href="Entrar">Entrar</a>
                            <a href="Registrarme">Registrarme</a>
                        </div>

                            <Form onSubmit={handleSubmit} className="login-form p-5">
                            
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
                                            name='user' 
                                            type='user' 
                                            value={values.user}
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
                                            name='password' 
                                            type='password' 
                                            value={values.password}
                                            onChange={handleChange} 
                                            placeholder=''
                                            />
                                </FormGroup>
                            </Form>
                             <div className="formButton">
                                    <Button type="submit" className="btn-lg btn-dark btn-block"> REGISTRARME </Button>
                                </div>
                    </div>
                </div>
            </div>
        </div>

      )
}

export default Registration;
