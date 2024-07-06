import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { signup, useGoogle } from "../../services/apiAuth";
import useSignup from "./useSignup";
import useLoginWithGoogle from "./useLoginWithGoogle";

function SignupForm() {
  const { register, getValues, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  // const { data, error } = useGoogle();
  const { signupWithGoogle } = useLoginWithGoogle();

  function LoginWithGoogle() {
    signupWithGoogle();
  }
  function onSubmit(data) {
    const { fullName, email, password } = data;
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" sm:px-[2.4rem] px-[2rem]  py-[4rem] font-poppins text-sm sm:text-md lg:text-xl   grid grid-cols-[1fr]  bg-gray-900 rounded-md space-y-4"
    >
      <div className="grid grid-cols-[1.5fr_3fr_1.2fr] items-center gap-[2.4rem] px-[1.2rem] ">
        <label className="font-bold text-xl" htmlFor="fullName">
          Full Name
        </label>
        <input
          className="border-2 outline-none border-gray-300 bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
        {errors && (
          <span className="text-[1.2rem] text-red-700">
            {errors?.fullName?.message}
          </span>
        )}
      </div>
      <div className="grid grid-cols-[1.5fr_3fr_1.2fr] items-center gap-[2.4rem] px-[1.2rem]">
        <label className="font-bold text-xl" htmlFor="email">
          Email Address
        </label>
        <input
          className="border-2 outline-none border-gray-300 bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
        {errors && (
          <span className="text-[1.2rem] text-red-700">
            {errors?.email?.message}
          </span>
        )}
      </div>
      <div className="grid grid-cols-[1.5fr_3fr_1.2fr] items-center gap-[2.4rem] px-[1.2rem]">
        <label className="font-bold text-xl" htmlFor="password">
          Password (min 7 chars)
        </label>
        <input
          className="border-2 outline-none border-gray-300 bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 7,
              message: "Password must be at least 7 characters",
            },
          })}
        />
        {errors && (
          <span className="text-[1.2rem] text-red-700">
            {errors?.password?.message}
          </span>
        )}
      </div>
      <div className="grid grid-cols-[1.5fr_3fr_1.2fr] items-center gap-[2.4rem] px-[1.2rem]">
        <label className="font-bold text-xl" htmlFor="passwordConfirm">
          Repeat Password
        </label>
        <input
          className="border-2 outline-none border-gray-300 bg-gray-100  px-[0.8rem] py-[1.2rem] shadow-sm rounded-sm "
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password need to match",
          })}
        />
        {errors && (
          <span className="text-[1rem] text-red-700">
            {errors?.passwordConfirm?.message}
          </span>
        )}
      </div>
      <div>
        <button
          className="bg-gray-500 mt-12 text-white text-sm font-semibold active:text-gray-600 visited:text-gray-600 hover:bg-gray-400 hover:text-[#fff] w-auto sm:w-full  py-[1.2rem] px-[2.4rem] rounded-md"
          type="submit"
          disabled={isLoading}
        >
          Sign Up
        </button>
        <button
          className="bg-gray-500 mt-12 text-white text-sm font-semibold active:text-gray-600 visited:text-gray-600 flex justify-center items-center gap-x-4 hover:bg-gray-400 hover:text-[#fff] w-auto sm:w-full  py-[1rem] px-[2.4rem] rounded-md"
          type="submit"
          onClick={() => LoginWithGoogle()}
        >
          <img
            src="https://authjs.dev/img/providers/google.svg"
            className="w-4"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Login with google</span>
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
