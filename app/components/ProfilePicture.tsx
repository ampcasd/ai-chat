import { useProfile } from "../hooks/useProfile";
import Image from "next/image";

export const ProfilePicture = () => {
  const profile = useProfile();

  return (
    <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-bold">
      {profile.image ? (
        <Image src={profile.image} alt={profile.name} width={32} height={32} />
      ) : (
        profile.name[0]
      )}
    </div>
  );
};
