'use client';
import { cn } from '../../lib/utils';

interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn('px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary', className)}
    />
  );
};

export default Input;
