import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../app/store";

export const ProtectedRoutes = () => {
  const { user } = useAppSelector((store) => store.user);
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
