import styled from  'styled-components'

export const Container = styled.div`
   background: #fff;
   color:#444;
`;

export const Content = styled.div`
  height: 58px;
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: rgb(45.6%, 45.6%, 49.1%);
  a{
      padding:5px;
      border-radius:6px;
      color:#444;
      text-decoration:none;
      font-weight:bold;
      background-color: rgb(25.6%, 45.6%, 49.1%);
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
