import { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  placeholder = 'blur',
  quality = 80,
  sizes,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);

  // Generate WebP and fallback URLs
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    // For external URLs (like Unsplash), use their optimization parameters
    if (baseSrc.includes('unsplash.com')) {
      const webpSrc = `${baseSrc}&fm=webp&q=${quality}`;
      const jpegSrc = `${baseSrc}&fm=jpg&q=${quality}`;
      return {
        webp: webpSrc,
        fallback: jpegSrc
      };
    }
    
    // For local images, assume we have WebP versions
    const extension = baseSrc.split('.').pop();
    const basePath = baseSrc.replace(`.${extension}`, '');
    
    return {
      webp: `${basePath}.webp`,
      fallback: baseSrc
    };
  };

  const srcSet = generateSrcSet(src);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading !== 'lazy') {
      setCurrentSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, priority, loading]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  // Placeholder component
  const Placeholder = () => (
    <div 
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <svg 
        className="w-8 h-8 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    </div>
  );

  // Error component
  const ErrorFallback = () => (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center text-gray-500">
        <svg 
          className="w-8 h-8 mx-auto mb-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" 
          />
        </svg>
        <p className="text-xs">Image failed to load</p>
      </div>
    </div>
  );

  if (hasError) {
    return <ErrorFallback />;
  }

  if (!currentSrc) {
    return <Placeholder />;
  }

  return (
    <div ref={imgRef} className="relative">
      {/* Show placeholder while loading */}
      {!isLoaded && <Placeholder />}
      
      {/* Main image with WebP support */}
      <picture>
        {srcSet.webp && (
          <source 
            srcSet={srcSet.webp} 
            type="image/webp" 
            sizes={sizes}
          />
        )}
        <img
          src={srcSet.fallback || currentSrc}
          alt={alt}
          className={`${className} ${!isLoaded ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          sizes={sizes}
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;