import { PlusInCircle } from "./icons/PlusInCircle";
import { useState } from "react";

interface Props {
  hideText?: boolean;
}

export const AttachmentButton = ({ hideText = false }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex items-center text-textGray"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PlusInCircle fill={hovered ? "#808080" : "#AEAEAE"} />
      {!hideText && (
        <div
          className="ml-3 transition-colors mt-[2px]"
          style={{ color: hovered ? "#808080" : undefined }}
        >
          Attach
        </div>
      )}
    </button>
  );
};
