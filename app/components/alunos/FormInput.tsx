import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";
import "./form.css";
import { Dispatch, SetStateAction } from "react";

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
  register: UseFormRegisterReturn<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  setVal?: Dispatch<SetStateAction<string>>;
}) {
  return (
    <>
      <label className={className}>
        {label}
        <input
          max="2025-10-16"
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
