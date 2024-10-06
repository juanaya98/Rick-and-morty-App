import React from 'react';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      className="p-2 border border-gray-300 rounded"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;