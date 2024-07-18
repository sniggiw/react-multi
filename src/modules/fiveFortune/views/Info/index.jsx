/**
 * 1. 获取两个点的位置
 * 2. 计算两个点之间的距离
 * 3. 计算两个点之间的角度
 * 4. 根据角度和距离，计算两个点之间的连线
 */
import { useEffect, useRef, useState } from "react"
import "./styles.less"

function getPointPosition(point) {
    // 获取元素的位置和大小信息
    let rect = point.getBoundingClientRect();

    // 计算元素的中心坐标
    let centerX = rect.left + rect.width / 2;
    let centerY = rect.top + rect.height / 2;

    return { x: centerX, y: centerY };
}

function drawLine(startObj, endObj) {
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
        backgroundColor: 'red'
    };
}


export default function Info() {
    const pointARef = useRef(null)
    const pointBRef = useRef(null)

    const [obj, setObj] = useState({})
    useEffect(() => {
        const pointA = getPointPosition(pointARef.current)
        const pointB = getPointPosition(pointBRef.current)

        setObj(drawLine(pointA, pointB))
    }, [])

    return (
        <main className="info-container">
            <div ref={pointARef} className="point point-a"></div>
            <div ref={pointBRef} className="point point-b"></div>
            <div style={obj}></div>
        </main>
    )
}
