"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

const TOTAL_FRAMES_IN_FOLDER = 75; // Total extracted frames
const MAX_FRAME = 74; // 75 original frames (0 to 74)

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas({
  children,
}: {
  children?: (props: { scrollYProgress: any }) => React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const { scrollYProgress: rawScrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollYProgress = useSpring(rawScrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle Resize setup for Canvas
  useEffect(() => {
    const updateSize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", updateSize);
    updateSize(); // init

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    // We only need to load up to MAX_FRAME (0 to 55)
    for (let i = 0; i <= MAX_FRAME; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / (MAX_FRAME + 1)) * 100));
          if (loadedCount === (MAX_FRAME + 1)) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === (MAX_FRAME + 1)) setImagesLoaded(true);
        };
        images.push(img);
    }
    
    imagesRef.current = images;
  }, []);

  const drawFrame = useCallback((index: number) => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Safety clamp
    const safeIndex = Math.max(0, Math.min(MAX_FRAME, index));
    const img = imagesRef.current[safeIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;

    // Reset transform to identity before clear, then re-apply scale
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);

    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;
    if (imgRatio > canvasRatio) {
      drawHeight = canvasHeight;
      drawWidth = img.width * (canvasHeight / img.height);
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = canvasWidth;
      drawHeight = img.height * (canvasWidth / img.width);
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }
    
    ctx.drawImage(img, Math.floor(offsetX), Math.floor(offsetY), Math.ceil(drawWidth), Math.ceil(drawHeight));
  }, [imagesLoaded]);

  // Framer Motion scroll tracker fallback
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    drawFrame(Math.round(latest * MAX_FRAME));
  });


  // Initial Draw & draw on resize
  useEffect(() => {
    if (imagesLoaded && dimensions.width > 0) {
      setTimeout(() => drawFrame(0), 50);
    }
  }, [imagesLoaded, dimensions, drawFrame]);

  return (
    <div ref={containerRef} className="relative w-full z-0" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block object-cover opacity-70 pointer-events-none"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/30 to-[#121212]/90 pointer-events-none" />
        
        {!imagesLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121212] z-[100] text-white font-mono text-sm tracking-widest">
            <div className="w-48 h-[1px] bg-white/20 mb-4 overflow-hidden relative">
              <div 
                className="absolute inset-y-0 left-0 bg-white transition-all duration-300" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <span>LOADING SEQUENCE... {progress}%</span>
          </div>
        )}
        
        {children && children({ scrollYProgress })}
      </div>
    </div>
  );
}
