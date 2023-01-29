import { Logout } from "../logout/Logout";
import { UploadPhoto } from "../upload-photo/UploadPhoto";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-4">
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
