import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
<div className={styles.container}>
                <Helmet>
                    <title>평택 브레인시티 푸르지오 - 브랜드 소개</title>
                    <meta
                    name="description"
                    content="대우건설 푸르지오 브랜드 철학과 가치를 담은 평택 브레인시티 푸르지오. 품질 기준, 첨단 시공 기술, 프리미엄 주거문화로 입주민의 생활 품격을 높입니다."
                    />
                    <link rel="canonical" href="https://eliasart.kr/Brand/intro" />
                    <meta name="robots" content="index,follow" />

                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta property="og:site_name" content="평택 브레인시티 푸르지오" />
                    <meta property="og:title" content="평택 브레인시티 푸르지오 - 브랜드 소개" />
                    <meta
                    property="og:description"
                    content="대우건설 푸르지오 브랜드 소개: 철학과 가치, 프리미엄 품질 기준과 시공 신뢰성으로 완성되는 평택 브레인시티 푸르지오."
                    />
                    <meta property="og:url" content="https://eliasart.kr/Brand/intro" />
                    <meta property="og:image" content="https://eliasart.kr/images/og/main.jpg" />
                </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="푸르지오" />

            <MenuBar contents={menuContents} />
            {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>평택 브레인시티 푸르지오 - 브랜드소개</h1>
            <p className={styles.screenReaderOnly}>
                평택 브레인시티 푸르지오는 고객 신뢰와 품질을 최우선으로 여기는 브랜드입니다. 
                첨단 설계와 고급 자재를 사용하여 입주자에게 최고의 주거 환경을 제공합니다. 
                지속적인 혁신과 고객 만족을 위한 브랜드 철학을 바탕으로, 
                미래 지향적인 주택 가치를 제시하는 푸르지오의 철학을 경험해보세요.
            </p>

            <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>삶의 새로운 중심, 평택 브레인시티</div>
                <div>푸르지오, 미래가치를 선도하다</div>
            </div>

            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="평택 브레인시티 푸르지오 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
