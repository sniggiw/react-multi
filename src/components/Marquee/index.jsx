import styles from "./styles.module.less";

function Marquee({
    text = "这是一个跑马灯的效果",
    customStyle = {
        main: { backgroundColor: "red" },
    },
}) {
    return (
        <main className={styles["marquee-main"]} style={customStyle.main}>
            <div className={styles["marquee-content"]}>
                {text}
            </div>
        </main>
    );
}

export default Marquee;
