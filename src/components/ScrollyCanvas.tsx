"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

function currentFrame(index: number) {
    // Use public/sequence/ path as it will be served from root in Next.js
    return `/sequence/frame_${index.toString().padStart(3, "0")}_delay-0.066s.png`;
}

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress within the 500vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const [images, setImages] = useState<HTMLImageElement[]>([]);
    // Map 0-1 scroll progress to 0-119 frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    // Trigger initial render when all images load
                    renderFrame(0);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const renderFrame = (index: number) => {
        if (images.length === 0 || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Canvas object-fit: cover logic
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

    useEffect(() => {
        // Re-render when framer-motion's frame index changes
        const unsubscribe = frameIndex.on("change", (latest) => {
            renderFrame(Math.round(latest));
        });

        const handleResize = () => {
            if (canvasRef.current) {
                // Set actual pixel dimensions to match CSS dimensions
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(Math.round(frameIndex.get()));
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial sizing

        return () => {
            unsubscribe();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div ref={containerRef} className="h-[500vh] relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover opacity-80 mix-blend-screen"
                />
            </div>
        </div>
    );
}
