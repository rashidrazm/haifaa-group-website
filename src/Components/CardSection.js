import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import card from '../img/media.png';


function CardSection() {
  return (
    <CardSectionStyled>
        <InnerLayout>
           
            <div  className='card-container'>
            
            <div className='card-left'>
               <h2 className='secondary-heading'>
                        Social Media Marketing
                 </h2>
                 <p>
                 lorem ipsum sjshf shs shsjhfsk sshf shf sjfh sfjhj ksksahf slhhf sa 

                   lorem ipsum sjshf shs shsjhfsk sshf shf sjfh sfjhj ksksahf slhhf sa 
                 </p>
           </div>
           <div className='card-right'>
               
                   <img src={card} />
           </div>
            </div>
          
        </InnerLayout>
    </CardSectionStyled>
  )
}

const CardSectionStyled = styled.section`
.card-container{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  @media screen and (max-width: 845px){
     grid-template-columns: repeat(1, 1fr);
  }


.card-right{
  
    display: flex;
    justify-content: center;
    img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
    

     }

.card-left{
 p{
  padding: 1rem 0;
 }
}
} 
`;
export default CardSection;