import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48px;
    background: rgba(44,44,44,0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    letter-spacing: 1px;
    opacity: ${({ visible }) => (visible ? 0.7 : 0)};
    pointer-events: none;
    transition: opacity 0.5s;
    z-index: 9999;
`;

const Footer = () => {
    const [visible, setVisible] = useState(false);
    let scrollTimeout = null;

    useEffect(() => {
        const handleScroll = () => {
            setVisible(false);
            if (scrollTimeout) clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setVisible(true);
            }, 500); // スクロール停止後600msで表示
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <FooterContainer visible={visible}>
            © 2025 七之助 | All Rights Reserved
        </FooterContainer>
    );
};

export default Footer;