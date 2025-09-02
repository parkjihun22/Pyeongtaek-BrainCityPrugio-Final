import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택 브레인시티 푸르지오-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '푸르지오' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '평택 브레인시티 푸르지오') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    하루의 무게를 내려놓는 순간, 새로운 가치로 이어지는 프리미엄.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 중심, 미래 주거의 새로운 기준.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    NO.1 브랜드, 평택 브레인시티 푸르지오와 함께합니다.
                </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티의 새로운 출발, 평택 브레인시티 푸르지오.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    KTX·SRT·GTX(예정) 교통망과 삼성 평택캠퍼스, 산업단지 인접으로 더 가까워지는 생활권.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    푸르지오의 브랜드 명성과 함께 높여가는 일상의 가치.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 푸르지오
                </div>
            </>
        );
    } else if (text === '입지환경'|| text === '프리미엄') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    교통·교육·생활 모두 가까운, 평택 브레인시티의 완성형 인프라.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    신설 초·중학교 예정, 코스트코·대형마트·의료복합타운까지 누리는 평택 브레인시티 푸르지오의 가치.
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    주거의 품격과 가치를 높이는 특화 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    수납과 동선을 고려한 최적의 공간 설계.
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 푸르지오, 브레인시티 핵심 입지에서 찾아옵니다.
                </div>
            </>
        );
    }
}

