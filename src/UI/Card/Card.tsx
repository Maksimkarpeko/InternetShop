// import { useCounter, useDecrease, useIncrease } from "pages/HomePage/store/counter/counter.store";
import { useState, type FC } from "react";
import { Button } from "UI/Button/Button";
import { Counter } from "UI/Counter/Counter";
interface Props {
  title: string;
  image: string;
  rating: number;
  price: number;
  onAdd: (count:number) => void;
}
export const Card: FC<Props> = ({ image, price, title, onAdd}) => {
  const [counter, setCounter] = useState<number>(0);
  const onIncrease = () => {
    setCounter(counter + 1)
  };
  const onDecrease = () => {
    setCounter(count => count > 0 ? count - 1 : count);
  }
  return (
    <div className="border flex rounded-2xl p-5 shadow-lg">
      <img src={`${image}`} alt="imageProduct" width={"50%"} />
      <div>
        <div className="text-xl font-bold">{title}</div>
        <div className="mt-3">${price}</div>
        <div className="my-5">
          <Button
            type="button"
            classname="px-6 bg-second-color text-white font-bold hover:scale-[1.05] duration-300 uppercase shadow-md hover:shadow-lg "
            onClick={() => {
              onAdd(counter)
              setCounter(0);
            }}
          >
            Add to bucket
          </Button>
        </div>
        <Counter counter={counter} onDecrease={onDecrease} onIncrease={onIncrease} />
      </div>
    </div>
  );
};
