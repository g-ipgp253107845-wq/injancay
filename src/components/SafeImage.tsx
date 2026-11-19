import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  darkFallback?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Ilustrasi CyberSmart Kids',
  darkFallback = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-3 p-8 text-center ${
          darkFallback
            ? 'bg-gradient-to-br from-[#121A3A] to-[#060916] text-slate-100'
            : 'bg-gradient-to-br from-[#162044] to-[#0B1026] text-slate-100'
        } ${className}`}
      >
        <ShieldCheck
          className="h-12 w-12 text-[#FACC15]"
          aria-hidden="true"
        />
        <p className="font-display text-base font-semibold">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
