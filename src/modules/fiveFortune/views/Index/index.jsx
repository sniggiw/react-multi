import { useEffect, useState, useRef } from "react";
import { drawLine } from "@utils";

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

export default function Index() {
    const [lineState, setLineState] = useState([]);

    const getTheLineState = () => {
        for (let i = 0; i < 6; i++) {
            const res = drawLine(`star${i + 1}`, `star${i + 2}`);
            setLineState((prev) => [...prev, res]);
        }
    };

    useEffect(() => {
        getTheLineState();

        return () => {
            setLineState([]);
        };
    }, []);

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
                        <div className={styles["star-line"]}>
                            {lineState.map((item, index) => {
                                return <div id={`line${index + 1}`} key={`line${index + 1}`} style={{ ...item }}></div>;
                            })}
                        </div>
                    </div>
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
