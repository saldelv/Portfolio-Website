import { Opacity } from '@mui/icons-material';
import { containerClasses } from '@mui/material';
import React, { useState, useRef, useEffect, createRef } from 'react';

const pages = [
    "Home",
    "Menu",
    "About",
    "Contact"
];

const options = {
    radius: 200,
    maxSpeed: 1.5
  };

const defaultConfig = {
    radius: 100,
    maxSpeed: 1,
    initSpeed: 0,
    direction: 135,
    containerClass: "sphere",
    itemClass: "sphere--item"
};

const computeItemPosition = (index, textsLength, size) => {
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
        x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
        y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
        z: (size * Math.cos(phi)) / 2
    };
};

const createTextItem = (text, index, textsLength, size, itemRef) => {
    const transformOrigin = "50% 50%";
    const transform = "translate3d(-50%, -50% 0) scale(1)";
    const styles = {
        willChange: "transform, opacity, filter",
        position: "absolute",
        top: "50%",
        left: "50%",
        zIndex: index + 1,
        filter: "alpha(opacity:0)",
        opacity: 0,
        WebkitTransformOrigin: transformOrigin,
        MozTransformOrigin: transformOrigin,
        OTransformOrigin: transformOrigin,
        transformOrigin: transformOrigin,
        WebkitTransform: transform,
        MozTransform: transform,
        OTransform: transform,
        transform: transform
    };
    const itemEl = (
        <span
        ref={itemRef}
        key={index}
        className={'sphere'}
        style={styles}
        >
            {text}
        </span>
    );
    return {
        ref: itemRef,
        el: itemEl,
        ...computeItemPosition(index, textsLength, size)
    };
};

const Sphere = () => {
    const texts = pages
    const options = {
        radius: 200,
        maxSpeed: 1.5
      };
    const containerRef = useRef(null)
    const config = { ...defaultConfig, ...options};
    const { radius, maxSpeed, initSpeed, direction } = config;
    const depth = 1 * radius;
    const size = 1.6 & radius;
    const itemHooks = texts.map(() => createRef());
    const [active, setActive] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [items, setItems] = useState([]);

    const next = () => {
        if (!items) return;
        setItems((items) => {
            const a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
            const b = -(Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
            if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items;
            
            const l = Math.PI / 180;
            const sc = [
                Math.sin(a * l),
                Math.cos(a * l),
                Math.sin(b * l),
                Math.cos(b * l)
            ];
            return items.map((item) => updateItem(item, sc, depth));
        });
    };

    const updateItem = (item, sc, depth) => {
        const newItem = { ...item };
        const rx1 = item.x;
        const ry1 = item.y * sc[1] + item.z * -sc[0];
        const rz1 = item.y * sc[0] + item.z * sc[1];

        const rx2 = rx1 * sc[3] + rz1 * sc[2]
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];

        const per = (2 * depth) / (2 * depth + rz2);

        newItem.x = rx2;
        newItem.y = ry2;
        newItem.z = rz2;
        if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z)
            return item;

        newItem.scale = per.toFixed(3);
        let alpha = per * per - 0.25;
        alpha = (alpha > 1 ? 1 : alpha).toFixed(3);

        if (!newItem.ref.current) return item;
        const itemEl = newItem.ref.current;
        const left = (item.x - itemEl.offsetWidth / 2).toFixed(2);
        const top = (item.y - itemEl.offsetHeight / 2).toFixed(2);
        const transform = `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`;
        itemEl.style.WebkitTransform = transform;
        itemEl.style.MozTransform = transform;
        itemEl.style.OTransform = transform;
        itemEl.style.transform = transform;
        itemEl.style.filter = `alpha(opacity=${100 * alpha})`;
        itemEl.style.opacity = alpha;
        return newItem;
    };

    const init = () => {
        setActive(false);
        const mouseX0 = initSpeed * Math.sin(direction * (Math.PI / 180));
        const mouseY0 = -initSpeed * Math.cos(direction * (Math.PI / 180));

        setMouseX(() => mouseX0);
        setMouseY(() => mouseY0);
        window.addEventListener("mousemove", handleMouseMove);
        next();
    };

    const handleMouseMove = (ev) => {
        if (containerRef.current === null) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMouseX(() => (ev.clientX - (rect.left + rect.width / 2)) / 5);
        setMouseY(() => (ev.clientY - (rect.top + rect.height / 2)) / 5);
    };

    useEffect(() => {
        setItems(
        texts.map((text, index) =>
            createTextItem(text, index, texts.length, size, itemHooks[index])
        )
        );
        init();
    }, []);

    useEffect(() => {
        const animationFrame = requestAnimationFrame(next);
        return () => cancelAnimationFrame(animationFrame);
    }, [mouseX, mouseY, active, items, radius]);

    return (
        <div
            ref = {containerRef}
            className={config.containerClass}
            onMouseOver={() => setActive(true)}
            onMouseOut={() => setActive(false)}
            style = {{
                position: "relative",
                width: '${2 * radius}px',
                height: '${2 * radius}px'
            }}
        >
            {items.map((item) => item.el)}
        </div>
    )
}

export default Sphere