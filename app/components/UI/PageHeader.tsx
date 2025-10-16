export default function PageHeader({
  children,
  title,
  description,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b-2 border-gray-200 pb-7">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="opacity-60 mt-1">{description}</span>
      </div>

      {children}
    </div>
  );
}
