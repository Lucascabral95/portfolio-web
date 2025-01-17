import { create } from "zustand";

const useStore = create((set) => ({
    darkMode: localStorage.getItem("darkModeLucas") === "true",
    setDarkMode: (darkMode) => set({ darkMode: darkMode }),  
}));

export default useStore;
