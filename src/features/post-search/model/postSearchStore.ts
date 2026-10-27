import { create } from "zustand";

type PostSearchStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export const usePostSearchStore = create<PostSearchStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
