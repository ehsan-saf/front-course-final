interface Props {
  totalNumber?: number | null;
}

export function AvailabilityLabel({ totalNumber }: Props) {
  const availableLabel = (
    <div className="w-fit rounded-sm bg-[#DEF9EC] px-2.5 py-1 text-sm text-brand-1">
      In Stock
    </div>
  );
  const notAvailableLabel = (
    <div className="w-fit rounded-sm bg-red-100 px-2.5 py-1 text-sm text-danger">
      Out of Stock
    </div>
  );

  if (totalNumber && totalNumber >= 1) {
    return availableLabel;
  } else {
    return notAvailableLabel;
  }
}
