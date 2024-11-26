import { ChatRole } from "@/lib/enums/chatRole.enum";
import { Message } from "@/lib/features/chat/chatSlice";
import { useAppSelector } from "@/lib/hooks";
import { FetchStatus } from "../../lib/enums/fetchStatus.enum";
import AnimatedGradientText from "./AnimatedGradientText";
import { INPUT_WIDTH } from "./ChatInput";
import { MessageComponent } from "./Message";

interface Props {
  messages: Message[];
}

export function Messages({ messages }: Props) {
  const fetchStatus = useAppSelector((state) => state.chat.fetchStatus);

  return (
    <div
      className={`flex flex-col h-full w-full overflow-y-auto items-center mt-4 mt-auto max-w-[${INPUT_WIDTH}px]`}
      ref={(el) => {
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      }}
    >
      <div className="flex flex-col w-full space-y-12 px-4 py-2 mb-6">
        {messages.slice(1).map((message: Message) => (
          <MessageComponent
            key={message.id}
            id={message.id}
            role={message.role}
            messageContent={message.content}
            likeStatus={message.liked}
            showFooter={message.role === ChatRole.AI}
          />
        ))}
        {fetchStatus.status === FetchStatus.LOADING && (
          <MessageComponent
            id={"loading"}
            role={ChatRole.AI}
            showFooter={false}
          >
            <AnimatedGradientText>{fetchStatus.message}</AnimatedGradientText>
          </MessageComponent>
        )}
      </div>
    </div>
  );
}
