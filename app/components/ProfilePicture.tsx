import Image from "next/image";
import { useRouter } from "next/navigation";
import { useProfile } from "../hooks/useProfile";

interface Props {
  size?: number;
}

export const ProfilePicture = ({ size = 32 }: Props) => {
  const profile = useProfile();
  const router = useRouter();

  return (
    <div
      className="rounded-full border cursor-pointer md:border-2 border-black flex items-center justify-center font-bold text-black"
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={() => router.push("/profile")}
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
