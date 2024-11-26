"use client";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { ChatInput } from "./components/ChatInput";
import { CompactChatInput } from "./components/CompactChatInput";
import { ExamplePrompts } from "./components/ExamplePrompts";
import { HeaderBar } from "./components/HeaderBar";
import { Messages } from "./components/Messages";
import { MobileChatInput } from "./components/MobileChatInput";
import { ThreadHeader } from "./components/ThreadHeader";
import { useChatObserver } from "./hooks/useChatObserver";
import { useIsMobileView } from "./hooks/useIsMobileView";

export default function Home() {
  const messages = useAppSelector((state) => state.chat.messages);
  const isMobile = useIsMobileView();

  useChatObserver();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-7rem)] md:h-[calc(100vh-3rem)]">
      {messages.length > 0 ? (
        <>
          <HeaderBar />
          <ThreadHeader title={messages[0].content} />
          <Messages messages={messages} />
          {isMobile ? <MobileChatInput /> : <CompactChatInput />}
        </>
      ) : (
        <div className="space-y-10">
          <Image
            className="mx-auto"
            aria-hidden
            src="/icons/logo.svg"
            alt="Logo"
            width={80}
            height={80}
          />
          <ChatInput />
          <ExamplePrompts />
        </div>
      )}
    </div>
  );
}
