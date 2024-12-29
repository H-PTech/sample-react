import React, { memo, useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Loading from "../utils/Loading";

const NewsStreamContext = createContext();

function Context({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const contextValue = React.useMemo(() => ({ currentUser, setCurrentUser }), [currentUser]);

  return (
    <NewsStreamContext.Provider value={{ currentUser, setCurrentUser }}>
      {loading ? <Loading /> : children}
    </NewsStreamContext.Provider>
  );
}
export default memo(Context);

export const NewsStream = () => useContext(NewsStreamContext);
