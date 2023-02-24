import React, { useState } from 'react'
import styled from 'styled-components'
import Product from '../../../components/product/Product'
import { ProductData } from '../../../data/Data'
import Pagination from '@mui/material/Pagination';
import Spacer from '../../../components/spacer/Spacer';

const ProductPage = () => {
    const [data,setData] = useState(ProductData)

  return (
    <Container>
    <ProductContainer >
    {data?.map((item,ind)=>{
        return (
            <Product
            key={item.id}
            title={item.title}
            desc={item.description}
            image={item.images[0]}
            price={item.price}
            rating={Math.round(Math.random()*10)+1}
            />
    )
    })}
    </ProductContainer>
 
    <Spacer />
    <PageContainer>
    <Pagination count={10} color="secondary" />
    </PageContainer>
   
    </Container>
  )
}

export default ProductPage

const Container = styled.div`
width: 100%;
min-height:80vh;
display: flex;
flex-direction: column;
`

const ProductContainer = styled.div`
display: flex;
width: 100%;
padding: 20px 0px;
flex-wrap:wrap;
align-items:center;
justify-content: center;

`;

const PageContainer = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`;


