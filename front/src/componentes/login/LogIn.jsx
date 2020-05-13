
// import React, {useState} from 'react';
/* import 'bootstrap/dist/css/bootstrap.css'; */
/* import '.LogIn.scss'; */
import './LogIn.scss'; 
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const LogIn = () => {
    const [values, setValues] = useState ({email: "", password: ""});

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
      
        <div id="loginInPage">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-2">
                        <div className="headingForm text-center ">
                            <h1>Lapajita</h1>
                            {/* <a href="Entrar">Entrar</a> 

                            <a href="Registrarme">Registrarme</a> */}
                        </div>
                        <div className="select text-center ">
                            <a href="Entrar">Entrar</a>
                            <a href="Registrarme">Registrarme</a>
                        </div>

                            <Form onSubmit={handleSubmit} className="login-form p-5">
                            
                                <FormGroup>
                                    <Label className="labelForm" >Usuario/ Correo</Label>
                                        <Input 
                                            name='email'
                                            type='email'
                                            value={values.email}
                                            onChange={handleChange}    
                                            placeholder=''
                                            />
                                </FormGroup>
                                <FormGroup>
                                        <Label>Contraseña</Label>
                                        <Input 
                                            name='password' 
                                            type='password' 
                                            value={values.password}
                                            onChange={handleChange} 
                                            placeholder=''

                                            />
                                </FormGroup>
                                    <div className="passwordForgot text-center ">¿Has olvidado tu contraseña?</div>
                                    {/*  <div>
                                        <Button type="submit" className="btn-lg btn-dark btn-block"> Entrar </Button>
                                        </div> */}
                            </Form>
                {/*   <div className="text-center pt-3">¿Has olvidado tu contraseña?</div>
                            
                */}
                                <div className="formButton">
                                    <Button type="submit" className="btn-lg btn-dark btn-block"> ENTRAR </Button>
                                </div>
                    </div>
                </div>
            </div>
        </div>

      )
}

export default LogIn;
