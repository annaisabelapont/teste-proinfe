import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import "./form.css";

export default function Select({
  label,
  placeholder,
  error,
  options,
  register,
  className,
}: {
  label: string;
  placeholder: string;
  options: { name: string; value: any }[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  error: FieldError | undefined;
  register: UseFormRegisterReturn<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  className?: string;
}) {
  return (
    <>
      <label>
        {label}
        <select
          {...register}
          defaultValue={""}
          className={`${className} ${
            error ? "border-red-500" : "border-gray-200"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        {error && <span className="text-red-500 text-sm">{error.message}</span>}
      </label>
    </>
  );
}
