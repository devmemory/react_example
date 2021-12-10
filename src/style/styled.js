import styled from "styled-components";

export const CircleButton = styled.button`
border : none;
outline: none;
border-radius: 50%;
font-weight: bold;
font-size: 20px;
color: white;
cursor: pointer;

margin: 10px;
height: 40px;
width: 40px;
background: ${(props) => props.color};

&:hover,
&:active {
background: ${(props) => props.hoverColor};
}
`;

export const Center = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
`;