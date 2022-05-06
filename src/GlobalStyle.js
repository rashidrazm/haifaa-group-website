import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle `

  :root{
    --purple-primary: #554DDE;
    --accent-pink: #F44E77;
    --neutral-light: #F2F6FF;
    --lavender-secondary: #6A6D9E;
    --dark-primary: #16194F;
    --border-colour: #CAB6F1;
    
  }

   *{
       margin :0;
       padding :0;
       list-style: none;
       box-sizing:border-box;
       font-family: 'Nunito', sans-serif; 
       text-decoration:none;
   }

   body{
       background-color: var(---neutral-light);
       color:white;
       font-size:1.2rem;
   }

   a{
       color: inherit;
   }
`;

export default GlobalStyle;