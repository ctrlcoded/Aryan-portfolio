"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    as?: "div" | "section" | "li" | "article";
}

/**
 * Apple-style scroll reveal: content fades and slides up gently as it
 * enters the viewport. Respects prefers-reduced-motion.
 */
export default function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const Tag = as as any;

    return (
        <Tag
            ref={ref as any}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`}
        >
            {children}
        </Tag>
    );
}
