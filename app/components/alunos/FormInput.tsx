import "./form.css";

export default function Input({
  label,
  type,
  placeholder,
  error,
}: {
  label: string;
  type: "text" | "number" | "date";
  placeholder: string;
  error: any;
}) {
  return (
    <>
      <label>
        {label}
        <input
          className={error ? "border-red-500" : "border-gray-200 "}
          type={type}
          placeholder={placeholder}
        />
      </label>

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </>
  );
}
