import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:20px;
`;
export const LoadingContent = styled.div`
width:100%;
div {
    margin: auto auto;
}

`
export const TitleContent = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    a{
        background: #e2e2e2;
        padding:5px;
        
        border-radius:6px;
        :hover {
            color:#fff;
        }
    }
    button{
        background: #e2e2e2;
        padding:5px;
        border:none;
        border-radius:6px;
        :hover {
            color:#fff;
        }
        margin-left:5px;
    }
`;
export const Title = styled.div`
    text-align:center;
    font-weight:bold;
    font-size:20px;
`;