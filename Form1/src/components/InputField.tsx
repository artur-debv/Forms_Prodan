import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({  type, placeholder }) => {
  return (
    <div>
      <label  className="sr-only">{placeholder}</label>
      <input
        type={type}
        required
        className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm "
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
