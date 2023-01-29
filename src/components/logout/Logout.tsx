import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return <button onClick={onLogout}>Logout</button>;
};
