import React from 'react'
import styled from 'styled-components'
import ppc from '../img/ppc.png';

function PpcSection() {
  return (
    <PpcSectionStyled>
        <div className='ppc-con'>
             <div className='ppc-left'>
               <h2 className='secondary-heading' href='' >
                   PPC Marketing</h2>
                 <p >
                  One of the most popular forms of  pay-per-click or PPC is search engine advertising, which allows advertisers to pay for ad placement in a search engine’s
                  sponsored links. This works when someone searches for a keyword related to their business offering. For example, if we bid on the keyword
                   ‘Google Shopping Management’ our ad might show up at the top of the Google results page.

                 </p>
             </div>
             <div className='ppc-right'> 
                 
                 <img src={ppc} />
             </div>
        </div>
    </PpcSectionStyled>
  )
}

const PpcSectionStyled = styled.section`
.ppc-con{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  @media screen and (max-width: 845px){
     grid-template-columns: repeat(1, 1fr);
  }


.ppc-right{
  
    display: flex;
    justify-content: flex-end;
    img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
    

     }

.ppc-left{
 p{
  padding: 1rem 0;
 }
}
} 
`;

export default PpcSection
