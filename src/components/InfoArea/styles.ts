import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const AreaMes = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
`;
export const SetaMes = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;
export const TituloMes = styled.div`
    flex: 1;
    text-align: center;
`;
export const AreaResumo = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-around;
`;