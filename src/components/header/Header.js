import React from 'react'
import styled from "styled-components"
import { InputBase,IconButton, useMediaQuery,Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';


const Header = () => {
 const isMobile= useMediaQuery("(max-width: 650px)")
  return (
    <NavBar>
      <NavIcon>
      <Link to='/'>
      <h3 style={{
        color:"#326872"
      }}>Buy Me</h3>
      </Link>
      </NavIcon>
   
      
     {!isMobile &&
      <SearchBox>
   <InputBase placeholder='Search products' />
   <IconButton>
   <SearchIcon />
   </IconButton>
      </SearchBox>}
    {!isMobile &&
      <UserInfo>
      <CartButton>
      <Badge badgeContent={308} color="success">
      <ShoppingCartOutlinedIcon sx={{color:"#326872"}} />
      </Badge>
   
      </CartButton>
     
      <User>
      <Link to='/login'>
      <AccountCircleOutlinedIcon sx={{color:"#326872"}} />
      </Link>
      </User>
     
      </UserInfo>}
      {isMobile && 
      <Menu>
     
      <MenuOutlinedIcon sx={{color:"#326872"}} />
      </Menu>
      }
  
    </NavBar>
  )
}

const NavBar = styled.div`
width: '100%';
height: 58px;
background-color: #fff;
position: sticky;
top:0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`
const UserInfo = styled.div`
display: flex;
justify-content:center;
align-items: center;

`
const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const SearchBox = styled.div`
display: flex;
padding: 0px 2px;

border: 2px solid #eee;
border-radius: 7px;

`
const NavIcon = styled.div`
display: flex;
justify-content:center;
align-items: center;

a{
  text-decoration: none;
}
transition: all 500ms ease;
&:hover{
  cursor: pointer;
  transform: scale(1.1);
}
`
const CartButton = styled.div`
margin: 0px 10px;
background-color: transparent;

transition: all 500ms ease;
&:hover{
  cursor: pointer;
  transform: scale(0.9);
}
`
const User = styled.div`
margin: 0px 10px;
background-color: transparent;
transition: all 500ms ease;
&:hover{
  cursor: pointer;
  transform: scale(0.9);
}

`

export default Header
