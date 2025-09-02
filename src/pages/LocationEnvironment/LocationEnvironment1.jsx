import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "평택 브레인시티 핵심 입지<br />확실한 미래가치",
    contentText:
      "브레인시티 복합개발사업으로 주거·산업·문화 인프라 확충<br />첨단산업벨트와 대규모 도시개발로 미래가치 극대화",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />안심 건강케어",
    contentText:
      "고덕국제화계획지구 의료복합타운(예정) 인접<br />종합병원·전문의료기관 접근성 우수로 안심 생활",
  },
  {
    img: section2Image3,
    titleText: "KTX·SRT·1호선 연계 + 광역도로망<br />탁월한 교통 접근성",
    contentText:
      "평택지제역(KTX·SRT) 초근접 더블역세권<br />경부고속도로·서해안고속도로·평택제천고속도로 등 사통팔달 교통망",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />원스톱 도시생활",
    contentText:
      "코스트코, 롯데마트, 이마트 등 대형 쇼핑시설 밀집<br />관공서·금융기관·문화시설 등 생활편의시설 집약",
  },
  {
    img: section2Image5,
    titleText: "브랜드타운 스케일<br />대단지 푸르지오",
    contentText:
      "평택 브레인시티 내 대규모 주거타운 형성<br />푸르지오 브랜드 가치와 풍부한 커뮤니티로 생활 품격 상승",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 자연환경<br />휴식과 여유를 누리는 생활",
    contentText:
      "삼정근린공원 등 풍부한 녹지 인접<br />브레인시티 내부 공원·녹지축 조성으로 쾌적한 생활 실현",
  },
];





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
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>평택 브레인시티 푸르지오 - 입지환경</title>
        <meta
          name="description"
          content="평택 브레인시티 핵심 입지, 평택 브레인시티 푸르지오의 입지환경을 확인하세요. KTX·SRT·1호선 연계 교통망, 삼성전자 평택캠퍼스, 코스트코·대형마트 등 생활 인프라와 쾌적한 자연환경."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://eliasart.kr/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="평택 브레인시티 푸르지오" />
        <meta property="og:title" content="평택 브레인시티 푸르지오 - 입지환경" />
        <meta
          property="og:description"
          content="평택 브레인시티 푸르지오 입지환경: KTX·SRT·1호선 교통망, 삼성 평택캠퍼스, 대형 쇼핑시설과 의료·교육 인프라, 자연환경을 누리는 프리미엄 입지."
        />
        <meta property="og:url" content="https://eliasart.kr/LocationEnvironment/intro" />
        <meta property="og:image" content="https://eliasart.kr/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="평택 브레인시티 푸르지오 - 입지환경" />
        <meta
          name="twitter:description"
          content="평택 브레인시티 푸르지오 입지환경: 사통팔달 교통망, 생활편의시설, 교육·의료·쇼핑 프리미엄, 쾌적한 자연환경과 미래가치를 확인하세요."
        />
        <meta name="twitter:image" content="https://eliasart.kr/img/og/location.jpg" />
        <meta name="twitter:url" content="https://eliasart.kr/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "평택 브레인시티 푸르지오 - 입지환경",
            "url": "https://eliasart.kr/LocationEnvironment/intro",
            "description":
              "평택 브레인시티 핵심 입지, KTX·SRT·1호선 연계 교통망, 삼성전자 평택캠퍼스, 코스트코·대형마트, 의료·교육·자연환경까지 모두 갖춘 평택 브레인시티 푸르지오 입지환경.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://eliasart.kr/img/og/location.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://eliasart.kr/" },
                { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://eliasart.kr/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        평택 브레인시티 푸르지오 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        평택 브레인시티 푸르지오의 입지 정보를 확인하세요. KTX·SRT·1호선 연계 교통망과 삼성전자 평택캠퍼스,
        코스트코·대형마트 등 생활 인프라, 우수한 교육·의료 환경과 쾌적한 자연까지 모두 누릴 수 있는
        미래가치 높은 입지입니다.
      </p>

      <div className={styles.textBox}>
        <div>브레인시티 핵심의 눈부신 가치 위에</div>
        <div>평택 브레인시티 푸르지오의 자부심으로 찾아옵니다.</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="평택 브레인시티 푸르지오입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 평택 브레인시티 푸르지오 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
