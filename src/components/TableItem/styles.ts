import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;
export const Category = styled.div<{ color?: string, bgcolor?: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: ${props => props.color};    
    font-weight: bold;
    background-color: ${props => props.bgcolor};
`;

export const Value = styled.div<{color?: string}>`
    font-weight: bold;
    color: ${props => props.color};
`;