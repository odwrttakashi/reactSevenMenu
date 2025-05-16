import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SnsIcon from '../../components/SnsIcon'; // SnsIconをインポート

// Styled-componentsで背景色を設定
const HomeContainer = styled.div`
    background-image: url('/images/taremaku4.png'); /* 背景画像を指定 */
    background-repeat: no-repeat; /* 画像を繰り返さない */
    background-attachment: fixed; /* スクロール時に画像を固定 */
    background-position: center; /* 画像を中央に配置 */
    background-size: cover; /* 画像をコンテナ全体に拡大縮小 */
    color: white; /* テキストを白色に変更 */
    min-height: 100vh; /* 画面全体を覆う */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative; /* 子要素の絶対位置を有効にする */

    /* 半透明の黒色オーバーレイを追加 */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2); /* 半透明の黒色 */
        z-index: 1; /* 背景より前面、コンテンツより背面に配置 */
    }

    /* 子要素をオーバーレイの前面に表示 */
    > * {
        position: relative;
        z-index: 2;
    }
`;

const LanguageContainer = styled.div`
    display: flex;
    flex-direction: column; /* 縦に配置 */
    align-items: flex-end; /* テキストを右揃え */
    position: absolute;
    left: 20%; /* 中央よりやや左側に配置 */
    top: 50%; /* 縦方向の中央 */
    transform: translateY(-50%); /* 縦方向の中央揃えを調整 */

    padding: 20px; /* 内側の余白を追加 */
    
    color: white; /* テキストの色 */
`;

const HomeButton = styled.span`
    &:hover {
        color: rgb(227, 188, 47); /* ホバー時の色 */
    }
    cursor: pointer; /* カーソルをポインターに変更 */
    margin: 10px 0; /* 上下の間隔を設定 */
    font-size: 24px; /* フォントサイズを大きく */
    
    transition: all 0.3s ease; /* ホバー時のアニメーションを追加 */
`;

const Home = () => {
    const navigate = useNavigate();

    const handleSelect = (path) => {
        navigate(path); // 指定されたパスに遷移
    };

    return (
        <>
            <HomeContainer>
                <LanguageContainer>
                    <HomeButton onClick={() => handleSelect('/menu?lang=ja')}>日本語</HomeButton>
                    <HomeButton onClick={() => handleSelect('/menu?lang=en')}>English</HomeButton>
                    <HomeButton onClick={() => handleSelect('/menu?lang=ko')}>한국어</HomeButton>
                </LanguageContainer>

            </HomeContainer>
            <SnsIcon /> {/* SnsIconを追加 */}
        </>
    );
};

export default Home;
