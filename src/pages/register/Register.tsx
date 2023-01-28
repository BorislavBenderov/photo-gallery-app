import { useState } from "react";
import { Link } from "react-router-dom";
import {
  setPersistence,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const navigate = useNavigate();

  const onRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "" || repeatPassword === "") {
      alert("Please fill all fields");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    setPersistence(auth, browserLocalPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    });
  };

  return (
    <div className="w-[335px] my-[50px] mx-auto">
      <div className="bg-white pt-[10px] pr-[40px] pb-[100px] pl-[40px] mb-[10px] rounded-lg border-[1px] border-[#918f8f76] border-solid">
        <h1 className="text-center mb-[30px] text-3xl font-extrabold">
          Photo Gallery
        </h1>
        <form className="flex flex-col" onSubmit={onRegister}>
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
          <input
            className="mb-[10px] py-[5px] px-[10px] rounded-lg border-[#918f8f76] border-[1px] border-solid"
            type="password"
            placeholder="Repeat Password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <button
            className="bg-[#1119ffee] text-white font-semibold mt-5 rounded-lg py-[5px] px-[10px]"
            type="submit"
          >
            Register
          </button>
          <p className="errors"></p>
        </form>
      </div>
      <div className="flex justify-evenly items-center bg-white text-center rounded-lg border-[#918f8f76] border-[1px] py-[5px] px-[0]">
        <p>Have an account?</p>
        <Link className="text-[#1119ffee] font-semibold" to="/login">
          Log in
        </Link>
      </div>
    </div>
  );
};
