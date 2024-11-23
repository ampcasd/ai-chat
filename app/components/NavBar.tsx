"use client";
import React from "react";
import Image from "next/image";
import { HomeIcon } from "./icons/HomeIcon";
import { HistoryIcon } from "./icons/HistoryIcon";
import { GlobeIcon } from "./icons/GlobeIcon";
import { usePathname, useRouter } from "next/navigation";
import { ICON_COLOR } from "../enums/iconColor.enum";
import { NavBarButton } from "./NavBarButton";
import { ProfilePicture } from "./ProfilePicture";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

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

  return (
    <div className="flex flex-col items-center bg-darkGrayBackground border-r-2 border-lightGrayBorder h-screen p-5 pt-6">
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Globe icon"
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
        <Image
          aria-hidden
          src="/add.svg"
          alt="Globe icon"
          width={28}
          height={28}
        />
        <ProfilePicture />
      </div>
    </div>
  );
};
