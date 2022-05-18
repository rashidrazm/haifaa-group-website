import React, { useState } from 'react'
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';

function Questions({title, description}) {
    const [toggle, setToggle] = useState(false);

    const btnToggler = () =>{
       setToggle(!toggle); 
    }
  return (
    <QuestionStyled>
         <div className='q-con'>
            <div className='toggle-title'>
                <h4>{title}</h4>
                <button onClick={btnToggler}>
                    {toggle ? <img src={minus}/> :  <img src={plus} /> }
                </button>
            </div>
             {toggle && <p>{description}</p> }
         </div>
    </QuestionStyled>
  )
}

const QuestionStyled = styled.div`
 background-color: #fff;
 margin: 1rem 0;
 padding: 1.4rem 1rem;
 border-radius: 24px;
 transition: all .4s ease-in-out;
 box-shadow: 0px 25px 50px rgba(22, 55, 79, 0.05);
 

 
 
 p{
  transition: all .4s ease-in-out;

 }
   h4{
      color: #16194F;
      transition: all .4s ease-in-out;
      font-size: 1.4rem;

   }
    .toggle-title{
       display: flex;
       align-items: center;
       justify-content: space-between;
       transition: all .4s ease-in-out;

       button{
          background: transparent;
          outline: none;
          border: none;
       }
    }
`;

export default Questions; 