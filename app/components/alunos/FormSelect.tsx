import "./form.css";

export default function Select({
  label,
  placeholder,
  error,
  options,
}: {
  label: string;
  placeholder: string;
  error: any;
  options: { name: string; value: any }[];
}) {
  return (
    <>
      <label>
        {label}
        <select defaultValue={''} className={error ? "border-red-500" : "border-gray-200 "}>
          <option value="" disabled selected>
            {placeholder}
          </option>

          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </label>

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </>
  );
}
