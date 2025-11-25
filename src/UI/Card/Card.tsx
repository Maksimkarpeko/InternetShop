import type { FC } from "react";

interface Props {
  title: string;
  image: string;
  rating: number;
  description: string;
  price: number;
}
export const Card: FC<Props> = ({
  description,
  image,
  price,
  rating,
  title,
}) => {
  return (
    <div>
      <img src={`${image}`} alt="imageProduct" />
      <div>{title}</div>
      <div>{description}</div>
      <div>Price:{price}</div>
      <div>Rating:{rating}</div>
    </div>
  );
};
