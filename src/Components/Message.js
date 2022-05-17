import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';

function Message() {
  return (
        <MessageStyle>
            <InnerLayout>
                <div className='message-con'>
                      <div className='left-items'>
                            <h2 className='secondary-heading'>
                                    We support you in 5 ways
                            </h2>
                      </div>
                      <div className='right-items'>

                      </div>

                 </div>
            </InnerLayout>
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