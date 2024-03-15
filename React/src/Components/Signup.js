import { useState, useEffect } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginemail, setLoginEmail] = useState("");
    const [loginpassword, setLoginPassword] = useState("");
    const [checkPassword, setCheckpassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== checkPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/signup', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data) {
                alert("User added successfully!!");
                setEmail("");
                setPassword("");
                setCheckpassword("");
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("User already exists");
            } else {
                console.error('Error adding User:', error);
            }
        }
    }

    const handleSubmitLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/login', {
                email: loginemail,
                password: loginpassword
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const token = response.data.token;
            localStorage.setItem('token', token);

            if (response.status === 201) {
                alert("User has been logged in!!!!");
                setEmail("");
                setPassword("");
                navigate("/");
            }

        } catch (error) {
             if (error.response && error.response.status === 401) {
                alert("Invalid Email or Password!")
            }else if (error.response && error.response.status === 400) {
                alert("User not Found!!")
            } else if(error.response && error.response.status === 410){
                console.error('Error logging in:', error);
            }
        }
    }

    const navigate= useNavigate();

    useEffect(() => {
        const switchers = document.querySelectorAll('.switcher');

        const handleClick = (event) => {
            const currentSwitcher = event.target;
            const switcherContainers = document.querySelectorAll('.form-wrapper');

            switcherContainers.forEach(container => {
                container.classList.remove('is-active');
            });
            currentSwitcher.parentElement.classList.add('is-active');
        };

        switchers.forEach(switcher => {
            switcher.addEventListener('click', handleClick);
        });

        return () => {
            switchers.forEach(switcher => {
                switcher.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <div>
            <section className="forms-section">
                <div className="forms">
                    <div className="form-wrapper is-active" onSubmit={handleSubmitLogin}>
                        <button type="button" className="switcher switcher-login">
                            Login
                            <span className="underline"></span>
                        </button>
                        <form className="form form-login">
                            <fieldset>
                                <legend>Please, enter your email and password for login.</legend>
                                <div className="input-block">
                                    <label for="login-email">E-mail</label>
                                    <input id="login-email" type="email" value={loginemail} onChange={(e) => setLoginEmail(e.target.value)} required />
                                </div>
                                <div className="input-block">
                                    <label for="login-password">Password</label>
                                    <input id="login-password" type="password" value={loginpassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-login" >Login</button>
                        </form>
                    </div>
                    <div className="form-wrapper" onSubmit={handleSubmit}>
                        <button type="button" className="switcher switcher-signup">
                            Sign Up
                            <span className="underline"></span>
                        </button>
                        <form className="form form-signup">
                            <fieldset>
                                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                                <div className="input-block">
                                    <label for="signup-email">E-mail</label>
                                    <input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="input-block">
                                    <label for="signup-password">Password</label>
                                    <input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="input-block">
                                    <label for="signup-password-confirm">Confirm password</label>
                                    <input id="signup-password-confirm" type="password" value={checkPassword} onChange={(e) => setCheckpassword(e.target.value)} required />
                                </div>
                            </fieldset>
                            <button type="submit" className="btn-signup">Continue</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
