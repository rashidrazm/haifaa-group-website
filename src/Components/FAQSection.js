import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg';
import Questions from './Questions';
import question from '../question';


function FAQSection() {
  return (
    < FaqStyled>
         <InnerLayout>
            <h3 className='small-heading'>Frequently <span>asked questions</span></h3>
            <p className='c-para'>
                lorem ipsum sample 21 and we aae going tto school when we are to 
                students and teachers this is a sample or dummy sentence
            </p>
            <div className='lines'>
                 <img src={lines} />
            </div>

            <div className='questions-con'>
                {
                 question.map((q)=>{
                     return <Questions key={q.id} {...q}/>
                 })
                }
            </div>
         </InnerLayout>
    </ FaqStyled>
  )
}


const FaqStyled = styled.section`
    .c-para{
        width:60%;
        margin:0 auto;
    }
    .questions-con{
        padding-top: 2rem;
    }
    .lines{
        position: absolute;
        left:0;
        top: 160%;
        width: 100%;
        z-index: -1; //behind all data
           img {
               width: 100%;
           }
    }
`;
export default FAQSection;