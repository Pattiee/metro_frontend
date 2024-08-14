import React, { useRef, useState, useEffect } from 'react'
import './folder-styles.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { Button, Container, Row, Form, Col } from 'react-bootstrap';

const Login = ({ updateRegState }) => {

  const { user, loginApiCall, successMsg, responseError } = useAuth();

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const[errorMessage, setErrorMessage] = useState(responseError);

  const [loading, setLoading] = useState(false);

  const form = useRef();
  const checkBtn = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, [user]);

  useEffect(() => {
    setErrorMessage('');
  }, []);

  const loginHandler = async (e) => {
      e.preventDefault();

      setErrorMessage('');
      setLoading(true);

      const loginRequest = JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value
      });

      await loginApiCall(loginRequest);
};

  return (
    <section className='login-section'>

      <section className='left-section'>
        <Container className='mt-2'>
          <Row>
            <Col className='col-md-8 offset-md-2'>


              <Form>
                {successMsg && (
                  <div className='alert alert-success' role='alert'>{successMsg}</div>
                )}

                  <legend>Sign In</legend>

                  <div className='single-sign-on-accounts'>
                    <div className='accounts'>Ac_1</div>
                    <div className='accounts'>google</div>
                    <div className='accounts'>Ac_2</div>
                  </div>

                  <p>or use your account</p>

                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' autoComplete='on' ref={emailRef} placeholder='Email address'/>
                  </Form.Group>

                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' autoComplete='on' ref={passwordRef} placeholder='Password'/>
                  </Form.Group>

                  <Button variant='primary' type='button' className='btn btn-submit' onClick={(e) => loginHandler(e)}>Login</Button>

                {responseError && (
                  <div className='alert alert-danger' role='alert'>{responseError}</div>
                )}

              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='right-section'>
        <div className='section-data'>
          <h1>Sign Up</h1>
          <p>Enter your personal details to explore more with us</p>
          <button onClick={updateRegState}>Sign up</button>
        </div>
      </section>

    </section>
  );
}

export { Login };
