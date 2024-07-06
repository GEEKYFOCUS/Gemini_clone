import { useState } from "react";
import useLogin from "./useLogin";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!password || !email) return;
    login(
      {
        email,
        password,
      },
      {
        onSettled: () => {
          setPassword("");
          setEmail("");
        },
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex  flex-col max-w-6xl xl:w-[90%] md:w-[80%] sm:w-[70%] w-[60%]  justify-center px-[1rem] py-[2rem] sm:px-[2.4rem] sm:py-[4rem] font-poppins  bg-gray-200 rounded-md border-2"
    >
      <div className="flex gap-[.7rem] flex-col py-[1.2rem]">
        <label
          className="sm:font-bold font-extrabold  text-sm sm:text-xl"
          htmlFor="email"
        >
          Email address
        </label>
        <input
          className="border-2 w-[100%]  border-gray-300   bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="email"
          id="email"
          disabled=""
          value={email}
          //This makes this form better for password manager
          autoComplete="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex gap-[.7rem] flex-col py-[1.2rem]">
        <label
          className="sm:font-bold font-extrabold  text-sm sm:text-xl"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="border-2 w-[100%]   border-gray-300 bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="password"
          id="password"
          disabled=""
          value={password}
          //This makes this form better for password manager
          autoComplete="current-password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-gray-500 mt-12  text-white text-sm font-semibold active:text-gray-600 visited:text-gray-600 hover:bg-gray-400 hover:text-[#fff]  sm:w-full px-[1.2rem] py-[.5rem]  sm:py-[1.2rem] sm:px-[2.4rem] rounded-md"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Loading" : "Login"}
        </button>
      </div>
      <div className="flex justify-end gap-[1rem] mt-[1rem]">
        <p className="font-poppins text-sm sm:text-md md:text-lg ">
          Don't have an account yet ?
        </p>
        <Link
          to="/signup"
          className="font-poppins text-sm sm:text-md md:text-lg hover:text-blue-700 hover:border-b-slate-600 text-blue-500 border-b border border-solid border-b-slate-400"
        >
          Signup Now
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
