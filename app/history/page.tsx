"use client";
import { chatSlice, Message } from "@/lib/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export default function History() {
  const history = useAppSelector((state) => state.chat.history);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const selectThread = (messages: Message[]) => {
    router.push("/");
    dispatch(chatSlice.actions.bringBackThread(messages));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 h-[calc(100vh-7rem)] md:h-[calc(100vh-3rem)]">
      {!history.length && (
        <span className="text-gray-500">Where history is written</span>
      )}
      {history?.map((messages: Message[]) => (
        <button
          key={messages[0].id}
          onClick={() => selectThread(messages)}
          className="flex flex-col rounded-lg truncate border border-gray-200 p-4 w-full max-w-lg hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm text-gray-500">
            {new Date(messages[0].timestamp).toLocaleDateString()}
          </span>
          <span className="text-lg mt-1">{messages[0].content}</span>
        </button>
      ))}
    </div>
  );
}
