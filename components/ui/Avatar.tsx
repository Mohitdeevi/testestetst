'use client';
import { cn } from '../../lib/utils';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className }) => {
  return (
    <img src={src} alt={alt} className={cn('w-10 h-10 rounded-full', className)} />
  );
};

export default Avatar;
