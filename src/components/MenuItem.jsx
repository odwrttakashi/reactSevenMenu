import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(240, 226, 203,0.8);
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    width: 200px;
    height: 270px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 160px;
    object-fit: contain;
    border-radius: 4px;
`;

const Name = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 16px;
    text-align: center;
    word-wrap: break-word;
    line-height: 1.4;
`;

const PriceControl = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 4px;
`;

const CountButton = styled.button`
    background-color: rgb(249, 250, 249);
    color: #333;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;           // パディングを大きく
    font-size: 22px;             // フォントサイズを大きく
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background 0.2s;
    &:hover {
        background-color: #e0e0e0;
    }
`;

const Price = styled.p`
    margin: 0;
    padding: 0 4px;
    font-size: 14px;
    color: #000;
    min-width: 48px;
    font-weight: bold;
`;

const MenuItem = ({ name, image, price, onIncrement, onDecrement }) => {
    return (
        <Container>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
            <PriceControl>
                <CountButton onClick={onDecrement}>-</CountButton>
                <Price>¥{price}</Price>
                <CountButton onClick={onIncrement}>+</CountButton>
            </PriceControl>
        </Container>
    );
};

export default MenuItem;
