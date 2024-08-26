// 引入 decimal.js 库
import Decimal from "decimal.js";

// 获取当前屏幕的宽度
export function getScreenWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

// 将像素值转换为 rem 值
export function pxToRem(pxValue) {
    // 获取屏幕宽度
    const screenWidth = getScreenWidth();
    // 计算 1rem 的值
    const remValue = new Decimal(screenWidth).div(10);
    // 返回转换后的 rem 值
    return new Decimal(pxValue).div(remValue) + "rem";
}

export function getPointPosition(point) {
    // 获取元素的位置和大小信息
    let rect = point.getBoundingClientRect();

    // 计算元素的中心坐标
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    return { x: centerX, y: centerY };
}

export function drawLine(id1, id2) {
    // 获取两个点的元素
    const element1 = document.getElementById(`${id1}`);
    const element2 = document.getElementById(`${id2}`);

    // 检查元素是否存在
    if (!element1 || !element2) {
        throw new Error("元素未找到");
    }

    // 获取元素的位置
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    // 获取两个点的坐标
    const x1 = rect1.left + rect1.width / 2;
    const y1 = rect1.top + rect1.height / 2;
    const x2 = rect2.left + rect2.width / 2;
    const y2 = rect2.top + rect2.height / 2;

    // 计算两点之间的距离取绝对值）
    const distance = Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

    // 计算两点之间的角度
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI); // 将弧度转换为角度

    return {
        position: "absolute",
        left: pxToRem(x1),
        top: pxToRem(y1 - rect1.height / 2),
        width: pxToRem(distance),
        height: pxToRem(1),
        transform: `rotate(${angle}deg)`,
        transformOrigin: "left center",
        backgroundColor: "#fff",
    };
}
