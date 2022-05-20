import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts';
import chart from '../img/marketing5.png';
import AnimatedButton from './AnimatedButton';


function ChartSection() {
  return (
    <ChartStyled>
        <InnerLayout>
          <div className='chart-con'>
             <div className='chart-left'>
                 <img src={chart} />
             </div>
             <div className='chart-right'> 
                 <h2 className='chart-heading' href='' >Hello World</h2>
                 <p className='para'>
                   hello world this is the sample description for checking text design structure.
                 </p>
                 <AnimatedButton name={ 'Learn more'} />
             </div>
        </div>
        </InnerLayout>
    </ChartStyled>
  )
}

const ChartStyled = styled.section`
    .chart-con{
      display: grid;
      grid-template-columns: repeat(2,1fr);
      @media screen and (max-width: 845px){
        grid-template-columns: repeat(1, 1fr);
     }
    
    .chart-left{
      
      justify-content:center;
    }
  }
    .chart-right{
      padding-left:2rem;
       p{
          padding: 1.3rem 0;
          
       }
    }

    
`;
export default ChartSection