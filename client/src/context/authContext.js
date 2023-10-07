import { createContext, useEffect, useState } from "react";
import demoAvatar from "../assets/demoAvatar.png";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // to be done later
    setCurrentUser({
      id: 1,
      name: "Aaditya Jujagar",
      profilePic: demoAvatar,
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
