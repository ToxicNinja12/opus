// CMS text is plain text with two conventions: a blank line starts a new
// paragraph, and **double asterisks** mark bold.

export function paragraphs(text) {
  return String(text ?? "")
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function inline(text) {
  return String(text ?? "")
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));
}
