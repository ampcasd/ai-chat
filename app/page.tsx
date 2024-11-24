"use client";
import Image from "next/image";
import { ChatInput } from "./components/ChatInput";
import { useAppSelector } from "@/lib/hooks";
import { ExamplePrompts } from "./components/ExamplePrompts";

export default function Home() {
  const messages = useAppSelector((state) => state.chat.messages);

  console.log(messages);
  return (
    <div className="flex flex-col items-center justify-center space-y-10 h-[calc(100vh-2rem)]">
      <Image
        aria-hidden
        src="/logo.svg"
        alt="Globe icon"
        width={80}
        height={80}
      />

      <ChatInput />

      <ExamplePrompts />
    </div>
  );
}
