import { PropsWithChildren } from "react";
import Image from "next/image";

interface Props {
  isSelected: boolean;
  onClick: () => void;
}

export const NavBarButton: React.FC<PropsWithChildren<Props>> = ({
  children,
  isSelected,
  onClick,
}) => {
  return (
    <div className={`navbar-button ${isSelected ? "selected" : ""}`}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};
