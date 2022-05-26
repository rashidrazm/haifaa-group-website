import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import seo from '../img/seo.png'

function SeoSection() {
  return (
    <SeoSectionStyled>
        <InnerLayout>
        <div className='seo-container'>
            
            <div className='seo-left'>
               <h2 className='secondary-heading'>
                        SEO Marketing
                 </h2>
                 <p>
                 lorem ipsum sjshf shs shsjhfsk sshf shf sjfh sfjhj ksksahf slhhf sa 

                   lorem ipsum sjshf shs shsjhfsk sshf shf sjfh sfjhj ksksahf slhhf sa 
                 </p>
           </div>
           <div className='seo-right'>
               
                   <img src= {seo} />
           </div>
            </div>
        </InnerLayout>

    </SeoSectionStyled>
  )
}

const SeoSectionStyled = styled.section`
.seo-container{
    display: grid;
    grid-template-columns:repeat(2,1fr);
    @media screen and (max-width: 845px){
       grid-template-columns: repeat(1, 1fr);
    }
 

  .seo-right{
    
      display: flex;
      justify-content: flex-end;
      img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
      

       }
 
 .seo-left{
   p{
    padding: 1rem 0;
   }
 }
} 
`;

export default SeoSection;