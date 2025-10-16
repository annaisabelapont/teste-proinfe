import {
  FieldError,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";
import "./form.css";

export default function Input({
  label,
  type,
  placeholder,
  error,
  className,
  register,
}: {
  label: string;
  type: "text" | "number" | "date";
  placeholder: string;
  error:
    | (Merge<FieldError, (FieldError | undefined)[]> | undefined)
    | (FieldError | undefined);
  className?: string;
  register: UseFormRegisterReturn<string>; // eslint-disable-line @typescript-eslint/no-explicit-any
}) {
  return (
    <>
      <label className={className}>
        {label}
        <input
          {...register}
          className={error ? "border-red-500" : "border-gray-200 "}
          type={type}
          placeholder={placeholder}
        />
        {error && (
          <span className="text-red-500 text-sm font-normal mt-1">
            {error.message}
          </span>
        )}
      </label>
    </>
  );
}
