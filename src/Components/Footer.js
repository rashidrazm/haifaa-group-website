import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import logo from '../img/logo.png';

function Footer() {
  return (
    <FooterStyled>
         <InnerLayout>
            <div className='footer-con'>
              <div className='logo'> 
                 <img src={logo} alt=''/>
                  <p>
                    Copyright @2022 Haifaa Group <br/>
                    All rights reserved.
                 </p>
           </div>
            </div>
         </InnerLayout>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
     padding: 0 18rem;
     background-color: #dce2f0;
`;

export default Footer;