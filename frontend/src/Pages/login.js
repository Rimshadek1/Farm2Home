import React, { useState } from 'react'
import './login.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username);
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.error) {
                    setErrorMessage(data.error); // Set the error message
                } else {
                    setShowSuccessAlert(true); // Show the success alert
                    setTimeout(() => {
                        setShowSuccessAlert(false); // Hide the success alert after a certain time (optional)
                        navigate('/'); // Redirect to the login page
                    }, 3000);
                }
            })
            .catch((error) => {

                console.error('Error:', error);
            });
    }
    return (
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <div className='boot1'>

                        {/* Success alert */}
                        {showSuccessAlert && (
                            <div className="alert alert-success" role="alert">
                                <strong>Well done!</strong> You successfully Logged in.
                            </div>
                        )}
                        {/* Error message */}
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    </div>
                    <form className="login" onSubmit={handleSubmit}>
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="User name / Email" />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div className="social-login">
                        <h3 className='via'>log in via</h3>
                        <div className="social-icons">
                            <a href="index" className="social-login__icon fab fa-instagram" aria-label="Instagram"></a>
                            <a href="#" className="social-login__icon fab fa-facebook" aria-label="Facebook"></a>
                            <a href="#" className="social-login__icon fab fa-twitter" aria-label="Twitter"></a>
                        </div>
                    </div>
                </div>
                <Link className='link' to="/signup">Go to Signup Page
                    <i className=" fas fa-chevron-right"></i>
                </Link>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    )
}

export default Login
