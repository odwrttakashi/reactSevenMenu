import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Container = styled.div`
margin-top: 0px;    
margin-bottom: 20px;
    padding: 10px;
   background-color: rgb(240, 226, 203,0.8); /* 半透明の白色 */
    border: 3px solid #000;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
 
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

    const { t: tOrder } = useTranslation('translation', { lng: 'ja' }); // 'ja' 言語を設定

    if (orderedItems.length === 0) return null;

    return (
        <Container>
            <Title>{tOrder('order.receipt')}</Title> {/* オーダーページ専用の翻訳関数を使用 */}
            <Table>
                <thead>
                    <tr>
                        <TableHeader>{tOrder('order.item')}</TableHeader> {/* オーダーページ専用の翻訳関数を使用 */}
                        <TableHeader>{tOrder('order.quantity')}</TableHeader> {/* オーダーページ専用の翻訳関数を使用 */}
                    </tr>
                </thead>
                <tbody>
                    {orderedItems.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{tOrder('menu.' + item.nameKey)}</TableCell> {/* オーダーページ専用の翻訳関数を使用 */}
                            <TableCell>{menuCounts[item.id]}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default OrderedItemsList;
