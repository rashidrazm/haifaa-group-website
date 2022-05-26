import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import FAQSection from './Components/FAQSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Message from './Components/Message';
import PpcSection from './Components/PpcSection';
import SeoSection from './Components/SeoSection';
import {OuterLayout} from './styles/Layouts';



function App() {
  
  return (
    <div className="app">
       <Header/>
       <OuterLayout>
           <MainStyled>
             <Fade left>
               <Message/>
             </Fade>  
             <Fade right>
               <CardSection/>
             </Fade>
             <Fade left>
               <ChartSection/>
             </Fade>
             <Fade right>
               <SeoSection/>
             </Fade>   
             <Fade left>
               <PpcSection/>
             </Fade> 
             <Fade right>
               <FAQSection/>
             </Fade>
             
             
           </MainStyled>
       </OuterLayout>
       <Fade bottom>
           <Footer/>
       </Fade>
    </div>
  );
}

const MainStyled = styled.main`

`;

export default App;


