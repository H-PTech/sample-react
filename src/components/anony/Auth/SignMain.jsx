import React from "react";
import { FaTelegram, FaGoogle, FaMailBulk } from "react-icons/fa";

export default function SignMain({ createUser, setCreateUser, setSignReq, googleAuth }) {
  return (
    <>
      <h2 className="text-2xl pt-[5rem]">{createUser ? "Join" : "Welcome Back"}</h2>
      <div className="flex flex-col gap-2 w-fit mx-auto">
        <SignButton
          click={() => googleAuth()}
          icon={<FaGoogle className="text-xl text-green-600" />}
          text={`${createUser ? "Sign Up" : "Sign In"} with Google`}
        />
        <SignButton
          icon={<FaTelegram className="text-xl text-blue-600" />}
          text={`${createUser ? "Sign Up" : "Sign In"} with Telegram`}
        />
        <SignButton
          click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
          icon={<FaMailBulk className="text-xl" />}
          text={`${createUser ? "Sign Up" : "Sign In"} with email`}
        />
      </div>
      <p>
        {createUser ? "Already have an account" : "No Account"}
        <button
          onClick={() => setCreateUser(!createUser)}
          className="text-green-600 hover:text-green-700 font-bold ml-1"
        >
          {createUser ? "Sign In" : "Create one"}
        </button>
      </p>
    </>
  );
}

//Button Component
function SignButton({ icon, text, click }) {
  return (
    <button
      onClick={click}
      className="flex items-center gap-10 sm:w-[20rem] border border-black
    px-3 py-2 rounded-full"
    >
      {icon} {text}
    </button>
  );
}
