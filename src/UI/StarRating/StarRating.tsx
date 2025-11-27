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
            <Star key={index} fill={"#f7de50"} color="#8b8181" size={30} />
          ) : !(index <= rating) && rating >= index - 0.5 ? (
            <div className="mr-7">
              <Star
                key={index}
                fill="none"
                color="#8b8181"
                size={30}
                className="absolute"
              />
              <Star
                size={30}
                fill="#f7de50"
                color="#8b8181"
                className="absolute"
                style={{
                  clipPath: "inset(0 50% 0 0)", 
                }}
              />
            </div>
          ) : (
            <Star key={index} fill="none" color="#8b8181" size={30} />
          )}
        </div>
      ))}
    </div>
  );
};
