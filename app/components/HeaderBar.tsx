import { ProfilePicture } from "./ProfilePicture";
import { StartChatButton } from "./StartChatButton";

export function HeaderBar() {
  return (
    <div className="md:hidden flex items-center border-b border-lightGrayBorder2 p-4 pt-0 w-[100vw] justify-between">
      <StartChatButton />
      <ProfilePicture />
    </div>
  );
}
