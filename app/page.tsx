"use client";
import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { ChatInput } from "./components/ChatInput";
import { CompactChatInput } from "./components/CompactChatInput";
import { ExamplePrompts } from "./components/ExamplePrompts";
import { Messages } from "./components/Messages";
import { ThreadHeader } from "./components/ThreadHeader";
import { useChatObserver } from "./hooks/useChatObserver";

export default function Home() {
  const messages = useAppSelector((state) => state.chat.messages);

  useChatObserver();

  console.log(messages);
  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-[calc(100vh-3rem)]">
      {messages.length === 0 && (
        <Image aria-hidden src="/logo.svg" alt="Logo" width={80} height={80} />
      )}

      {!!messages.length && <ThreadHeader title={messages[0].content} />}

      {!!messages.length && <Messages messages={messages} />}

      {messages.length === 0 ? <ChatInput /> : <CompactChatInput />}

      {messages.length === 0 && <ExamplePrompts />}
    </div>
  );
}
