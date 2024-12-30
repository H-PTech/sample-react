import { Navigate, Routes, Route } from "react-router-dom";
import Anony from "./components/anony/Anony";
import AnonyHeader from "./components/anony/AnonyHeader";
import Member from "./components/Member/Member";
import MemberHeader from "./components/Member/MemberHeader";
import { NewsStream } from "./Context/Context";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Member/Profile/Profile";

function App() {
  const { currentUser } = NewsStream();

  return (
    <>
      {currentUser ? <MemberHeader /> : <AnonyHeader />}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Member />} />}
        {!currentUser && <Route path="/anony" element={<Anony />} />}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<Navigate to={!currentUser ? "/anony" : "/"} />} />
      </Routes>
    </>
  );
}

export default App;
