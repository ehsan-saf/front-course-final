"use client";

import { User } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "react-toastify";

interface Props {
  children: ReactNode;
}

interface AuthStore {
  user: User | null;
  login: (jwt: string, user: User) => void;
  logout: () => void;
}

export const useUser = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      login: (jwt: string, user: User) => {
        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify(user));
        set({ user });
        toast.success("You are logged in!");
      },
      logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        set({ user: null });
        toast.warning("You logged out!");
      },
    }),
    { name: "auth-storage" },
  ),
);

// export function AuthContextProvider({ children }: Props) {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const token = window.localStorage.getItem("token");
//     const savedUser = window.localStorage.getItem("user");

//     if (token && savedUser) {
//       try {
//         setUser(JSON.parse(savedUser));
//       } catch {
//         // Clear corrupted data
//         window.localStorage.removeItem("token");
//         window.localStorage.removeItem("user");
//       }
//     } else if (token && !savedUser) {
//       // Token exists but no user data - clear invalid token
//       window.localStorage.removeItem("token");
//     }
//   }, []);

//   const loginHandler = (jwt: string, user: User) => {
//     window.localStorage.setItem("token", jwt);
//     window.localStorage.setItem("user", JSON.stringify(user));
//     setUser(user);
//     toast.success("You are loged in !");
//   };

//   const logoutHandler = () => {
//     window.localStorage.removeItem("token");
//     window.localStorage.removeItem("user");
//     setUser(null);
//     toast.warning("You logged out !");
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login: loginHandler, logout: logoutHandler }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }
