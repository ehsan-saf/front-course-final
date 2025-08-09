interface Props {
  label: string | undefined;
}

export function ProductLabel({ label }: Props) {
  if (!label) return null;

  const trimmedLabel = label.trim().toLowerCase();

  if (!Number.isNaN(Number(label))) {
    return <div className="product-label bg-brand-1">-{label}%</div>;
  } else if (trimmedLabel === "sale") {
    return <div className="product-label bg-brand-2">{label}</div>;
  } else if (trimmedLabel === "hot") {
    return <div className="product-label bg-danger">{label}</div>;
  }

  return <div></div>;
}
