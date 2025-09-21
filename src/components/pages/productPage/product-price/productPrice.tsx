interface Props {
  price?: number | null;
  sale_price?: number | null;
  direction?: "vertical" | "horizontal";
}

export function ProductPrice({
  price,
  sale_price,
  direction = "horizontal",
}: Props) {
  const formatNumber = (num: number) => {
    return num.toFixed(2);
  };

  if (sale_price && price) {
    return (
      <div
        className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"} items-center gap-1 md:flex-row`}
      >
        <div className="text-[32px] text-body line-through">
          ${formatNumber(price)}
        </div>
        <div className="text-7xl text-brand-1">${formatNumber(sale_price)}</div>
      </div>
    );
  } else {
    return price ? (
      <div className="text-7xl text-brand-1">${formatNumber(price)}</div>
    ) : (
      <div className="text-2xl text-red-500">Out of stock</div>
    );
  }
}
