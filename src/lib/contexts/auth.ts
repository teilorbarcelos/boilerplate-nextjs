import { create } from "zustand";

interface AuthState {
  loggedIn: boolean;
}

export const useAuthStore = create<AuthState>(() => ({
  loggedIn: false,
}));
