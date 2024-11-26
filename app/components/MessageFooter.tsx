import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import Image from "next/image";
import { useState } from "react";
import { ICON_COLOR } from "../../lib/enums/iconColor.enum";
import { LikeStatus } from "../../lib/enums/likeStatus.enum";
import { LikeIcon } from "./icons/LikeIcon";

interface Props {
  messageContent: string;
  messageId: string;
  likeStatus: LikeStatus;
}

export function MessageFooter({
  messageContent,
  messageId,
  likeStatus,
}: Props): JSX.Element {
  const store = useAppStore();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(messageContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="flex justify-between">
      <button className="flex" onClick={copyToClipboard}>
        <Image
          aria-hidden
          src="/icons/copy.svg"
          alt="Logo"
          width={20}
          height={20}
        />
        <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
      </button>
      <div className="flex space-x-2">
        <button
          onClick={() =>
            store.dispatch(chatSlice.actions.likeMessage(messageId))
          }
        >
          <LikeIcon
            fill={
              likeStatus === LikeStatus.LIKED
                ? ICON_COLOR.SELECTED
                : ICON_COLOR.NEUTRAL
            }
          />
        </button>
        <button
          onClick={() =>
            store.dispatch(chatSlice.actions.dislikeMessage(messageId))
          }
        >
          <LikeIcon
            fill={
              likeStatus === LikeStatus.DISLIKED
                ? ICON_COLOR.SELECTED
                : ICON_COLOR.NEUTRAL
            }
            rotate="rotate-180"
          />
        </button>
      </div>
    </div>
  );
}
