'use client';
import { useState } from 'react';
import { cn } from '../../lib/utils';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('relative', className)}>
      <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-secondary text-white rounded-lg">
        Select
      </button>
      {isOpen && (
        <ul className="absolute bg-white shadow-lg rounded-lg mt-2">
          {options.map((option) => (
            <li key={option} onClick={() => { onSelect(option); setIsOpen(false); }} className="px-4 py-2 hover:bg-gray-200">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
