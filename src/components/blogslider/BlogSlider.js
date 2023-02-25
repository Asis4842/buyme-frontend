import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { BlogsData } from '../../data/Data';
import styled from 'styled-components';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';





const BlogSlider = () => {
    const [data,setData] = useState(BlogsData)
  return (
   
    <Carousel
    autoPlay
    
    showThumbs={false}
    showIndicators={false}
    renderArrowNext={(onClickHandler , hasPrev, label) => (
       <ButtonNext
       onClick={onClickHandler} 
       >
      <ArrowForwardIosRoundedIcon sx={{color:'#fff'}} />
       </ButtonNext> 
    )}
    renderArrowPrev={(onClickHandler , hasPrev, label) => (
        <ButtonPrev
        onClick={onClickHandler} 
        >
       <ArrowBackIosRoundedIcon sx={{color:'#fff'}} />
        </ButtonPrev> 
     )}
    >
   {data?.map((item,ind)=>{
    return (
        <div>
        <img src={item.images[0]} alt={item.id} style={{height:'350px',width:'100%',objectFit:'contain'}} />
        </div>
    )
   })}
</Carousel>
 
  )
}

export default BlogSlider

const ButtonPrev = styled.div`
width: 60px;
height: 60px;
border-radius: 50px;
background-color: #326872;
position: absolute;
left: 10px;
top:155px;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 5px 4px 0 rgba(0,0,0,.5);

@media (max-width:650px){
    width: 35px;
    height: 35px;
    left:2px
}

`
const ButtonNext = styled.div`
width: 60px;
height: 60px;
border-radius: 50px;
background-color: #326872;
position: absolute;
right: 10px;
top:155px;
z-index: 1;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 5px 4px 0 rgba(0,0,0,.5);
@media (max-width:650px){
    width: 35px;
    height: 35px;
    right:2px
}

`

