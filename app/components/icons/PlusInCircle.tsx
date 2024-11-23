import { ICON_COLOR } from "@/app/enums/iconColor.enum";
import React from "react";

interface Props {
  fill?: string;
  size?: number;
}

export const PlusInCircle: React.FC<Props> = ({
  fill = ICON_COLOR.NEUTRAL,
  size = 25,
}) => (
  <svg
    width={size}
    height={size}
    viewBox={`0 0 45 45`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.9193 13.9078V30.2745M31.1026 22.0911H14.7359M43.3776 22.0911C43.3776 10.792 34.2184 1.63281 22.9193 1.63281C11.6201 1.63281 2.46094 10.792 2.46094 22.0911C2.46094 33.3903 11.6201 42.5495 22.9193 42.5495C34.2184 42.5495 43.3776 33.3903 43.3776 22.0911Z"
      stroke={fill}
      strokeWidth="3.06875"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
