import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    position: absolute;
    bottom: 20px; /* 画面下部からの距離 */
    width: 100%;
    text-align: center;
`;

const InstagramIcon = styled.img`
    width: 40px; /* アイコンの幅 */
    height: 40px; /* アイコンの高さ */
    cursor: pointer; /* カーソルをポインターに変更 */
    &:hover {
        opacity: 0.8; /* ホバー時に少し透明にする */
    }
`;

const SnsIcon = () => {
    return (
        <Footer>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon src="/images/ins.png" alt="Instagram" />
            </a>

        </Footer>
    );
};


export default SnsIcon;