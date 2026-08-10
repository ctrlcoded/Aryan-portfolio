"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

function framePath(index: number) {
    return `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;
}

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const reducedRef = useRef(false);

    const [progress, setProgress] = useState(0);
    const [ready, setReady] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // object-fit: cover
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;
        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Load frames
    useEffect(() => {
        reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const sizeCanvas = () => {
            if (!canvasRef.current) return;
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        };
        sizeCanvas();

        // Reduced motion: load a single representative frame, draw it, done.
        if (reducedRef.current) {
            const still = new Image();
            still.decoding = "async";
            still.src = framePath(Math.floor(FRAME_COUNT / 2));
            still.onload = () => {
                imagesRef.current[Math.floor(FRAME_COUNT / 2)] = still;
                renderFrame(Math.floor(FRAME_COUNT / 2));
                setProgress(1);
                setReady(true);
            };
            return;
        }

        const images: HTMLImageElement[] = new Array(FRAME_COUNT);
        let loaded = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.decoding = "async";
            if (i === 0) {
                // Prioritize the poster frame.
                try {
                    (img as any).fetchPriority = "high";
                } catch {}
            }
            img.onload = () => {
                loaded++;
                setProgress(loaded / FRAME_COUNT);
                if (i === 0) renderFrame(0); // poster as soon as first frame is ready
                if (loaded === FRAME_COUNT) {
                    setReady(true);
                    renderFrame(Math.round(frameIndex.get()));
                }
            };
            img.onerror = () => {
                loaded++;
                setProgress(loaded / FRAME_COUNT);
                if (loaded === FRAME_COUNT) setReady(true);
            };
            img.src = framePath(i);
            images[i] = img;
        }
        imagesRef.current = images;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Scroll scrub + resize
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current) return;
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            renderFrame(reducedRef.current ? Math.floor(FRAME_COUNT / 2) : Math.round(frameIndex.get()));
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        let unsubscribe: (() => void) | undefined;
        if (!reducedRef.current) {
            unsubscribe = frameIndex.on("change", (latest) => renderFrame(Math.round(latest)));
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe?.();
        };
    }, [frameIndex]);

    return (
        <div ref={containerRef} className="h-[500vh] relative w-full">
            <div
                className="sticky top-0 h-screen w-full overflow-hidden bg-black"
                role="img"
                aria-label="Abstract animated sequence introducing Aryan Raghav's portfolio."
            >
                <canvas
                    ref={canvasRef}
                    className={`w-full h-full object-cover mix-blend-screen transition-opacity duration-700 ${
                        ready ? "opacity-80" : "opacity-0"
                    }`}
                />

                {/* Loader — visible until frames are decoded (no blank hero flash) */}
                {!ready && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black">
                        <div className="h-px w-40 overflow-hidden rounded-full bg-white/10">
                            <div
                                className="h-full bg-white/60 transition-[width] duration-200 ease-out"
                                style={{ width: `${Math.round(progress * 100)}%` }}
                            />
                        </div>
                        <span className="text-xs font-medium tracking-widest uppercase text-white/40">
                            Loading
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
