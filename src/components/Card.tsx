import { ICart } from "../utils/interfaces";

const Card = ({ title, description, image, link }: ICart) => {
  // Type casting with as
  const input = document.querySelector("input") as HTMLInputElement;

  // Type casting with <> operator

  // const inputBox = <HTMLInputElement>document.querySelector("input")
  console.log(input.value);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt="" />
      <a href={link}></a>
    </div>
  );
};

export default Card;
