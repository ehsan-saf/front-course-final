interface Props {
  price?: number | null;
  sale_price?: number | null;
  direction?: "vertical" | "horizontal";
}

export function Price({ price, sale_price, direction = "horizontal" }: Props) {
  const formatNumber = (num: number) => {
    return num.toFixed(2);
  };

  if (sale_price && price) {
    return (
      <div
        className={`flex ${direction === "vertical" ? "flex-col" : "flex-row-reverse"} items-center gap-1 md:flex-row-reverse`}
      >
        <div className="text-xs text-body line-through">
          ${formatNumber(price)}
        </div>
        <div className="text-sm text-brand-1 md:text-xl">
          ${formatNumber(sale_price)}
        </div>
      </div>
    );
  } else {
    return price ? (
      <div className="text-xl text-body">${formatNumber(price)}</div>
    ) : (
      <div className="text-xs text-red-500">Out of stock</div>
    );
  }
}
