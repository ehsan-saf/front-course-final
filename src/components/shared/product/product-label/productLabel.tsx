interface Props {
  label: string | null;
  price: number | null;
  sale_price: number | null;
  showSaveText?: boolean;
}

export function ProductLabel({
  label,
  price,
  sale_price,
  showSaveText = false,
}: Props) {
  if (label) {
    label = label.trim().toLowerCase();
    if (label === "sale") {
      return <div className="product-label bg-brand-2">{label}</div>;
    } else if (label === "hot") {
      return <div className="product-label bg-danger">{label}</div>;
    }
  }

  if (price && sale_price) {
    const discountPercentage = (((price - sale_price) / price) * 100).toFixed(
      0,
    );
    return (
      <div
        className={`product-label ${showSaveText ? "bg-danger" : "bg-brand-1"}`}
      >
        {showSaveText ? "Save " : "- "}
        {discountPercentage}%
      </div>
    );
  }
  return null;
}
