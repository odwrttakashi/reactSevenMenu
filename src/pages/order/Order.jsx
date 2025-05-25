import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrderedItemsList from '../../components/OrderedItemsList';
import OrderedItemsCards from '../../components/OrderedItemsCards';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0px;
    padding: 0px;
    min-height: 100vh; 
    background-image: url('/images/en.png');  /* 背景画像のパスを指定 */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 5px solid #000;
`;

const Order = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
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
            {/* 戻るボタン */}
            <button
                style={{
                    position: 'fixed',
                    top: 20,
                    left: 20,
                    zIndex: 2000,
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#444',
                    color: '#fff',
                    opacity: 0.8,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/menu', { state: { menuCounts, menuData } })}
            >
                ← {t('order.back')}
            </button>
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
            <Footer />
        </>
    );
};

export default Order;