import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import MenuItem from '../../components/MenuItem';
import menuData from '../../data/menuData';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import { RiShoppingCartLine } from "react-icons/ri";

const CategoryGrid = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    gap: 8px;
    margin-top: 8px;
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 10;
    padding: 4px 10px;
    background-image: url('/images/category/catebk1.png');
    background-size: cover;
    background-position: center;
    
    box-shadow: 0 5px 6px rgba(0,0,0,0.18);
    
    /* スクロールバー非表示（主要ブラウザ対応） */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE, Edge */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
        
`;
const CategoryButton = styled.button`
    padding: 10px 40px;
    background: ${({ isSelected }) => (isSelected ? 'rgba(20,20,20,0.85)' : 'rgba(255, 255, 255, 0.1)')}; /* 選択時はすみくろ */
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#222')};
    border: none;
    border-radius: 0px;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    backdrop-filter: blur(6px); /* ブラー効果 */
    -webkit-backdrop-filter: blur(6px); /* Safari対応 */
    box-shadow: 0 2px 8px rgba(0,0,0,0.0.8);
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s;

    opacity: 0.85; /* 少しだけ透過 */
    &:hover {
        background: rgba(255,255,255,0.25);
        color: #000;
    }
`;


const HomeButton = styled.button`
    position: fixed; /* 画面に固定 */
    top: 10px; /* 画面上部からの距離 */
    left: 7%; /* 水平方向の中央に配置 */
    transform: translateX(-50%); /* 中央揃え */
    width: 60px; /* ボタンの幅を小さくする */
    height: 60px; /* ボタンの高さを小さくする */
    background-image: url('/images/button/homebutton.png'); /* ボタンに画像を設定 */
    background-size: 60px 60px; /* 画像のサイズを調整 */
    background-repeat: no-repeat; /* 画像を繰り返さない */
    background-position: top; /* 画像をボタンの上部に配置 */
    background-color: transparent; /* 背景色を透明に設定 */
    border: none; /* ボーダーを削除 */
    border-radius: 10px; /* ボタン全体を角丸にする */
    cursor: pointer; /* カーソルをポインタに変更 */
    z-index: 1100; /* 他の要素より前面に表示 */
    
    display: flex; /* ボタン内の要素をフレックスボックスで配置 */
    flex-direction: column; /* 縦方向に配置 */
    align-items: center; /* 中央揃え */
    justify-content: flex-end; /* 文字をボタンの下部に配置 */
    color: #333; /* HOME文字の色 */
    font-size: 12px; /* HOME文字のサイズを小さくする */
    font-weight: bold; /* HOME文字を太字に */
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8); /* HOME文字に影を追加 */
    padding-bottom: 5px; /* 文字とボタン下部の間隔を調整 */

    &:hover {
        opacity: 0.8; /* ホバー時に少し透明にする */
    }
`;

const MenuContainer = styled.div`
    /* background-image: url('/images/en.png'); 背景画像を設定 */
   background-color: #f0e6db; /* 背景色を薄いベージュに設定 */
    
    background-size: cover; /* 画像を全体に拡大 */
    background-position: top; /* 画像をページの最上部に配置 */
    min-height: 100vh; /* ページ全体をカバー */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WhiteOverlay = styled.div`
    position: fixed; /* 画面に固定 */
    top: 0; /* 画面上部からの距離 */
    left: 0; /* 画面左からの距離 */
    width: 100%; /* 画面全幅をカバー */
    height: 110px; /* カテゴリーボックスの上部を覆う高さ */
    
    background-color: white; /* 背景色を白に設定 */
    z-index: 1; /* カテゴリーボックスより前面に表示 */
`;
const TileOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-image: url('/images/category/category4.png');
    background-size: cover;
    background-position: center;
    z-index: 1;

    /* ブラー効果を追加 */
    filter: blur(0px);
    opacity: 0.85; /* うっすら感を調整 */
    pointer-events: none; /* クリックを透過 */
`;

const LanguageDisplay = styled.div`
    position: fixed;
    top: 55px;
    right: 82%;
    z-index: 1200;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    opacity: 0.9;
    pointer-events: none;
    user-select: none;
