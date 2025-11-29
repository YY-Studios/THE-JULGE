import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  suffix?: React.ReactNode;
}

const Input = ({
  label,
  error,
  suffix,
  className,
  id,
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <div className="block">
      {label && (
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div
        className={clsx(
          'flex items-center bg-white border rounded-lg px-4 h-14',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
      >
        <input
          type={type}
          id={id}
          placeholder="Enter text here"
          className="w-full outline-none"
          {...props}
        />
        {suffix && <span className="text-black ml-2">{suffix}</span>}
      </div>
      {error && <p className="text-primary text-xs">{error}</p>}
    </div>
  );
};

export default Input;
