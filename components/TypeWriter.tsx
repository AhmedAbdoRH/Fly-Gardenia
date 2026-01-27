import React, { useState, useEffect, useRef } from 'react';

interface TypeWriterProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
    text,
    speed = 30,
    delay = 0,
    className = '',
    onComplete
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef<HTMLParagraphElement>(null);
    const intervalRef = useRef<any>(null);
    const timeoutRef = useRef<any>(null);

    // Observer to start animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasStarted) {
                        setHasStarted(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    // Reset when text changes (e.g. language toggle)
    useEffect(() => {
        setDisplayedText('');
        setHasStarted(false);
    }, [text]);

    // Handle typing logic
    useEffect(() => {
        if (!hasStarted) return;

        // Clear any existing timers
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            let currentIndex = 0;

            intervalRef.current = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayedText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    if (onComplete) onComplete();
                }
            }, speed);
        }, delay);

        // Cleanup function - CRITICAL to avoid conflicts
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [hasStarted, text, speed, delay, onComplete]);

    return (
        <p ref={elementRef} className={className} style={{ minHeight: '3em' }}>
            {displayedText}
            {hasStarted && displayedText.length < text.length && (
                <span className="typing-cursor">|</span>
            )}
            <style>{`
        .typing-cursor {
          animation: blink 0.7s infinite;
          color: #aad546;
          font-weight: bold;
          margin-left: 2px;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
        </p>
    );
};

export default TypeWriter;
