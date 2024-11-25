import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useIsMobileView } from "../hooks/useIsMobileView";

export function StartChatButton() {
  const router = useRouter();
  const store = useAppStore();
  const isMobile = useIsMobileView();

  const startNewChat = () => {
    store.dispatch(chatSlice.actions.archiveMessages());
    router.push("/");
  };

  return (
    <button onClick={startNewChat}>
      <Image
        aria-hidden
        src="/add.svg"
        alt="Plus icon"
        width={isMobile ? 22 : 28}
        height={isMobile ? 22 : 28}
      />
    </button>
  );
}
