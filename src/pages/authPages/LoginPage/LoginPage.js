import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Formik } from "formik";
import * as yup from "yup";
import {
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { color } from '@mui/system';

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});



const initialValuesLogin = {
  email: "",
  password: "",
};


const LoginPage = () => {
    const navigate = useNavigate()
    const handleFormSubmit=()=>{
      console.log("rrr")
    }
  return (
    <LoginPageConatiner>
    <LoginBox>
    <Formik
    onSubmit={handleFormSubmit}
    initialValues={initialValuesLogin}
    validationSchema={loginSchema}
    >
    {({
         values,
         errors,
         touched,
         handleBlur,
         handleChange,
         handleSubmit,
         setFieldValue,
         resetForm,
    })=>(
     <form  onSubmit={handleSubmit}>
      
     <h3 style={{
      color:"#326872"
     }}>Welcome Back!</h3>
 
      <TextField
      fullWidth
      margin='normal'
      size='small'
      label="Email"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.email}
      name="email"
      error={Boolean(touched.email) && Boolean(errors.email)}
      helperText={touched.email && errors.email}
   
    />
    <TextField
    fullWidth
   margin='normal'
   size='small'
      label="Password"
      type="password"
      onBlur={handleBlur}
      onChange={handleChange}
      value={values.password}
      name="password"
      error={Boolean(touched.password) && Boolean(errors.password)}
      helperText={touched.password && errors.password}
   
    />
    <Button
    fullWidth
    type="submit"
 
    sx={{
      backgroundColor:"#326872",
      marginTop:"14px",
      padding:'10px',
      color:"#fff8e7",
      transition:"all 500ms ease",
     "&:hover":{
      backgroundColor:"#326868",
      color:"#fff"
     }
    }}
  >
     LOGIN
  </Button>
    
     </form>
    )}
    </Formik>
      <p>Don't have an account? <RegisterButton  onClick={()=>navigate('/register')}> Register here</RegisterButton></p>
    
    </LoginBox>
      
    </LoginPageConatiner>
  )
}

export default LoginPage

const LoginPageConatiner= styled.div`
background-color: #fff8e780;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;

`
const LoginBox = styled.div`
min-height: 400px;
padding: 20px;
min-width: 320px;
max-width: 320px;
background-color: #fff;
border-radius: 7px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
display: flex;
flex-direction: column;
justify-content: space-between;

p{
  color: #a1a1a1;
  font-size: 16px;
}

`

const RegisterButton = styled.span`
color:#E40040;
font-weight: 600;
font-size: 17px;
transition:all 500ms ease;
 &:hover{
  cursor: pointer;
  transform: scale(1.1);
 }
`
