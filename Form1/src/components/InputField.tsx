import { forwardRef } from 'react';

// Define os tipos das propriedades do InputField
type InputFieldProps = {
  type: string;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({ type, placeholder, ...rest }, ref) => (
  <input
    type={type}
    placeholder={placeholder}
    ref={ref}
    {...rest}
    className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm "
  />
));

export default InputField;
