'use client';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn('px-4 py-2 bg-primary text-white rounded-lg', className)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
