// Grid of "01, 02, …" items. `className` sets the column layout.
function NumberedList({ items, className }) {
  return (
    <ol className={className}>
      {items.map((item, i) => (
        <li key={i}>
          <p className="mb-3 text-slate-300">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="mb-1 font-semibold">{item.title}</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default NumberedList;
