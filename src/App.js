import React from 'react';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import Header from './Components/Header';
import {OuterLayout} from './styles/Layouts';



function App() {
  
  return (
    <div className="app">
       <Header/>
       <OuterLayout>
           <MainStyled>
             <CardSection/>
             <ChartSection/>
           </MainStyled>
       </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;