`;
const MenuPositionStart = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 130px; /* カテゴリーボックスの高さ＋余白 */
    padding: 0 20px; /* 左右の余白を追加 */
    width: 100%;        
    box-sizing: border-box;
`;
const CountBadge = styled.div`
    position: absolute;
    top: 8px;
    right: 5px;
    background: rgba(202,25,25, 0.85);
    color: #fff;
    border-radius: 50%;
    min-width: 28px;
    height: 26px;
    display: flex;
    align-items: flex-start;      // 上寄せ
    justify-content: center;      // 横は中央
    font-size: 19px;
    font-weight: bold;
    z-index: 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.18);
    line-height: 1;
    padding-top: 2px;             // 上に少し余白を追加
    text-align: center;
`;

const OrderCountBadge = styled.div`
    position: absolute;
    top: -9px;
    right: -5px;
    background: rgba( 202,25,25,0.85);
    color: #fff;
    border-radius: 50%;
    min-width: 26px;
    height: 21px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    z-index: 1;
    box-shadow: 0 2px 6px rgba(0,0,0,0.18);
    line-height: 1;
    padding-top: 5px;
    text-align: center;
    pointer-events: none;
`;

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgb(240, 226, 203, 0.8);
    z-index: 0;
    pointer-events: none;
`;

const Menu = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('Sasimi'); // 初期ジャンルを設定
    // stateから初期値を取得
    const initialCounts = location.state?.menuCounts || {};
    const initialMenuData = location.state?.menuData || menuData;

    const [menuCounts, setMenuCounts] = useState(initialCounts);

    useEffect(() => {
        // クエリパラメータから言語を取得し、必ず言語を切り替える
        const params = new URLSearchParams(location.search);
        const lang = params.get('lang');
        i18n.changeLanguage(lang); // 言語を切り替え
    }, [location, i18n]);

    // 選択されたジャンルのメニューをフィルタリング
    const filteredMenu = initialMenuData.filter(item => item.category === selectedCategory);

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
        navigate('/order', { state: { menuCounts, menuData, lang: i18n.language } }); // 言語をstateに追加
    };

    // 合計カウントを計算
    const totalCount = Object.values(menuCounts).reduce((sum, v) => sum + v, 0);

    return (
        <MenuContainer>

            <LanguageDisplay>
                [{i18n.language.toUpperCase()}]
            </LanguageDisplay>
            {/* 上部の白色オーバーレイ */}
            <WhiteOverlay />/* タイル状のオーバーレイ */
            <TileOverlay />
            <BackgroundOverlay />

            {/* ジャンル選択ボタン */}
            <CategoryGrid>
                {['Sasimi', 'Small_plate', 'Salada', 'Create', 'Grilled', 'Fried', 'Rice/Soup', 'Sweets'].map(category => (
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
            <MenuPositionStart>
                {filteredMenu.map(item => (
                    <div key={item.id} style={{ position: 'relative' }}>
                        {(menuCounts[item.id] || 0) > 0 && (
                            <CountBadge>{menuCounts[item.id]}</CountBadge>
                        )}
                        <MenuItem
                            name={t('menu.' + item.nameKey)}
                            price={item.price}
                            image={item.image}
                            count={menuCounts[item.id] || 0}
                            onIncrement={() => incrementCount(item.id)}
                            onDecrement={() => decrementCount(item.id)}
                        />
                    </div>
                ))}
            </MenuPositionStart>

            {/* 固定されたオーダーボタン */}
            <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
                <button
                    onClick={handleOrder}
                    style={{
                        padding: '10px 24px',
                        fontSize: '20px',
                        color: 'white',
                        background: '#444',
                        border: 'none',
                        borderRadius: '24px',
                        cursor: 'pointer',
                        position: 'relative',
                        opacity: 0.92,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
                        fontWeight: 'bold',
                        letterSpacing: '1px'
                    }}
                >
                    <RiShoppingCartLine style={{ marginRight: 5, fontSize: 24 }} />
                    {t('buttons.order')}
                    {totalCount > 0 && (
                        <OrderCountBadge>{totalCount}</OrderCountBadge>
                    )}
                </button>
            </div>


            {/* ホーム画面へ遷移するボタン */}
            <HomeButton onClick={() => navigate('/')}></HomeButton>

            <Footer />
        </MenuContainer >

    );
};

export default Menu;
