import { useAppSelector } from "../../app/store";
import { Logout } from "../logout/Logout";
import { UploadPhoto } from "../upload-photo/UploadPhoto";

export const Nav = () => {
  const { user } = useAppSelector((store) => store.user);
  return (
    <nav>
      <ul className="flex justify-end gap-4">
        <li>Hello, {user?.email}</li>
        <li>
          <UploadPhoto />
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  );
};
