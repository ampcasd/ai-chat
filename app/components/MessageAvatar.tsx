import Image from "next/image";
import { ChatRole } from "../enums/chatRole.enum";
import { ProfilePicture } from "./ProfilePicture";

export function MessageAvatar({ role }: { role: ChatRole }) {
  return role === ChatRole.AI ? (
    <Image aria-hidden src="/logo.svg" alt="Logo" width={40} height={40} />
  ) : (
    <ProfilePicture size={40} />
  );
}