import styled from "styled-components";
import bgimg from "../img/background.png"

export const background = styled.div`
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 937px;
`;


export const TodoFlex = styled.div`
    display: flex;
    justify-content: center;
`; 

export const TodoContainer = styled.div`
    width: 300px;
    height: 600px;
    background-color: #ECE5F4;
`;