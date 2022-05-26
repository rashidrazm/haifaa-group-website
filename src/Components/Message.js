import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';

function Message() {
  return (
        <MessageStyle>
            
                <div className='message-con'>
                <h1 className='primary-heading'>Our <span> Services </span></h1>

                 </div>
            
        </MessageStyle> 
  )
}

const MessageStyle = styled.section`
       .left-items{

       }
       .right-items{

       }
`;

export default Message;