export default function ConsultaInfo({
  title,
  info,
}: {
  title: string;
  info: string;
}) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <span>{info}</span>
    </div>
  );
}
