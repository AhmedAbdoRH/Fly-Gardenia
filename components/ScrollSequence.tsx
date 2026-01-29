import React, { useEffect, useRef, useState } from 'react';

interface ScrollSequenceProps {
    frameCount: number;
    path: string;
    prefix: string;
    extension: string;
    className?: string;
}

export const ScrollSequence: React.FC<ScrollSequenceProps> = ({
    frameCount,
    path,
    prefix,
    extension,
    className = "",
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Support 3-digit padding (001, 002, etc.)
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `${path}/${prefix}${frameNumber}.${extension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoading(false);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;
    }, [frameCount, path, prefix, extension]);

    // Handle scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how far the container is through the viewport
            // 0 when top enters bottom, 1 when bottom leaves top
            const scrollDistance = windowHeight + rect.height;
            const currentScroll = windowHeight - rect.top;

            let rawProgress = currentScroll / scrollDistance;

            // Clamp progress between 0 and 1
            const clampedProgress = Math.max(0, Math.min(1, rawProgress));
            setProgress(clampedProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Draw frame
    useEffect(() => {
        if (isLoading || !canvasRef.current || imagesRef.current.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const frameIndex = Math.floor(progress * (frameCount - 1));
        const img = imagesRef.current[frameIndex];

        if (img) {
            // High-quality drawing with aspect ratio conservation (Object Cover style)
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.width;
            const imgHeight = img.height;

            const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
            const newWidth = imgWidth * ratio;
            const newHeight = imgHeight * ratio;
            const x = (canvasWidth - newWidth) / 2;
            const y = (canvasHeight - newHeight) / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, x, y, newWidth, newHeight);
        }
    }, [progress, isLoading, frameCount]);

    // Resize canvas to match display size
    useEffect(() => {
        const resize = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const parent = canvas.parentElement;
                if (parent) {
                    canvas.width = parent.clientWidth * window.devicePixelRatio;
                    canvas.height = parent.clientHeight * window.devicePixelRatio;
                    // Trigger redraw
                    setProgress((prev) => prev);
                }
            }
        };

        window.addEventListener('resize', resize);
        resize();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <div ref={containerRef} className={`relative w-full h-full ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full block object-cover"
                style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
            />
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/5">
                    <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};
