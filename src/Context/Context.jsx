import React, { memo, useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import Loading from "../utils/Loading";
import { collection, onSnapshot, query } from "firebase/firestore";

const NewsStreamContext = createContext();

function Context({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const getUsers = () => {
      const postRef = query(collection(db, "users"));
      onSnapshot(postRef, (snapshot) => {
        setAllUsers(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
        setUserLoading(false);
      });
    };
    getUsers();
  }, []);

  const contextValue = React.useMemo(
    () => ({ currentUser, setCurrentUser, allUsers }),
    [currentUser, allUsers]
  );

  return (
    <NewsStreamContext.Provider value={{ currentUser, setCurrentUser, allUsers, setUserLoading }}>
      {loading ? <Loading /> : children}
    </NewsStreamContext.Provider>
  );
}
export default memo(Context);

export const NewsStream = () => useContext(NewsStreamContext);
