import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import logo from '../../Images/logo.png';
import formBg from '../../Images/form-bg.jpg'
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { setUser, setError, handleEmailChange, handlePasswordChange, SigningInWithGoogle, userLogin, handleSubmit } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"
    const handleGoogleLogin = () => {
        SigningInWithGoogle()
            .then((result) => {
                history.push(redirect_uri)
            }).catch((error) => setError(error.message))
    }
    const handleUserLogin = () => {
        userLogin()
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

                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress2">

                        <Form.Control type="submit" className="btn btn-secondary" onClick={handleUserLogin} value="Login" />
                    </Form.Group>

                    <NavLink className="text-decoration-none" to="/signup"> <p className="text-center mb-0">Register New Account</p></NavLink>

                </Form>
                <div className="text-center">
                    <p className="mb-0">Or</p>
                    <p className="my-0">Login With</p>
                    <p className="my-2"><i onClick={handleGoogleLogin} className="fab fa-google fa-2x"></i></p>
                </div>


            </div>
        </div>
    );
};

export default Login;