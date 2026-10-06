function BulletList({ items, className = "flex flex-col gap-3" }) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm text-slate-600">
          <span className="text-primary shrink-0">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default BulletList;
