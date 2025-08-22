import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // pastikan path sesuai

export function useAuth() {
  return useContext(AuthContext);
}
