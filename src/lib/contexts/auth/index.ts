import { create } from "zustand";

export interface UserInfoProps {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  loggedIn: boolean;
  userInfo: UserInfoProps | undefined;
}

export const useAuthStore = create<AuthState>(() => ({
  loggedIn: false,
  userInfo: undefined
}));
