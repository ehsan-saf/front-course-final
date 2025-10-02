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
        <div className="text-xl text-body line-through lg:text-[32px]">
          ${formatNumber(price)}
        </div>
        <div className="text-3xl text-brand-1 lg:text-7xl">
          ${formatNumber(sale_price)}
        </div>
      </div>
    );
  } else {
    return price ? (
      <div className="text-3xl text-brand-1 lg:text-7xl">
        ${formatNumber(price)}
      </div>
    ) : (
      <div className="text-2xl text-red-500">Out of stock</div>
    );
  }
}
