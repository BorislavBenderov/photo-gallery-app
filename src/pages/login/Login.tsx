import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-[335px] my-[50px] mx-auto">
      <div className="bg-white pt-[10px] pr-[40px] pb-[100px] pl-[40px] mb-[10px] rounded-lg border-[1px] border-[#918f8f76] border-solid">
        <h1 className="text-center mb-[30px] text-3xl font-extrabold">
          Photo Gallery
        </h1>
        <form className="flex flex-col">
          <label htmlFor="email" />
          <input
            className="mb-[10px] py-[5px] px-[10px] rounded-lg border-[#918f8f76] border-[1px] border-solid"
            type="text"
            placeholder="Email"
            id="email"
            name="email"
          />
          <label htmlFor="password" />
          <input
            className="mb-[10px] py-[5px] px-[10px] rounded-lg border-[#918f8f76] border-[1px] border-solid"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          <button
            className="bg-[#1119ffee] text-white font-semibold mt-5 rounded-lg py-[5px] px-[10px]"
            type="submit"
          >
            Log In
          </button>
          <p className="errors"></p>
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
