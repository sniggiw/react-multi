import { useEffect, useState, useRef } from "react";
import { drawLine } from "@utils";

import Marquee from "@components/Marquee";
import styles from "./styles.module.less";

export default function Index() {
    const [lineState, setLineState] = useState([]);

    const getTheLineState = () => {
        for (let i = 0; i < 6; i++) {
            const res = drawLine(`star${i}`, `star${i + 1}`);
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
                            <img id="star0" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star1" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star2" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star3" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star4" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star5" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star6" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img id="star7" className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                        </div>
                        id=""
                        <div className={styles["star-text"]}>
                            <img id="text0" className={styles["text"]} src="../../assets/imgs/index/star-text_pojun.png" alt="破军" />
                            <img id="text1" className={styles["text"]} src="../../assets/imgs/index/star-text_wuqu.png" alt="武曲" />
                            <img id="text2" className={styles["text"]} src="../../assets/imgs/index/star-text_lianzhen.png" alt="廉贞" />
                            <img id="text3" className={styles["text"]} src="../../assets/imgs/index/star-text_wenqu.png" alt="文曲" />
                            <img id="text4" className={styles["text"]} src="../../assets/imgs/index/star-text_lucun.png" alt="禄存" />
                            <img id="text5" className={styles["text"]} src="../../assets/imgs/index/star-text_jumen.png" alt="巨门" />
                            <img id="text6" className={styles["text"]} src="../../assets/imgs/index/star-text_tanlang.png" alt="贪狼" />
                            <img id="text7" className={styles["text"]} src="../../assets/imgs/index/star-text_dixing.png" alt="帝星" />
                        </div>
                        <div className={styles["star-line"]}>
                            {lineState.map((item, index) => {
                                return <div id={`line${index}`} key={`line${index}`} style={{ ...item }}></div>;
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles["introduce-box"]}>
                    <img
                        className={`${styles["introduce_img"]} ${styles["introduce_img1"]}`}
                        src="../../assets/imgs/index/introduce_1.png"
                        alt="图文介绍 1"
                    />
                    <img
                        className={`${styles["introduce_img"]} ${styles["introduce_img2"]}`}
                        src="../../assets/imgs/index/introduce_2.png"
                        alt="图文介绍 2"
                    />
                    <img
                        className={`${styles["introduce_img"]} ${styles["introduce_img3"]}`}
                        src="../../assets/imgs/index/introduce_3.png"
                        alt="图文介绍 3"
                    />
                    <img
                        className={`${styles["introduce_img"]} ${styles["introduce_img4"]}`}
                        src="../../assets/imgs/index/introduce_4.png"
                        alt="图文介绍 4"
                    />
                    <img
                        className={`${styles["introduce_img"]} ${styles["introduce_img5"]}`}
                        src="../../assets/imgs/index/introduce_5.png"
                        alt="图文介绍 5"
                    />
                </div>
            </main>
        </>
    );
}
