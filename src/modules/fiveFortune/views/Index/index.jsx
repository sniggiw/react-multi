import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { pxToRem, drawLine } from "@utils";

import Marquee from "@components/Marquee";
import styles from "./styles.module.less";

const STAR_OBJ = {
    pojun: "破军",
    wuqu: "武曲",
    lianzhen: "廉贞",
    wenqu: "文曲",
    lucun: "禄存",
    jumen: "巨门",
    tanlang: "贪狼",
    dixing: "帝星",
};

const YEAR_WISH = {
    2024: "幸运天降",
    2025: "喜结良缘",
    2026: "财富暴涨",
    2027: "职位高升",
    2028: "平安顺遂",
};

export default function Index() {
    const animaTimeLine = gsap.timeline();

    const navigate = useNavigate();

    const [lineState, setLineState] = useState([]);
    const lineContainerRef = useRef(null);

    const getTheLineState = () => {
        for (let i = 0; i < 6; i++) {
            const res = drawLine(`star${i + 1}`, `star${i + 2}`);
            setLineState((prev) => [...prev, res]);
        }
    };

    const handleStart = () => {
        navigate("/info");
    };

    const handleNewLine = () => {
        animaTimeLine
            .add(handleCommonAnimation(1, 280, 21))
            .add(handleCommonAnimation(2, 198, 55), "+=.3")
            .add(handleCommonAnimation(3, 248, 130), "+=.3")
            .add(handleCommonAnimation(4, 190, 187), "+=.3")
            .add(handleCommonAnimation(5, 264, 224), "+=.3")
            .add(handleCommonAnimation(6, 221, 321), "+=.3")
            .add(handleCommonAnimation(7, 157, 251), "+=.3")
            .add(handleCommonAnimation(8, 145, 170), "+=.3")
            .repeat(-1) // 无限循环
            .repeatDelay(2); // 每次循环之间的延迟时间
    };

    const handleCommonAnimation = (num, top, left) => {
        let commonAniLine = gsap.timeline();
        if (num < 7) {
            commonAniLine
                .fromTo(`#star${num}`, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.3, duration: 0.5 })
                .to(`#text${num}`, { opacity: 1, scale: 1, top: pxToRem(top), left: pxToRem(left), duration: 0.2 }, "+=.3")
                .to(`#star${num}`, { scale: 1, duration: 0.3 }, "+=.3")
                .fromTo(`#line${num}`, { opacity: 0, scale: 0 }, { opacity: 0.8, scale: 1, duration: 0.7 }, "+=.2");

            return commonAniLine;
        } else {
            commonAniLine
                .fromTo(`#star${num}`, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1.3, duration: 0.5 })
                .to(`#star${num}`, { scale: 1, duration: 0.5 }, "+=.3")
                .to(`#text${num}`, { opacity: 1, scale: 1, top: pxToRem(top), left: pxToRem(left), duration: 0.3 }, "+=.2");

            return commonAniLine;
        }
    };

    useEffect(() => {
        getTheLineState();
        return () => {
            setLineState([]);
            animaTimeLine.revert();
        };
    }, []);

    // 确保 line 存在后才开始执行动画
    useEffect(() => {
        const lines = lineContainerRef.current.querySelectorAll(`.${styles["line"]}`);
        if (lines.length > 0) {
            handleNewLine();
        }

        return () => {
            animaTimeLine.revert();
        };
    }, [lineState]);

    return (
        <>
            <Marquee
                customStyle={{ main: { backgroundColor: "#1c3283" } }}
                text={
                    " 内容纯属娱乐，暂不向未满18岁青少年提供服务。本网页数据安全由阿里云提供，严格按照法律法规和用户协议对您的信息进行全方位的保护，请放心使用！ "
                }
            />
            <main className={styles["main-container"]}>
                <div className={styles["banner-box"]}>
                    <img className={styles["banner_topText"]} src="../../assets/imgs/index/banner_topText.png" alt="传统术数 指点迷津" />
                    <img className={styles["banner_title"]} src="../../assets/imgs/index/banner_title.png" alt="精批 五年大运" />

                    <div className={styles["anime-box"]}>
                        <div className={styles["star-box"]}>
                            {Array.from({ length: 8 }).map((_, index) => {
                                return (
                                    <img
                                        id={`star${index + 1}`}
                                        key={`star${index + 1}`}
                                        className={styles["star"]}
                                        src="../../assets/imgs/index/star.png"
                                        alt="star"
                                    />
                                );
                            })}
                        </div>
                        <div className={styles["star-text"]}>
                            {Object.entries(STAR_OBJ).map((item, index) => {
                                return (
                                    <img
                                        id={`text${index + 1}`}
                                        key={`text${index + 1}`}
                                        className={styles["text"]}
                                        src={`../../assets/imgs/index/star-text_${item[0]}.png`}
                                        alt={item[1]}
                                    />
                                );
                            })}
                        </div>
                        <div className={styles["star-line"]} ref={lineContainerRef}>
                            {lineState.map((item, index) => {
                                return <div id={`line${index + 1}`} key={`line${index + 1}`} className={styles["line"]} style={{ ...item }}></div>;
                            })}
                        </div>

                        <div className={styles["year-wish"]}>
                            {Object.entries(YEAR_WISH).map((item, index) => {
                                return (
                                    <img
                                        id={`year-wish_item${index + 1}`}
                                        key={item[0]}
                                        className={`${styles["year-wish_item"]} ${styles[`year-wish_item${index + 1}`]}`}
                                        src={`../../assets/imgs/index/index_${item[0]}text.png`}
                                        alt={item[1]}
                                    />
                                );
                            })}
                        </div>

                        <div className={styles["rule-box"]}>
                            <div className={styles["rule-top"]}>
                                {Array.from({ length: 26 }).map((_, index) => {
                                    return <div key={`rule-line${index + 1}`} className={styles["rule-line"]}></div>;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={styles["start-btn"]} onClick={handleStart}></div>
                </div>

                <div className={styles["introduce-box"]}>
                    {Array.from({ length: 5 }).map((_, index) => {
                        return (
                            <img
                                key={`introduce_img${index + 1}`}
                                className={`${styles["introduce_img"]} ${styles[`introduce_img${index + 1}`]}`}
                                src={`../../assets/imgs/index/introduce_${index + 1}.png`}
                                alt={`图文介绍 ${index + 1}`}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}
