import { Star } from "lucide-react";

interface Props {
  rating: number;
  showNumber?: boolean;
}

export function RatingStars({ rating, showNumber = false }: Props) {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const fillPercentage = Math.min(Math.max(rating - i, 0), 1) * 100;

    return (
      <div key={i} className="relative inline-block">
        <Star className="h-3 w-3 text-gray-300" />
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <Star className="h-3 w-3 fill-current text-yellow-400" />
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex gap-[3px]">{stars}</div>
      {showNumber && (
        <span className="font-lato text-xs text-body">
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
}
