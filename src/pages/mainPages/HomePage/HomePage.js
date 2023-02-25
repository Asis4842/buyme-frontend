import React from 'react'
import styled from 'styled-components'
import Banner from '../../../components/banner/Banner'
import BlogSlider from '../../../components/blogslider/BlogSlider'
import Spacer from '../../../components/spacer/Spacer'
import ProductPage from '../ProductPage/ProductPage'

const HomePage = () => {
  return (
    <HomeContainer>
    <Spacer />
    <div style={{
      width:'100%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
    <Banner />
    </div>
    
    <Spacer  />
    <div style={{
      width:'90%',
      display:'flex',
      flexDirection:'column'
    }}>
    <h3 style={{ color:"#3f828f",fontWeight:'700'}}>Products for you</h3>
    <Spacer mt="10px" mb="10px" />
 <ProductPage />
    </div>
    <Spacer  />
    <Spacer  />
    <div style={{
      width:'90%',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#fff',
      padding:'10px',
      boxShadow:" 0 5px 4px 0 rgba(0,0,0,.5)",
    }}>
    <h3 style={{ color:"#3f828f",fontWeight:'700'}}>Blogs for you</h3>
    <Spacer mt="10px" mb="10px" />
     <BlogSlider />
     <Spacer  />
    </div>
    <Spacer  />
    <Spacer  />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
min-height:100vh;
background-color:#fff8e7;
display: flex;
flex-direction: column;
align-items: center;
`

export default HomePage
