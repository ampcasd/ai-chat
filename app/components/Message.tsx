import { LikeStatus } from "@/lib/enums/likeStatus.enum";
import { PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import { ChatRole } from "../../lib/enums/chatRole.enum";
import { MessageAvatar } from "./MessageAvatar";
import { MessageFooter } from "./MessageFooter";

interface Props {
  id: string;
  role: ChatRole;
  messageContent?: string;
  likeStatus?: LikeStatus;
  showFooter: boolean;
}

export function MessageComponent({
  id,
  role,
  showFooter,
  messageContent,
  likeStatus,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div key={id} className={`flex w-fullmx-4 md:mx-24`}>
      <div className="relative right-4">
        <div className="w-[40px] h-[40px]">
          <MessageAvatar role={role} />
        </div>
      </div>
      <div className="flex flex-col space-y-6 justify-center">
        {messageContent ? (
          <ReactMarkdown className="text-black whitespace-pre-wrap [&>ul]:list-disc [&>ol]:list-decimal [&>ul]:pl-4 [&>ol]:pl-4">
            {messageContent}
          </ReactMarkdown>
        ) : (
          children
        )}

        {showFooter && (
          <MessageFooter
            messageContent={messageContent!}
            messageId={id}
            likeStatus={likeStatus!}
          />
        )}
      </div>
    </div>
  );
}
