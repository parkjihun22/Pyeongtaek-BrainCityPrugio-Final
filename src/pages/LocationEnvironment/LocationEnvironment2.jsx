import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
// import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/premium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>평택 브레인시티 푸르지오 - 프리미엄</title>
        <meta
          name="description"
          content="평택 브레인시티 푸르지오 프리미엄을 확인하세요. KTX·SRT·1호선 연계 교통망, 삼성 평택캠퍼스 및 산업단지 인접, 코스트코·대형마트 등 생활 인프라, 의료복합타운과 첨단산업벨트 개발 호재까지 누릴 수 있는 미래가치를 안내합니다."
        />
        <link
          rel="canonical"
          href="https://eliasart.kr/LocationEnvironment/premium"
        />
        <meta name="robots" content="index,follow" />
      </Helmet>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 푸르지오 - 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 푸르지오만의 차별화된 프리미엄을 만나보세요. 고급스러운
        디자인과 첨단 기술이 결합된 설계, 입주민을 위한 특별한 혜택을 통해
        푸르지오만의 독보적인 가치를 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>브레인시티의 눈부신 가치 위에</div>
        <div>평택 브레인시티 푸르지오의 새로운 자부심으로 찾아옵니다.</div>
      </div>


      {/* <img
        src={page1}
        className={styles.image3}
        alt="평택 브레인시티 푸르지오-image1"
      /> */}
      <Ready/>
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
