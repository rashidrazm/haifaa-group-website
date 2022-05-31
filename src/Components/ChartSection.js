import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import chart from '../img/png8.png';
import { LightSpeed, Roll} from 'react-reveal';



function ChartSection() {
  return (
    <ChartStyled>
        <InnerLayout>
          <div className='chart-con'>
             <div className='chart-left'>
               <LightSpeed>
                <h2 className='secondary-heading' href='' >
                   Web Design</h2>
               </LightSpeed>
              <Roll right>
                 <p >
                   We provides ultimate responsive website design services, Main benefit of responsive web design is flexible to adapt different screens of website
                  or mobile devices.
                 Before starting with responsive web development, we propose to know your requirements, understand them properly and then proceed further so as to
                  fulfill the task without any hassles. Once we receive confirmation of your project, then our dedicated developers establish strategy and plans
                   according to your business needs to cater the best suitable solutions for you.

                  </p>
              </Roll>
             </div>
             <div className='chart-right'> 
                
                 <img src={chart} />
             </div>
        </div>
        </InnerLayout>
    </ChartStyled>
  )
}

const ChartStyled = styled.section`
.chart-con{
  display: grid;
  grid-template-columns:repeat(2,1fr);
  @media screen and (max-width: 845px){
     grid-template-columns: repeat(1, 1fr);
  }
  .chart-right{
  
    display: flex;
    justify-content: flex-end;
    img{filter: drop-shadow(0px 50px 100px rgba(22, 25, 79, 0.15));}
    

     }

   .chart-left{
    p{
       padding: 1rem 0;
     }
  }
} 
`;

export default ChartSection
