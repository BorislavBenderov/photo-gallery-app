import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/store";
import { login } from "../../features/user/userSlice";
import { auth } from "../../firebaseConfig";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Please fill all fields");
      return;
    }
    
    setLoading(true);
    setPersistence(auth, browserLocalPersistence).then(() => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
          navigate("/");
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    });
  };

  return (
    <div className="w-[335px] my-[50px] mx-auto text-center">
      <div className="bg-white pt-[10px] pr-[40px] pb-[100px] pl-[40px] mb-[10px] rounded-lg border-[1px] border-[#918f8f76] border-solid">
        <h1 className="text-center mb-[30px] text-3xl font-extrabold">
          Photo Gallery
        </h1>
        <form className="flex flex-col" onSubmit={onLogin}>
          <label htmlFor="email" />
          <input
            className="mb-[10px] py-[5px] px-[10px] rounded-lg border-[#918f8f76] border-[1px] border-solid"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" />
          <input
            className="mb-[10px] py-[5px] px-[10px] rounded-lg border-[#918f8f76] border-[1px] border-solid"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-[#1119ffee] text-white font-semibold mt-5 rounded-lg py-[5px] px-[10px]"
            type="submit"
          >
            {loading ? "Loading..." : "Log In"}
          </button>
          <p className="text-[red] mt-5">{error}</p>
        </form>
      </div>
      <div className="flex justify-evenly items-center bg-white text-center rounded-lg border-[#918f8f76] border-[1px] py-[5px] px-[0]">
        <p>Don't have an account?</p>
        <Link className="text-[#1119ffee] font-semibold" to="/register">
          Sign up
        </Link>
      </div>
    </div>
  );
};
