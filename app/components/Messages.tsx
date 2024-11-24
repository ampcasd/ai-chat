import { Message } from "@/lib/features/chat/chatSlice";
import ReactMarkdown from "react-markdown";
import { ChatRole } from "../enums/chatRole.enum";
import { INPUT_WIDTH } from "./ChatInput";
import { MessageAvatar } from "./MessageAvatar";
import { MessageFooter } from "./MessageFooter";

interface Props {
  messages: Message[];
}

export function Messages({ messages }: Props) {
  return (
    <div
      className={`flex flex-col h-full overflow-y-auto items-center mt-auto max-w-[${INPUT_WIDTH}px]`}
      ref={(el) => {
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      }}
    >
      <div className="flex-1" />
      <div className="flex flex-col space-y-12 px-4 py-2">
        {messages.slice(1).map((message: Message) => (
          <div key={message.id} className={`flex mx-24`}>
            <div className="relative right-4">
              <div className="w-[40px] h-[40px]">
                <MessageAvatar role={message.role} />
              </div>
            </div>
            <div className="flex flex-col space-y-6 justify-center">
              <ReactMarkdown className="text-black whitespace-pre-wrap [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-4 [&>ol]:pl-4">
                {message.content}
              </ReactMarkdown>

              {message.role === ChatRole.AI && (
                <MessageFooter message={message} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
