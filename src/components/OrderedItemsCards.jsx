import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const CardsContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
   
`;

const Card = styled.div`
background-color: rgb(240, 226, 203,0.8); /* 半透明の白色 */
    border: 3px solid #000;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    width: 200px;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
`;

const OrderedItemsCards = ({ orderedItems, menuCounts }) => {
    const { t, i18n } = useTranslation();
    console.log(i18n);

    return (
        <CardsContainer>
            {orderedItems.map(item => (
                <Card key={item.id}>
                    <CardImage
                        src={item.image}
                        alt={t('menu.' + item.nameKey)}
                    />
                    <h3>{t('menu.' + item.nameKey)}</h3>
                    <p>{t('order.quantity')}: {menuCounts[item.id]}</p>
                </Card>
            ))}
        </CardsContainer>
    );
};

export default OrderedItemsCards;
