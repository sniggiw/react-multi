// 引入 decimal.js 库
import Decimal from 'decimal.js';

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
    return new Decimal(pxValue).div(remValue) + 'rem';
}

export function getPointPosition(point) {
    // 获取元素的位置和大小信息
    let rect = point.getBoundingClientRect();

    // 计算元素的中心坐标
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    return { x: centerX, y: centerY };
}

export function drawLine(startObj, endObj) {
    // 起点坐标
    const startY = startObj.y;
    const startX = startObj.x;

    // 终点坐标
    const endY = endObj.y;
    const endX = endObj.x;

    // 用勾股定律计算出斜边长度及其夹角（即连线的旋转角度）
    const a = endX - startX;
    const b = endY - startY;
    // 计算连线长度
    const length = Math.sqrt(a * a + b * b);
    // 弧度值转换为角度值
    const c = (180 * Math.atan2(b, a)) / Math.PI;

    // 连线中心坐标
    const midX = (endX + startX) / 2;
    const midY = (endY + startY) / 2;
    const deg = c <= -90 ? 360 + c : c; // 负角转换为正角

    return {
        position: 'absolute',
        top: `${midY}px`,
        left: `${midX - length / 2}px`,
        width: `${length}px`,
        height: `1px`,
        transform: `rotate(${deg}deg)`,
        backgroundColor: '#fff'
    };
}
