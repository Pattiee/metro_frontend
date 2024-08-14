import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './auth.css'

import { login } from '../../services/auth.service';

const Auth = () => {
    const navigate = useNavigate();

    const[v, setV] = useState(0);
    const[showPassword, setShowPassword] = useState(false);

    const[isLoggedIn, setIsLoggedIn] = useState(null);


    const[isRegistered, setIsRegistered] = useState(true);
    const page_title = isRegistered? "Login": "Sign Up";

    const[email, setEmail] = useState(null);

    const[password, setPassword] = useState('');

    const[confirmedPassword, setConfirmedPassword] = useState(null);
    const[first_name, setFirst_name] = useState(null);
    const[last_name, setLast_name] = useState(null);
    const[phone_number, setPhone_number] = useState(null);
    const[id_number, setId_number] = useState(null);

    const[registrationResponse, setRegistrationResponse] = useState(null);
    const[registrationSuccess, setRegistrationSuccess] = useState(false);

    useEffect(() => {
        setV(password.length);
        
    }, [password]);

    function getClassNameFunction(v, min, max){
        if (v > min && v <6) {
            return "weak progress"
        }
        if (v >= 6 && v < 12) {
            return "good progress"
        }
        if (v >= 12 ) {
            return "strong progress"
        }
    }

    function getInputFieldType() {
        return showPassword ? "text" : "password";
    }


    const authenticate = async (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        };
        try {
            const res = await login(loginData);
            if (res.data != null && res.status == 200) {
                // navigate(0);
                navigate("/");

                // TODO: GETUSER_ROLES
            } else{
                navigate(0);
                navigate("/login");
            }
            // const data = await getUserData();
            // setUser
        } catch (error) {
            
        }
    }


    const signUp = (e) => {
        e.preventDefault();
        if ((first_name != null 
            || last_name != null 
            || id_number != null 
            || email != null 
            || phone_number != null 
            || password != null) && (password == confirmedPassword)) {
                const user = {
                    first_name,
                    last_name,
                    id_number,
                    email,
                    phone_number,
                    password
                }
        } else{
            console.log("Invalid data... ")
        }

        const user = {
            first_name,
            last_name,
            id_number,
            email,
            phone_number,
            password
        };
    };


    const checkLoginStatus = () => {
        const bearerToken = localStorage.getItem('token');
        if (bearerToken != null) {
            alert("you are already logged in!");
        }
        alert("No Loged In User!");
    };


    const navigateToHomePage = () => navigate(`/`);


    return (
        <div className='body container-fluid'>
            {
                isRegistered? 
                <div className='wrapper'>
                    <form action="" onSubmit={(e) => authenticate(e)} className=''>
                        <div className=''>
                            <h1 className='' onClick={navigateToHomePage}>{page_title}</h1>
                        </div>
                        <hr />
                        <div className='input-box'>
                            <input type="email" className="form-control" name="email" id="" onChange={(e) => setEmail(e.target.value)} required placeholder='Email or Username'/>
                            <i className='bx bxs-user'></i>
                        </div>
                        
                        <div className='input-box'>
                            <input type="password" name="password" id="passwd" onChange={(e) => setPassword(e.target.value)} required placeholder='Password'/>
                            <i className='bx bxs-lock-alt'></i>
                        </div>

                        <div className='remember-forgot'>
                            <label htmlFor=""><input type="checkbox" name="" id="" />Remember Me</label>
                            <a href="#">Forgot Password</a>
                        </div>

                        <button type="submit" className='btn'>Login</button>

                        <div className='register-link'>
                            <p>Don't have an account? <a onClick={() => setIsRegistered(false)}>Register</a></p>
                        </div>
                    </form>
                    
                </div>

                :
                    registrationSuccess? 
                    <div className='card flex justify-content-center align-content-center align-self-center w-50 bg-success text-light m-auto border-light align-content-lg-center w-auto mt-3 p-2'>
                        <p>{registrationResponse}</p>
                    </div>:

                <div className='wrapper'>
                    <form action="" onSubmit={(e) => signUp(e)} className=''>
                        <div className=''>
                            <h1 onClick={navigateToHomePage}>{page_title}</h1>
                        </div>

                        <div className='input-box'>
                            <input type="text" onChange={(e) => setFirst_name(e.target.value)} className="form-control" name="firstname" id="firstname" required placeholder='First name'/>
                        </div>


                        <div className='input-box'>
                            <input type="text" onChange={(e) => setLast_name(e.target.value)} name="lastname" className='form-control' id="lastname" required placeholder='Last name'/>
                        </div>

                        <div className='input-box'>
                            <input type="tel" name="tel" onChange={(e) => setPhone_number(e.target.value)} className="form-control" id="tel" required placeholder='Mobile number'/>
                        </div>

                        <div className='input-box'>
                            <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" required placeholder='Enter email address'/>
                        </div>
                        
                        <div className='input-box'>
                            <input type="number" name="id_number" onChange={(e) => setId_number(e.target.value)} className="form-control" id="id_number" required placeholder='Enter your ID number'/>
                        </div>

                        <div className='input-box block'>
                            <label htmlFor="password">
                                <input type={getInputFieldType()} value={password} name="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="passwd" required placeholder='Enter password'/>
                                <input className='checkbox' type="checkbox" name="checkbox" id="checkbox" onChange={() => setShowPassword((prev) => !prev)}/>
                            </label>
                            <div className={getClassNameFunction(v, 0, 30)} id='progress'></div>
                        </div>

                        <div className='input-box'>
                            <input type={getInputFieldType()} name="confirmPassword" onChange={(e) => setConfirmedPassword(e.target.value)} className="form-control" id="passwd" required placeholder='Confirm password'/>
                        </div>

                        <button type="submit" className='btn'>Sign Up</button>


                        <div className='register-link'>
                            <p>Aleady registered?... <a onClick={() => setIsRegistered(true)}>Login</a></p>
                        </div>
                    
                    </form>
                    
                </div>
            }
        </div>
    );
}

export default Auth
