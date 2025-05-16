import { changeLanguage } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    
 
`;

const Title = styled.h2`
    margin: 0 0 10px 0;
    font-size: 18px;
    text-align: center;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    border: 1px solid #ccc;
    padding: 8px;
    background-color: #f0f0f0;
    text-align: left;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

const TableCell = styled.td`
    border: 1px solid #ccc;
    padding: 8px;
`;

const OrderedItemsList = ({ orderedItems, menuCounts }) => {

    const { t, i18n } = useTranslation();
    i18n.changeLanguage('ja');
    if (orderedItems.length === 0) return null;

    return (
        <Container>
            <Title>{t('order.receipt')}</Title>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>{t('order.item')}</TableHeader>
                        <TableHeader>{t('order.quantity')}</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {orderedItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{t('menu.' + item.nameKey)}</TableCell>
                            <TableCell>{menuCounts[item.id]}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderedItemsList;
