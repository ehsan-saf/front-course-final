import { Star } from "lucide-react";

interface Props {
  rating: number;
}

export function RatingStars({ rating }: Props) {
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

  return <div className="flex">{stars}</div>;
}
