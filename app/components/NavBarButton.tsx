"use client";
import { PropsWithChildren } from "react";
import { useIsMobileView } from "../hooks/useIsMobileView";

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

export const NavBarButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  isSelected,
  onClick,
}) => {
  const isMobileView = useIsMobileView();

  return (
    <div
      className={`${isMobileView ? "mobile-navbar-button" : "navbar-button"} ${
        isSelected ? "selected" : ""
      }`}
    >
      <button className="w-full h-full" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
