import { create } from "zustand";

type LoadingState = {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
};

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  showLoading: () => set(() => ({ isLoading: true })),
  hideLoading: () => set(() => ({ isLoading: false })),
}));
