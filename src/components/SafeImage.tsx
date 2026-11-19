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
            ? 'bg-gradient-to-br from-[#132656] to-[#0B193C] text-white'
            : 'bg-gradient-to-br from-sky-50 to-blue-100 text-slate-900'
        } ${className}`}
      >
        <ShieldCheck
          className={`h-12 w-12 ${darkFallback ? 'text-yellow-400' : 'text-[#0066FF]'}`}
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
