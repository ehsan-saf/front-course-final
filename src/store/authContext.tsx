import { User } from "@/types";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  user: User | null;
  login: (jwt: string, user: User) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
});

export const useUser = () => useContext(AuthContext);

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const savedUser = window.localStorage.getItem("user");

    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        // Clear corrupted data
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
      }
    } else if (token && !savedUser) {
      // Token exists but no user data - clear invalid token
      window.localStorage.removeItem("token");
    }
  }, []);

  const loginHandler = (jwt: string, user: User) => {
    window.localStorage.setItem("token", jwt);
    window.localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, login: loginHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
