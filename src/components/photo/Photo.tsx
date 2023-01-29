import { Link } from "react-router-dom";

type PhotoType = {
  id: string;
  ownerId: string;
  image: string;
};

type Props = {
  photo: PhotoType;
};

export const Photo = ({ photo }: Props) => {
  return (
      <Link to={photo.image} key={photo.id}>
        <img src={photo.image} className=" w-[190px] h-[200px]" alt="image" />
      </Link>
  );
};
