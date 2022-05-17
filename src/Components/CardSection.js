import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import card from '../img/img6.png';

function CardSection() {
  return (
    <CardSectionStyled>
        <InnerLayout>
            <div className='card-container'>
            <div className='card-left'>
            
               <h2 className='secondary-heading'>
                        hello world
                 </h2>
                 <p>
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
      }

      .card-right{
            background: transparent;
           display: flex;
           justify-content: center;
           
      }
      .card-left{
         padding: 1rem 0;
      }
`;
export default CardSection