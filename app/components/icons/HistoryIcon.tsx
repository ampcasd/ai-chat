import { ICON_COLOR } from "@/app/enums/iconColor.enum";
import React from "react";

interface HistoryIconProps {
  fill?: string;
  size?: number;
}

export const HistoryIcon: React.FC<HistoryIconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6768 8.68281C10.6768 7.59763 11.1078 6.5569 11.8752 5.78957C12.6425 5.02223 13.6832 4.59114 14.7684 4.59114H35.2268C36.3119 4.59114 37.3527 5.02223 38.12 5.78957C38.8873 6.5569 39.3184 7.59763 39.3184 8.68281V12.4881C39.3182 14.1721 38.9023 15.83 38.1075 17.3146C37.3127 18.7993 36.1637 20.0648 34.7624 20.9987L28.6862 25.0495L34.7624 29.1002C36.1637 30.0342 37.3127 31.2997 38.1075 32.7843C38.9023 34.269 39.3182 35.9269 39.3184 37.6109V41.4161C39.3184 42.5013 38.8873 43.5421 38.12 44.3094C37.3527 45.0767 36.3119 45.5078 35.2268 45.5078H14.7684C13.6832 45.5078 12.6425 45.0767 11.8752 44.3094C11.1078 43.5421 10.6768 42.5013 10.6768 41.4161V37.6109C10.6767 35.9271 11.0924 34.2693 11.8868 32.7846C12.6812 31.3 13.8299 30.0344 15.2308 29.1002L21.311 25.0495L15.2349 20.9987C13.8332 20.065 12.6838 18.7996 11.8886 17.315C11.0934 15.8303 10.6772 14.1723 10.6768 12.4881V8.68281ZM24.9976 22.5904L32.4935 17.5924C33.3339 17.0322 34.0231 16.2732 34.4999 15.3828C34.9767 14.4924 35.2263 13.4981 35.2268 12.4881V8.68281H14.7684V12.4881C14.7688 13.4981 15.0185 14.4924 15.4953 15.3828C15.9721 16.2732 16.6612 17.0322 17.5017 17.5924L24.9976 22.5904ZM24.9976 27.5086L17.5017 32.5065C16.6612 33.0668 15.9721 33.8257 15.4953 34.7162C15.0185 35.6066 14.7688 36.6009 14.7684 37.6109V41.4161H35.2268V37.6109C35.2263 36.6009 34.9767 35.6066 34.4999 34.7162C34.0231 33.8257 33.3339 33.0668 32.4935 32.5065L24.9976 27.5086Z"
      fill={fill}
    />
  </svg>
);
