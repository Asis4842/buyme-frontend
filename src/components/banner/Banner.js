
import { height, width } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerConatiner>
    <BannerImage>
    <img src="/images/banner1.png" alt='banner' style={{
        objectFit:'contain',
     height:'100%',
     width:'100%'
        

    }} />
    </BannerImage>
    <BannerDesc>
    <p>Grab upto 50% off on</p>
    <p>Today Special Deal</p>
     <BuyButton>
     Grab it
     </BuyButton>
    </BannerDesc>
      
    </BannerConatiner>
  )
}

export default Banner

const BannerConatiner = styled.div`
width: 80%;
min-height: 60vh;
background-color: #fff;
box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);
display: flex;

@media (max-width:650px){
width: 90%;
flex-direction: column;
}
`
const BannerImage = styled.div`
display: flex;
flex: 1;
background-color: #326872;
`
const BannerDesc = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
flex-direction: column;

p{
    color:#326872;
    font-size: 38px;
    font-weight: 400;
    text-align: center;
}

@media (max-width:650px){
  padding-top: 20px;
 p{ font-size: 28px;}
}

`

const BuyButton=styled.div`
height: 45px;
width: 130px;
border-radius: 25px;
background-color: #326872;
color: #fff;
font-weight: 500;
font-size: 16px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 5px 4px 0 rgba(0,0,0,.2);
margin: 30px 0;
transition: all 500ms ease;
&:hover{
  transform: scale(1.2);
}
`