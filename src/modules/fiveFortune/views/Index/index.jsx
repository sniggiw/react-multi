import Marquee from "@components/Marquee";
import styles from "./styles.module.less";

export default function Index() {
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
                    <img
                        className={styles["banner_topText"]}
                        src="../../assets/imgs/index/banner_topText.png"
                        alt="传统术数 指点迷津"
                    />
                    <img
                        className={styles["banner_title"]}
                        src="../../assets/imgs/index/banner_title.png"
                        alt="精批 五年大运"
                    />

                    <div className={styles["anime-box"]}>
                        <div className={styles["star-box"]}>
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                            <img className={styles["star"]} src="../../assets/imgs/index/star.png" alt="star" />
                        </div>

                        <div className={styles["star-text"]}>
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_pojun.png" alt="破军" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_wuqu.png" alt="文曲" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_lianzhen.png" alt="廉贞" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_wenqu.png" alt="文曲" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_lucun.png" alt="禄存" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_jumen.png" alt="巨门" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_tanlang.png" alt="贪狼" />
                            <img className={styles["text"]} src="../../assets/imgs/index/star-text_dixing.png" alt="帝星" />
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
