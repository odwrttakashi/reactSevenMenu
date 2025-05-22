import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgb(240, 226, 203,0.8); /* 半透明の白色 */
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    width: 200px;
    height: 230px; /* カード全体の高さを固定 */
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
    word-wrap: break-word; /* 長い単語を折り返し */
    line-height: 1.4; /* 行間を調整 */
`;

const Price = styled.p`
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #000;

`;

const MenuItem = ({ name, image, price }) => {
    return (
        <Container>
            <Image src={image} alt={name} />
            <Name>{name}</Name>
            <Price>¥{price}</Price>
        </Container>
    );
};

export default MenuItem;
