'use client';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={cn('px-2 py-1 bg-accent text-white rounded-full text-sm', className)}>
      {children}
    </span>
  );
};

export default Badge;
