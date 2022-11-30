import styled from "styled-components";

const MainColor = "black";

export const background = styled.img`
    width: 100%; 
    height: 935px;
    background-image: url("../img/background.svg");
`;

export const section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TodoContainer = styled.div`
    border: 2px solid ${MainColor};
    width: 300px;
    height: 600px;
`; 