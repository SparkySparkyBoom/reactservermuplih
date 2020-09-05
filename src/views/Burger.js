import React, { useState } from 'react';
import styled from 'styled-components'

const StyledBurger=styled.div`
width:2.5rem;
height:2rem;
position:fixed;
top:15px;
left:20px;
border:1px solid white;
border-radius:5px;
padding:3px 0px 2px 3px;
div{
    width:2rem;
    height:0.2rem;
    background-color: #fff;
    border-radius:10px;
    margin:3px 0px;
    
}
`;
function Burger() {
    const [open,setOpen]=useState(false);
    return(
   <StyledBurger open={open} onClick={()=>{setOpen(!open);console.log(open);}}>
   <div/>
   <div/>
   <div/>
   </StyledBurger>)
}
export default Burger;