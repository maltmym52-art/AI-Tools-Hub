import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProgressiveImageProps {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string; // e.g., "aspect-video", "aspect-square"
  onClick?: () => void;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-video',
  onClick
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Generate a fallback tiny base64 placeholder (a neutral dark/gray SVG block) if none is provided
  const fallbackPlaceholder = placeholderSrc || 
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2318181b'/></svg>";

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setError(false);

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      setError(true);
    };
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}
      onClick={onClick}
    >
      {/* 1. Shimmer/Skeleton Effect when not loaded */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent -translate-x-full animate-shimmer absolute inset-0" />
        </div>
      )}

      {/* 2. Low-res blurred placeholder */}
      <AnimatePresence initial={false}>
        {!isLoaded && !error && (
          <motion.img
            src={fallbackPlaceholder}
            alt={alt}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 w-full h-full object-cover blur-md scale-105 pointer-events-none ${className}`}
            referrerPolicy="no-referrer"
          />
        )}
      </AnimatePresence>

      {/* 3. The actual high-res image */}
      {!error ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      ) : (
        // Error state fallback: a beautiful placeholder
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-600 text-xs font-mono">
          [Image Failed to Load]
        </div>
      )}
    </div>
  );
};
