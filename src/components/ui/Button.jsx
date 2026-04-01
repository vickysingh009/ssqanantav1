import React from 'react';

const Button = ({ variant = 'light', children, className = '', ...props }) => {
  const baseClass = variant === 'dark' ? 'btn-dark' : 'btn-light';
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
