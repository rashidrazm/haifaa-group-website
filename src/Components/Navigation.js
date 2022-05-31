import React from 'react'
import styled from 'styled-components'
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.png';
import { Fade } from 'react-reveal';

function Navigation() {
  return (
      <Fade top>
    < NavigationStyled>
      
       <div className='logo'> 
           <img src={logo} alt=''></img>
       </div>
        
           <ul >
               <li>
                   <a href=''>Home</a>
               </li>
               <li>
                   <NavLink to='/' exact activeClassName='active'>
                      Services
                   </NavLink>
               </li>
               <li>
                   <a href=''>Contact</a>
               </li>
           </ul>
        
           <PrimaryButton name={'Sign Up'}/>
      
    </ NavigationStyled>
</Fade> 
  )
}
const NavigationStyled = styled.nav`
      display:flex;
      justify-content: space-between;
      min-height:10vh;
      align-items:center;
      

      ul {
          display:flex;
          @media screen and (max-width: 633px){
              display: grid;
          }
          justify-content:space-around;
          align-items: center;
          width: 40%;
      }
`;
export default Navigation
