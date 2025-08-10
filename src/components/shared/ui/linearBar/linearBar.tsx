interface Props {
  current: number;
  total: number;
}

export function LinearBar({ current, total }: Props) {
  return (
    <div className="flex rounded-xs bg-border">
      <div
        className="flex rounded-[inherit] bg-brand-1 pt-1"
        style={{
          flexBasis: `${(current / total) * 100}%`,
        }}
      ></div>
    </div>
  );
}
