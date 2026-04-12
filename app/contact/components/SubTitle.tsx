export default function SubTitle({ subtitle }: { subtitle: string }) {
  return (
    <h2 className="section-title text-(--primary-blue) font-semibold">
      {subtitle}
    </h2>
  );
}
