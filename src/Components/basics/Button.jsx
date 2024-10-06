import React from 'react';

function Button({ label, onClick, className }) {
  return (
    <button className={`p-2 bg-blue-500 text-white rounded ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;