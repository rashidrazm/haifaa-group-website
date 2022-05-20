import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.png';

function Footer() {
  return (
    <FooterStyled>
         <InnerLayout>
            <div className='footer-con'>
              <div className='logo-con'> 
                 <div className='logo-items'>
                     <img src={logo} alt=''/>
                       <p>
                         Copyright @2022 Haifaa Group <br/>
                         All rights reserved.
                       </p>
                  </div>
                </div> 
                 <ul className='bottom-nav'>
                    <div className='links1'>
                         <li>
                            <a href='youtube.com'>Youtube</a>
                         </li>
                         <li>
                           <a href='#'>Team</a>
                          </li>
                         <li>
                           <a href='#'>Press</a>
                         </li>
                    </div>

                    <div className='links1'>
                         <li>
                            <a href='youtube.com'>Youtube</a>
                         </li>
                         <li>
                           <a href='#'>Team</a>
                         </li>
                         <li>
                           <a href='#'>Press</a>
                         </li>
                    </div>

                    <div className='links1'>
                         <li>
                            <a href='youtube.com'>Youtube</a>
                         </li>
                         <li>
                           <a href='#'>Team</a>
                         </li>
                         <li>
                           <a href='#'>Press</a>
                         </li>
                    </div>
                 </ul>
           </div>
           
         </InnerLayout>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
     padding: 0 18rem;
     background-color: #dce2f0;
     @media screen and (max-width: 1347px){
      padding: 5rem 14rem;
      }
     @media screen and (max-width: 1186px){
      padding: 5rem 8rem;
      }
     @media screen and (max-width: 990px){
      padding: 5rem 4rem;
     }
     .footer-con{
         display: grid;
         grid-template-columns: repeat(2, 1fr);
           

     }

     .logo-con{
        display: flex;
        align-items: center;
           img{
             width: 90px;
           }
     }

     .bottom-nav{
         display: flex;
         justify-content: space-between; 
         li{
           padding: 2rem 0;
           color: #16194f;
         }      
     }
`;

export default Footer;