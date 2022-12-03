import styled from "styled-components";
import bgimg from "../img/background.png";

export const background = styled.div`
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
`;

export const TodoContainer = styled.div`
    width: 550px;
    height: 750px;
    background-color: #ECE5F4;
    border-radius: 20px;
    display:flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.div`
    color: #D7B0E9;
    font-size: 50px;
    margin-top: 30px;
`;

export const Input = styled.input`
    width: 380px;
    height: 40px;
    border: 4px solid #A778F2;
    background-color: transparent;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    padding-left: 10px;
    margin-top: 50px;
    color: #434343;
`;

export const PlusBtn = styled.div`
    cursor: pointer;
`;

export const Plus = styled.img`
    position: absolute;
    top: 27%;
    left: 119vh;
    padding-left: 3px;
`;

export const PlusBar = styled.div`
    position:absolute;
    width: 3px;
    height: 48px;
    background-color: #A778F2;
    top: 26%;
    left: 118vh;
`;

export const Line = styled.div`
    width: 100%;
    height: 3px;
    background-color: #A778F2;
    opacity: 0.5;
    margin-top: 30px;
`;

export const TodoList = styled.div`

`;

export const Todo = styled.div`
    border: 4px solid #A778F2;
    background-color: transparent;
    border-radius: 10px;
    width: 380px;
    height: 42px;
    padding-left: 10px;
    margin-top: 30px;
    display: flex;
    align-items:center;
`;

export const Content = styled.div`
    font-size: 20px;
    color: #434343;
`;

export const Complete = styled.img`
    width: 48px;
`;

export const Delete = styled.img`
    width: 48px;
`;