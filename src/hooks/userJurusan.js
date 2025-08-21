import { useContext } from "react";
import { JurusanContext } from "../context/JurusanContext"; // pastikan path sesuai

export function useJurusan() {
  return useContext(JurusanContext);
}