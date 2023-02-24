import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = (props) => {
    const {
     title,
     desc,
     image,
     price,
     rating,


    }=props
  return (
    <Card >
      <TopSection>
      <img src={image} alt="prodImage" style={{objectFit:'contain',height:'140px',width:'120px'}} />
      <FavoriteBorderIcon sx={{position:'absolute',top:'5px',right:'5px',color:'#E40040',fontWeight:'700'}} />
      </TopSection>
      <BottomSection>
      
      <h3 style={{ color:"#363A45",margin:'5px 0px',fontWeight:'500'}}>{title}</h3>
      <p>{rating} ratings</p>
      <p style={{ color:"#326872"}}>${price}</p>
      <AddToCart>
      Add to cart
      </AddToCart>
      </BottomSection>
    </Card>
  )
}

export default Product

const Card = styled.div`
display: flex;
flex-direction: column;
min-width:260px;
border-radius: 10px;
margin: 10px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.4);
transition: all 400ms ease;
&:hover{
    transform: translateY(-5px) scale(1.01);
    cursor: pointer;
}

`

const TopSection = styled.div`
position: relative;
background-color: #fff8e780;
display: flex;
align-items: center;
justify-content: center;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`
const BottomSection = styled.div`

background-color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

`
const AddToCart = styled.div`
width: 50%;
height: 35px;
border-radius: 10px;
background-color: #E40040;
color: #fff;
font-size: 12px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
margin: 15px 0px;
transition: all 500ms ease;
&:hover{
    transform: scale(0.9);
}
`
