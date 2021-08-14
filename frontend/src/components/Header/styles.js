import styled from  'styled-components'

export const Container = styled.div`
   background: #444;
   color:#fff;
`;

export const Content = styled.div`
  height: 58px;
  display:flex;
  justify-content: center;
  a{
      padding:5px;
      border-radius:6px;
      color:#fff;
      text-decoration:none;
      font-weight:bold;
      background-color: rgb(45.6%, 45.6%, 49.1%);
    }
  nav{
    display:flex;
    justify-content:center;
    align-items:center; 
    margin:10px;
    
  
  }
  aside{
   
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:20px;
 }
`;
