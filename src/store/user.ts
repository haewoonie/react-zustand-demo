import { create } from "zustand";
import { persist } from "zustand/middleware";

type Info = Record<string, any> | null;

interface UserState {
  userInfo: Info;
  setUserInfo: (info: Info) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (info) => set(() => ({ userInfo: info })),
    }),
    {
      name: "userInfo",
    }
  )
);

export default useUserStore;
