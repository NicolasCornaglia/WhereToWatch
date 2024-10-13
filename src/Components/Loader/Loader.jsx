import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = ({ size = 24, color = 'currentColor', className = '' }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Loader2 size={size} color={color} className="animate-spin" />
    </div>
  );
};

export default Loader;

