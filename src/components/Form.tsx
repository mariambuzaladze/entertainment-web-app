import Logo from "/assets/logo.svg";
import Line from "./Line";
import { Link } from "react-router-dom";

export default function form() {
  return (
    <main className="flex flex-col justiy-center items-center pt-12 p-6 h-screen gap-14">
      <img src={Logo} alt="icon logo" />
      <div className="flex flex-col rounded-md bg-[#161D2F] p-6 gap-10 md:p-8 md:w-[50%] lg:w-[35%]">
        <h1 className="text-2xl text-white tracking-tight">Login</h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="bg-[#161D2F]"
          />

          <Line />

          <input
            type="password"
            placeholder="Password"
            className="bg-[#161D2F]"
          />

          <Line />
        </div>

        <button className="text-white p-3 w-full rounded-md bg-[#FC4747]">
          Login to your account
        </button>

        <p className="text-white md:text-center">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-[#FC4747]">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}