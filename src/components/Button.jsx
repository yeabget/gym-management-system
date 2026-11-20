import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', onClick, type = 'button', className = '' }) {
  const baseStyle = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;

  return (
    <button type={type} className={`${baseStyle} ${variantClass} ${sizeClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}