import React, { useState } from "react";
import Modal from "../../../utils/Modal";
import { FaTimes } from "react-icons/fa";
import SignMain from "./SignMain";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Auth({ modal, setModal }) {
  const [createUser, setCreateUser] = useState(false);
  const [signReq, setSignReq] = useState("sign");
  const navigate = useNavigate();

  // const hidden = modal ? "visible opacity-100" : "invisible opacity-0";

  const googleAuth = async () => {
    try {
      const createUser = await signInWithPopup(auth, provider);
      const newUser = createUser.user;

      const ref = doc(db, "users", newUser.uid);
      const userDoc = await getDoc(ref);

      if (!userDoc.exists()) {
        await setDoc(ref, {
          userId: newUser.uid,
          username: newUser.displayName,
          email: newUser.email,
          userImg: newUser.photoURL,
          bio: "",
        });
        navigate("/");
        toast.success("가입 완료");
        setModal(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
    console.log("Auth");
  };

  return (
    <Modal modal={modal} setModal={setModal}>
      <section
        className={`z-50 fixed top-0 bottom-0 left-0 md:left-[10rem]
      overflow-auto right-0 md:right-[10rem] bg-white shadows transition-all duration-500 ${
        modal ? "visible opacity-100" : "invisible opacity-0"
      }`}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute top-8 right-8 text-2xl hover:opacity-50"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col justify-center items-center gap-[3rem]">
          {signReq === "sign" ? (
            <SignMain
              createUser={createUser}
              setCreateUser={setCreateUser}
              setSignReq={setSignReq}
              googleAuth={googleAuth}
            />
          ) : signReq === "sign-in" ? (
            <SignIn setSignReq={setSignReq} setModal={setModal} />
          ) : signReq === "sign-up" ? (
            <SignUp setSignReq={setSignReq} setModal={setModal} />
          ) : null}
          <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
            Click “Sign up” to agree to Medium’s Terms of Service and acknowledge that Medium’s
            Privacy Policy applies to you.
          </p>
        </div>
      </section>
    </Modal>
  );
}
