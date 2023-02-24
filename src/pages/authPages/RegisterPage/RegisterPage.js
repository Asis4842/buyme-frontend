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


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const loginSchema = yup.object().shape({
  firstname:yup.string()
  .min(3, 'min 3 characters required').trim().required("required")
,
lastname:yup.string()
.min(3, 'min 3 characters required').trim().required("required"),
mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10,"Minimum 10 digit").max(10,"Maximum 10 digit only").required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});



const initialValuesLogin = {
  firstname:"",
  lastname:"",
  email: "",
  mobile:"",
  password: "",
};


const RegisterPage = () => {
  const navigate = useNavigate()
  const handleFormSubmit=()=>{
    console.log("rrr")
  }
  return (
    <RegisterPageContainer>
        <RegisterBox>
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
          color:"#E40040"
         }}>Join Family!</h3>
     
         <TextField
         fullWidth
          size='small'
         margin='normal'
         label="Firstname"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.firstname}
         name="firstname"
         error={Boolean(touched.firstname) && Boolean(errors.firstname)}
         helperText={touched.firstname && errors.firstname}
      
       />
       <TextField
         fullWidth
          size='small'
         margin='normal'
         label="Lastname"
         onBlur={handleBlur}
         onChange={handleChange}
         value={values.lastname}
         name="lastname"
         error={Boolean(touched.lastname) && Boolean(errors.lastname)}
         helperText={touched.lastname && errors.lastname}
      
       />
          <TextField
          fullWidth
           size='small'
          margin='normal'
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
        size='small'
       margin='normal'
          label="Mobile"
          type="number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.mobile}
          name="mobile"
          error={Boolean(touched.mobile) && Boolean(errors.mobile)}
          helperText={touched.mobile && errors.mobile}
       
        />
        <TextField
        fullWidth
        size='small'
       margin='normal'
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
          backgroundColor:"#E40040",
          marginTop:"14px",
          marginBottom:"10px",
          padding:'10px',
          color:"#fff",
          transition:"all 500ms ease",
         "&:hover":{
          backgroundColor:"#fff8e7",
          color:"#2a6e7a"
         }
        }}
      >
         REGISTER
      </Button>
        
         </form>
        )}
        </Formik>
          <p>Have an account? <RegisterButton  onClick={()=>navigate('/login')}> Login here</RegisterButton></p>
        </RegisterBox>
    </RegisterPageContainer>
  )
}

export default RegisterPage

const RegisterPageContainer = styled.div`
background-color: #2a6e7a;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;


`
const RegisterBox = styled.div`
min-height: 450px;
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
color:#2a6e7a;
font-weight: 600;
font-size: 17px;
transition:all 500ms ease;
 &:hover{
  cursor: pointer;
  transform: scale(1.1);
 }
`
