import { Star} from "lucide-react";
import type { FC } from "react";

interface Props {
  rating: number;
}

export const StarRating: FC<Props> = ({ rating }) => {
  const stars = Array(5).fill(0);
  return (
    <div className="flex pt-2 gap-2 opacity-65">
      {stars.map((_, index) => (
        <div key={index}>
          {index <= rating ? (
            <Star key={index} fill={"rgb(16 185 129)"} color="rgb(16 185 129)" size={18} />
          ) : !(index <= rating) && rating >= index - 0.5 ? (
            <div className="mr-4">
              <Star
                key={index}
                fill="none"
                color="rgb(16 185 129)"
                size={18}
                className="absolute"
              />
              <Star
                size={18}
                fill="rgb(16 185 129)"
                color="rgb(16 185 129)"
                className="absolute"
                style={{
                  clipPath: "inset(0 50% 0 0)", 
                }}
              />
            </div>
          ) : (
            <Star key={index} fill="none" color="rgb(16 185 129)" size={18} />
          )}
        </div>
      ))}
    </div>
  );
};
