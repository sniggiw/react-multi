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
