import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;

const OrderButton = ({ onClick, label }) => {
    return (
        <StyledButton onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default OrderButton;