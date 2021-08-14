import styled, { css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    height:80vh;
`
export const LoadingContent = styled.div`
width:100%;
div {
    margin: auto auto;
}

`
export const EditionContainer = styled.div`
    display:flex;
    border: 1px solid #e2e2e2;
    border-radius:6px;
    box-shadow:0px 1px 3px 0px;
    padding: 30px;
    width: 500px;
    height:100%;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    margin: 10px 0;
    p{
        margin:10px 0;
    }

   
`;

export const Category = styled.select`
    margin: 8px 0;
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 4px;
    font-size: 17px;
    width: 300px;

    :hover{
        border: 1px solid #ddd;
    }
   
`;

export const CalendarArea = styled.div`
    border: 1px solid #e2e2e2;
    border-radius:6px;
    box-shadow:0px 1px 3px 0px;
    padding: 30px;
    width: 500px;
    height:100%;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-between;
    margin: 10px 0; 
`
export const Title = styled.input`
    margin: 8px 0;
    width:220px;
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 4px;
    font-size: 17px;
    margin-right:20px;
    :hover{
        border: 1px solid #ddd;
    }
    ${props=>props.error && css`
        border: 1px solid red;
    `}
`;

export const Content = styled.textarea`
    width:100%;
    height:100%;
    resize:none;
    border: 1px solid #eee;
    outline:none;
    font-size:17px;
    ${props=>props.error && css`
        border: 1px solid red;
    `}
`;


export const SaveButton = styled.button`
display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #fff;
  background: #C2C2C2;
  width: 142px;
  height: 36px;
  border: none;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  font-weight: bold;

  :hover {
    background: #e2e2e2;
  }
`;

export const Error = styled.p`
    color:#fff;
    background-color:red;
    padding:5px;
    border-radius:4px;
    width:100%
`