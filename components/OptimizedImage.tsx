
import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  className?: string;
}

/**
 * Utility to append optimization parameters to Unsplash/Picsum/Cloudinary URLs
 */
const getOptimizedUrl = (url: string, width: number, quality: number) => {
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&fit=crop&q=${quality}&w=${width}`;
  }
  if (url.includes('picsum.photos')) {
    // Picsum format: https://picsum.photos/id/10/800/600
    // We can replace dimensions
    const parts = url.split('/');
    if (parts.length >= 3) {
      parts[parts.length - 2] = width.toString();
      parts[parts.length - 1] = Math.round(width * 0.75).toString(); // Keep 4:3 ratio
    }
    return parts.join('/');
  }
  return url;
};

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  width = 800, 
  height, 
  quality = 80, 
  className, 
  alt = "Roam Electric Mobility", 
  ...props 
}) => {
  const optimizedSrc = getOptimizedUrl(src, width, quality);

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      className={`${className} transition-opacity duration-500`}
      onLoad={(e) => (e.currentTarget.style.opacity = '1')}
      style={{ opacity: 0 }}
      {...props}
    />
  );
};

export default OptimizedImage;
