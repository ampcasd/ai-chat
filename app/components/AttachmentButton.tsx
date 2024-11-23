import { PlusInCircle } from "./icons/PlusInCircle";
import { useState } from "react";

export const AttachmentButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className="flex items-center text-textGray"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PlusInCircle fill={hovered ? "#808080" : "#AEAEAE"} />
      <div
        className="ml-3 transition-colors mt-[2px]"
        style={{ color: hovered ? "#808080" : undefined }}
      >
        Attach
      </div>
    </button>
  );
};
