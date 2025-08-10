interface Props {
  price: number;
  sale_price?: number;
}

export function ProductPrice({ price, sale_price }: Props) {
  const formatNumber = (num: number) => {
    return num.toFixed(2);
  };

  if (sale_price) {
    return (
      <div className="flex items-center gap-1">
        <div className="text-sm text-brand-1 md:text-xl">
          ${formatNumber(sale_price)}
        </div>
        <div className="text-xs text-body line-through">
          ${formatNumber(price)}
        </div>
      </div>
    );
  } else {
    return <div className="text-xs text-body">${formatNumber(price)}</div>;
  }
}
