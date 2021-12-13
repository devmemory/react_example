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

export const ModalBackground = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0 auto 0 auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 2;
`;

export const ModalContent = styled.div`
    display: grid;
    place-content: center;
    background-color: white;
    padding: 20px 40px 20px 40px;
    text-align: center;
    border-radius: 20px;
`;