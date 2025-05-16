import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OrderedItemsList from '../../components/OrderedItemsList';
import OrderedItemsCards from '../../components/OrderedItemsCards';

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
        <div style={{ padding: '20px' }}>
            {/* 伝票のようなメニュー名リスト */}
            {renderOrderedItemsList()}

            {/* オーダーのカード表示 */}
            {orderedItems.length > 0 ? (
                <OrderedItemsCards orderedItems={orderedItems} menuCounts={menuCounts} />
            ) : (
                <p>{t('order.empty')}</p>
            )}
        </div>
    );
};

export default Order;