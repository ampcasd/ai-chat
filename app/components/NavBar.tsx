"use client";
import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ICON_COLOR } from "../enums/iconColor.enum";
import { GlobeIcon } from "./icons/GlobeIcon";
import { HistoryIcon } from "./icons/HistoryIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { NavBarButton } from "./NavBarButton";
import { ProfilePicture } from "./ProfilePicture";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const store = useAppStore();

  const navBarItems = [
    {
      path: "/",
      icon: HomeIcon,
    },
    {
      path: "/history",
      icon: HistoryIcon,
    },
    {
      path: "/web",
      icon: GlobeIcon,
    },
  ];

  const startNewChat = () => {
    store.dispatch(chatSlice.actions.archiveMessages());
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center bg-darkGrayBackground border-r-2 border-lightGrayBorder h-screen p-5 pt-6">
      <Image
        onClick={() => store.dispatch(chatSlice.actions.clearMessages())}
        aria-hidden
        src="/logo.svg"
        alt="Logo"
        width={38}
        height={38}
      />

      <div className="flex flex-col space-y-10 my-auto">
        {navBarItems.map((item) => (
          <NavBarButton
            key={item.path}
            onClick={() => router.push(item.path)}
            isSelected={path === item.path}
          >
            <item.icon
              fill={
                path === item.path ? ICON_COLOR.SELECTED : ICON_COLOR.NEUTRAL
              }
            />
          </NavBarButton>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-12 absolute bottom-5">
        <button onClick={startNewChat}>
          <Image
            aria-hidden
            src="/add.svg"
            alt="Plus icon"
            width={28}
            height={28}
          />
        </button>
        <ProfilePicture />
      </div>
    </div>
  );
};
