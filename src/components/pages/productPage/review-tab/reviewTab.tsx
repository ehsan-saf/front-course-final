import { RatingStars } from "@/components/shared";

interface Props {
  rating?: number | null;
}

export function ReviewTab({ rating }: Props) {
  return (
    <div>
      <RatingStars rating={rating} showNumber />
    </div>
  );
}
