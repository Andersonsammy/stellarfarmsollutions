import { Camera } from 'lucide-react';
import { Reveal } from './Reveal';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface PremiumImageProps {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  contain?: boolean;
  delay?: number;
}

export function PremiumImage({ 
  src, 
  alt = "Gallery Image", 
  className = "", 
  imageClassName = "",
  contain = false,
  delay = 0 
}: PremiumImageProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <Reveal delay={delay} className={`relative overflow-hidden rounded-[2rem] bg-mist/50 border border-gray-100/50 shadow-sm transition-all duration-[800ms] ease-out hover:shadow-2xl group flex items-center justify-center ${className}`}>
      {/* Render the tracking ref unconditionally to prevent 'Target ref is defined but not hydrated' from useScroll */}
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Invisible spacer to maintain aspect ratio/height constraints if driven by an image */}
      {src && !className.includes('h-[') && !className.includes('aspect-') && (
         <img src={src} className="w-full h-auto opacity-0 pointer-events-none" alt="" />
      )}
      
      {src ? (
        <motion.div style={{ scale, y }} className="w-full h-full absolute inset-0">
          <motion.img 
            src={src} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full h-full ${contain ? 'object-contain p-4' : 'object-cover'} ${imageClassName}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-grove/40 bg-linen p-8 text-center absolute inset-0 transition-all duration-700 group-hover:bg-ivory">
          <Camera className="w-10 h-10 mb-4 opacity-50 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110" strokeWidth={1} />
          <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-80">Reserved Space</span>
          <span className="text-sm font-serif mt-2 opacity-60">Future Story Image</span>
        </div>
      )}
      <div className="absolute inset-0 border border-black/5 rounded-[2rem] pointer-events-none z-10" />
    </Reveal>
  );
}
