"use client";
import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ICON_COLOR } from "../../lib/enums/iconColor.enum";
import { GlobeIcon } from "./icons/GlobeIcon";
import { HistoryIcon } from "./icons/HistoryIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { NavBarButton } from "./NavBarButton";
import { ProfilePicture } from "./ProfilePicture";
import { StartChatButton } from "./StartChatButton";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const store = useAppStore();

  const navBarItems = [
    {
      path: "/",
      icon: HomeIcon,
      label: "Home",
    },
    {
      path: "/history",
      icon: HistoryIcon,
      label: "History",
    },
    {
      path: "/web",
      icon: GlobeIcon,
      label: "Discover",
    },
  ];

  return (
    <div className="flex md:flex-col items-center bg-darkGrayBackground border-r-2 border-lightGrayBorder md:w-[80px] md:h-screen p-5 pt-0 md:pt-6">
      <Image
        className="hidden md:block"
        onClick={() => store.dispatch(chatSlice.actions.clearMessages())}
        aria-hidden
        src="/icons/logo.svg"
        alt="Logo"
        width={38}
        height={38}
      />

      <div className="flex md:flex-col md:space-y-10 w-full justify-between mx-4 md:mx-0 my-auto">
        {navBarItems.map((item) => (
          <NavBarButton
            key={item.path}
            onClick={() => router.push(item.path)}
            isSelected={path === item.path}
          >
            <div className="flex flex-col items-center">
              <item.icon
                fill={
                  path === item.path ? ICON_COLOR.SELECTED : ICON_COLOR.NEUTRAL
                }
              />
              <div
                className={`md:hidden text-md mt-[2px] ${
                  path === item.path ? "text-black" : "text-neutralGray"
                }`}
              >
                {item.label}
              </div>
            </div>
          </NavBarButton>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-12 absolute bottom-5 hidden md:block">
        <StartChatButton />
        <ProfilePicture />
      </div>
    </div>
  );
};
