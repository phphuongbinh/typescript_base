import { ICart } from "../utils/interfaces";

const Card = ({ title, description, image, link }: ICart) => {
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
