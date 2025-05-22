import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrderedItemsList from '../../components/OrderedItemsList';
import OrderedItemsCards from '../../components/OrderedItemsCards';

import styled from 'styled-components';

const Container = styled.div`
    margin: 0px;
    padding: 0px;
    height: 100vh; /* 高さを100%に設定 */
    background-image: url('/images/en.png');  背景画像のパスを指定 
    background-size: cover; /* 画像をコンテナ全体に拡大縮小 */
    background-position: center; /* 画像を中央に配置 */
    background-repeat: no-repeat; /* 画像を繰り返さない */
    border: 5px solid #000;
`;

const Order = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { menuCounts, menuData } = location.state || {};

    const orderedItems = menuData.filter(item => menuCounts[item.id] > 0);

    // OrderedItemsListを日本語で表示
    const renderOrderedItemsList = () => {
        const currentLang = i18n.language; // 現在の言語を保存
        i18n.changeLanguage('ja'); // 日本語に切り替え
        const list = <OrderedItemsList orderedItems={orderedItems} menuCounts={menuCounts} />;
        i18n.changeLanguage(currentLang); // 元の言語に戻す
        return list;
    };

    return (
        <>

            <Container>

                {/* 伝票のようなメニュー名リスト */}
                {renderOrderedItemsList()}

                {/* オーダーのカード表示 */}
                {orderedItems.length > 0 ? (
                    <OrderedItemsCards orderedItems={orderedItems} menuCounts={menuCounts} />
                ) : (
                    <p>{t('order.empty')}</p>
                )}

            </Container>
        </>
    );
};

export default Order;