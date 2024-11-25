import { ICON_COLOR } from "@/app/enums/iconColor.enum";
import React from "react";

interface HomeIconProps {
  fill?: string;
  size?: number;
}

export const HomeIcon: React.FC<HomeIconProps> = ({
  fill = ICON_COLOR.NEUTRAL,
  size,
}) => (
  <svg
    className={!size ? "h-5 md:h-6" : ""}
    width={size}
    height={size}
    viewBox={`0 0 50 50`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.1354 43.5302V27.1635C31.1354 26.621 30.9198 26.1006 30.5361 25.7169C30.1525 25.3332 29.6321 25.1177 29.0895 25.1177H20.9062C20.3636 25.1177 19.8432 25.3332 19.4596 25.7169C19.0759 26.1006 18.8604 26.621 18.8604 27.1635V43.5302"
      stroke={fill}
      strokeWidth="5.11458"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.58496 21.025C6.58482 20.4298 6.71453 19.8417 6.96505 19.3018C7.21557 18.7619 7.58087 18.2831 8.03546 17.8989L22.3563 5.62598C23.0948 5.00181 24.0305 4.65936 24.9975 4.65936C25.9644 4.65936 26.9001 5.00181 27.6386 5.62598L41.9595 17.8989C42.4141 18.2831 42.7793 18.7619 43.0299 19.3018C43.2804 19.8417 43.4101 20.4298 43.41 21.025V39.4375C43.41 40.5226 42.9789 41.5634 42.2115 42.3307C41.4442 43.098 40.4035 43.5291 39.3183 43.5291H30.7258V26.7533H19.2691V43.5291H10.6766C9.59145 43.5291 8.55072 43.098 7.78338 42.3307C7.01605 41.5634 6.58496 40.5226 6.58496 39.4375V21.025Z"
      stroke={fill}
      strokeWidth="5.11458"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
