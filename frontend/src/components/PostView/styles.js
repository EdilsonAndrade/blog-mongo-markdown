import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding:20px;
`;
export const TitleContent = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    a{
        background: #e2e2e2;
        padding:5px;
        border-radius:6px;
        :hover {
            color:#fff;
        }
    }
`;
export const Title = styled.div`
    text-align:center;
    font-weight:bold;
    font-size:20px;
`;