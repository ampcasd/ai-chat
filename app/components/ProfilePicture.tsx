import Image from "next/image";
import { useProfile } from "../hooks/useProfile";

interface Props {
  size?: number;
}

export const ProfilePicture = ({ size = 32 }: Props) => {
  const profile = useProfile();

  return (
    <div
      className="rounded-full border-2 border-black flex items-center justify-center font-bold text-black"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {profile.image ? (
        <Image
          src={profile.image}
          alt={profile.name}
          width={size}
          height={size}
        />
      ) : (
        profile.name[0]
      )}
    </div>
  );
};
