import { Routes, Route } from "react-router-dom";
import { Photos, Login, Register, PhotoPage } from "./pages";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./features/user/userSlice";
import { auth } from "./firebaseConfig";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return () => {
      unsub();
    };
  }, [dispatch]);

  return (
    <div className="max-w-7xl px-[20px] mx-auto">
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/photos/:photoId" element={<PhotoPage />} />
      </Routes>
    </div>
  );
}

export default App;
