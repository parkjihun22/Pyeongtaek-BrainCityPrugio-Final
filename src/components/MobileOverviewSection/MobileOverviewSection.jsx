// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>평택 브레인시티 푸르지오</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>경기도 평택시 장안동, 평택브레인시티 일반산업단지 공동 3블록</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 35층, 16개 동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 59·84·119㎡ (59A·59B·84A·84B·119A·119B)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 1,990세대</span>
        </li>
      </ul>
    ),
  },

  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            브레인시티 생활중심과 학세권을 누리는<br />
            평택 브레인시티 푸르지오 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "브레인시티 개발·산업 호재 프리미엄",
      desc:
        "삼성전자 평택캠퍼스 인접<br/>브레인시티 첨단산업단지 조성<br/>일자리와 투자, 주거 수요 확대 기대",
    },
    {
      img: slide2,
      title: "의료·건강 인프라 프리미엄",
      desc:
        "브레인시티 의료복합타운(예정)<br/>종합병원·전문의료기관 인접<br/>신뢰할 수 있는 의료 네트워크로 안심 생활",
    },
    {
      img: slide3,
      title: "광역 교통망 확충 프리미엄",
      desc:
        "KTX·SRT 지제역 더블역세권<br/>GTX-A(예정)·평택~부발선(예정) 연결<br/>경부고속도로·서해선으로 전국 어디든 빠른 연결",
    },
    {
      img: slide4,
      title: "교육·생활 인프라 프리미엄",
      desc:
        "신설 초·중학교 예정<br/>명문 학군과 학원가 형성<br/>코스트코·대형마트·백화점 등 원스톱 생활권",
    },
    {
      img: slide5,
      title: "브랜드타운·대단지 프리미엄",
      desc:
        "총 1,990세대 대단지 구성<br/>59·84·114㎡ 실속형 평면<br/>브레인시티 대표 주거 브랜드타운",
    },
    {
      img: slide6,
      title: "푸르지오 브랜드 가치",
      desc:
        "국내 NO.1 아파트 브랜드 푸르지오<br/>대우건설 시공, 2028년 입주 예정",
    },
  ];


  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BrainCity Prugio BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
