import React from 'react';
import { Form } from 'react-bootstrap';
import logo from '../../Images/logo.png';
import formBg from '../../Images/form-bg.jpg'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const SignUp = () => {
    const { setError, setUser, handleEmailChange, handlePasswordChange, userRegister, handleSubmit } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"
    const handleUserRegister = () => {
        userRegister()
            .then((result) => {
                history.push(redirect_uri)
                setUser(result.user)
            }).catch((error) => setError(error.message))
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ backgroundImage: `url(${formBg})`, backgroundSize: 'cover', minHeight: '100vh' }}>
            <div className="w-25">
                <div>
                    <div><img src={logo} alt="" height="200px" className="d-block m-auto" /></div>
                </div>
                <Form className="border-2 shadow-lg p-3 bg-light rounded-3" onSubmit={handleSubmit}>


                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Control type="name" placeholder="Name" />
                        <Form.Text>
                            We'll never share your Name
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="password" placeholder="Re-enter Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I have agreed to terms and conditions" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="submit" className="btn btn-outline-info" onClick={handleUserRegister} value="Sign Up" />
                    </Form.Group>


                </Form>
                <NavLink to="/login" className="text-decoration-none" >
                    <p className="text-center fw-bolder">Already Have an Account?</p>
                </NavLink>

            </div>
        </div>
    );
};

export default SignUp;