import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '../../components/MenuItem';
import menuData from '../../data/menuData';
import styled from 'styled-components';

const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4列 */
    gap: 10px; /* ボタン間の間隔 */
    margin-bottom: 20px;
`;

const CategoryButton = styled.button`
    padding: 10px 20px;
    background-color: ${({ isSelected }) => (isSelected ? '#B197FC' : '#f0f0f0')};
    color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    white-space: nowrap;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? '#9c86e2' : '#e0e0e0')};
    }
`;

const Menu = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('sasimi'); // 初期ジャンルを設定
    const [menuCounts, setMenuCounts] = useState({}); // メニューごとのカウントを管理

    useEffect(() => {
        // クエリパラメータから言語を取得し、必ず言語を切り替える
        const params = new URLSearchParams(location.search);
        const lang = params.get('lang');
        i18n.changeLanguage(lang); // 言語を切り替え
    }, [location, i18n]);

    // 選択されたジャンルのメニューをフィルタリング
    const filteredMenu = menuData.filter(item => item.category === selectedCategory);

    // カウントを増やす
    const incrementCount = (id) => {
        setMenuCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }));
    };

    // カウントを減らす
    const decrementCount = (id) => {
        setMenuCounts(prevCounts => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0)
        }));
    };

    // オーダーボタンのクリック時にリストページに遷移
    const handleOrder = () => {
        navigate('/order', { state: { menuCounts, menuData } });
    };

    return (
        <div>
            {/* ジャンル選択ボタン */}
            <CategoryGrid>
                {['sasi', 'small_plate', 'Grilled', 'Stewed_Dishes', 'Sweets'].map(category => (
                    <CategoryButton
                        key={category}
                        isSelected={selectedCategory === category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {t('categories.' + category)}
                    </CategoryButton>
                ))}
            </CategoryGrid>

            {/* メニュー表示 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {filteredMenu.map(item => (
                    <div key={item.id} style={{ position: 'relative' }}>
                        <MenuItem
                            name={t('menu.' + item.nameKey)}
                            price={item.price}
                            image={item.image}
                        />
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <button onClick={() => decrementCount(item.id)}>-</button>
                            <span style={{ margin: '0 10px' }}>{menuCounts[item.id] || 0}</span>
                            <button onClick={() => incrementCount(item.id)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* オーダーボタン */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                    onClick={handleOrder}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    {t('buttons.order')} {/* 翻訳キーを使用 */}
                </button>
            </div>
        </div>
    );
};

export default Menu;
