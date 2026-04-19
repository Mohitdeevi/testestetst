'use client';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn('p-6 bg-white shadow-lg rounded-lg glass', className)}
    >
      {children}
    </motion.div>
  );
};

export default Card;
