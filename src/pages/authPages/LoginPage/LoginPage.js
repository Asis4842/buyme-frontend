import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <LoginPageConatiner>
    <LoginBox>
      <h3>Login</h3>
      <h4>Email</h4>
      <h4>Password</h4>
      <h3>BUTTON</h3>
      <p>Don't have an account?<span onClick={()=>navigate('/register')}>Register here</span></p>
    
    </LoginBox>
      
    </LoginPageConatiner>
  )
}

export default LoginPage

const LoginPageConatiner= styled.div`
background-color: #f8f8f8;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;

`
const LoginBox = styled.div`
min-height: 500px;
width: 70%;
min-width: 320px;
background-color: #fff;
border-radius: 10px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
display: flex;
flex-direction: column;
`
