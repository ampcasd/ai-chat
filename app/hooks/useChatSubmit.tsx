import { ChatRole } from "@/lib/enums/chatRole.enum";
import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import { RefObject } from "react";

export function useChatSubmit(
  setMessage: (message: string) => void,
  textareaRef?: RefObject<HTMLTextAreaElement>
) {
  const store = useAppStore();

  return (message: string) => {
    console.log("message", message);
    if (message.trim() === "") {
      return;
    }

    store.dispatch(
      chatSlice.actions.addMessage({
        role: ChatRole.USER,
        content: message,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      })
    );

    if (textareaRef?.current) {
      textareaRef.current.style.height = "44px";
    }

    setMessage("");
  };
}
