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
                 <p>
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
    }
    .chart-left{
      justify-content:center;
    }
    .chart-right{
      justify-content:center;
      padding-left:10rem;
      padding-top:4rem;
    }
`;
export default ChartSection