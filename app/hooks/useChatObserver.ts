import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { ChatRole } from "../enums/chatRole.enum";
import { FetchStatus } from "../enums/fetchStatus.enum";
import { fetchAiResponse } from "../utils/api/gemini";

export const useChatObserver = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat.messages);
  const fetchStatus = useAppSelector((state) => state.chat.fetchStatus);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    const unansweredPrompt = lastMessage?.role === ChatRole.USER;

    if (unansweredPrompt && fetchStatus === FetchStatus.IDLE) {
      dispatch(chatSlice.actions.setStatus(FetchStatus.LOADING));

      const prompt =
        lastMessage?.content ?? messages[messages.length - 1]?.content;

      fetchAiResponse(prompt)
        .then((aiResponse) => {
          dispatch(
            chatSlice.actions.addMessage({
              id: crypto.randomUUID(),
              role: ChatRole.AI,
              content: aiResponse,
              timestamp: Date.now(),
            })
          );
          dispatch(chatSlice.actions.setStatus(FetchStatus.IDLE));
        })
        .catch((error) => {
          dispatch(chatSlice.actions.setStatus(FetchStatus.ERROR));
          console.error("Error fetching AI response:", error);
        });
    }
  }, [messages?.length]);
};
