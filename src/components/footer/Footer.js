import React from 'react'
import styled from 'styled-components'
import Spacer from '../spacer/Spacer'

const Footer = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      backgroundColor: "#326872",
     alignItems:'center'
    }}>
    <Container>
     <div >
     <h3
     style={{
      color:"#fff"
    }}
     >Buy Me</h3>
     </div>
     <div style={{
      display:'flex',
      flexDirection:'column',
      justifyItems:'center',
      alignItems:'center'
     }} >
     <h3
     style={{
      color:"#fff"
    }}
     >Information</h3>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >Terms & conditions</h5>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >Privacy policy</h5>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >About us</h5>
     </div>
     <div style={{
      display:'flex',
      flexDirection:'column',
      justifyItems:'center',
      alignItems:'center'
     }} >
     <h3
     style={{
      color:"#fff"
    }}
     >Services</h3>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >Terms & conditions</h5>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >Terms & conditions</h5>
     <h5
     style={{
      color:"#E5E5E5",
      marginTop:'5px'
     }}
     >Terms & conditions</h5>
     </div>
     <Logo >
     <img src="/images/BuyMe.png" alt="logo" style={{
      height:"100%",
      width:'100%',
      objectFit:"contain",
      borderRadius:'5px'
     }} />
     </Logo>
    </Container>
    
    <div style={{
      width:'95%',
      borderBottom:"1px solid #fff",
    
    }}>
    
    </div>
    <div
    style={{
      width:'100%',
      height:'60px',
      backgroundColor:'#326872',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}
    >
    <h6 style={{
      color:'#f5f5f5'
    }}>@2023 Copyrights   Asisinder Singh</h6>
    </div>
    </div>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
min-height: 50vh;
background-color: #326872;
display: flex;
align-items: center;
justify-content: space-evenly;

@media (max-width:850px){
   flex-direction: column;
   justify-content: center;
   gap:2rem;
   padding:20px 0px ;
}

`

const Logo = styled.div`
height: 200px;
width: 200px;


@media (max-width:850px){
  height: 100px;
  width: 100px;
}
`
