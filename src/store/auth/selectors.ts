import type { RootState } from "../store";

export const selectLoginAddress = (state: RootState) =>
  localStorage.getItem("loginAddress") || null;
