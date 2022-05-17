import React from 'react';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Message from './Components/Message';
import {OuterLayout} from './styles/Layouts';



function App() {
  
  return (
    <div className="app">
       <Header/>
       <OuterLayout>
           <MainStyled>
             <CardSection/>
             <ChartSection/>
             <Message/>
             <FAQSection/>
           </MainStyled>
       </OuterLayout>
       <Footer/>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;


