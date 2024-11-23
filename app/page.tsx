import Image from "next/image";
import { ChatInput } from "./components/ChatInput";

export default function Home() {
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
    </div>
  );
}
