import { create } from 'zustand';

interface State {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create<State>((set) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  },
}));
