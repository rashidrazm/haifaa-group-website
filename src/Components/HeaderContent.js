import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton';
import phone from '../img/digital6.png'
import icon1 from '../img/icon-1.png';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';


function HeaderContent() {
  return (
    <HeaderContentStyled>
       <div className='left-content'>
           <div className='left-text-container'>
           <h1>Haifaa Group <br/>Digital Solutions</h1>
           <p className='white'>
           We craft engaging brands and digital experiences that define culture and elevate brands to achieve unprecedented growth. Since day one, our focus has been on providing strategies and services that position our clients to succeed in today’s dynamic, constantly evolving world.</p>
           <SecondaryButton name={'Register now'}/>
           </div>
       </div>
       <div className='right-content'>
           <img src={phone} className='phone' />
           <img src={icon1} className='icon1'/>
           <img src={message1} className='message1'/>
           <img src={message2} className='message2'/>

       </div>

    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top:2rem;
  .left-content{
    display:flex;
    align-items:center;
    padding-right:3rem;
    .white{
        color:white;
    }
    h1{
         font-size:4rem;
         font-weight:600;
    }
    .white{
         padding:1.4rem 0;
         line-height:1.8rem;
    }
  }

  .right-content{
    position:relative;
    
    justify-content:center;

    .phone{
      padding:1rem;
      
    }
    .icon1{
      position:absolute;
      bottom:10%;
      right:0;
      left:auto;
      animation: move 5s infinite;
      transition: all .4s ease-in-out;
      
      
    }
    .message1{
      position:absolute;
      top:0;
      right:0;
      left:auto; 
      animation: move 5s infinite;
      transition: all .4s ease-in-out;
    }
    .message2{
      position:absolute;
      bottom:15%;
      left:0; 
      padding-right:11rem;
      animation: move 8s infinite;
      animation-delay: .5s;
      transition: all .4s ease-in-out;

    }
    
  }

  //Header Animations
   .message1{
       @keyframes move{
         0%{
            transform: translateY(0) rotate(0deg) scale(1);   
         }
         50%{
          transform: translateY(-10px) rotate(20deg) scale(1.1);
         }
         100%{
          transform: translateY(0) rotate(0deg) scale(1);

         }
       }
   }

`;
export default HeaderContent