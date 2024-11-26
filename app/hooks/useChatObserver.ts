import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import { ChatRole } from "../../lib/enums/chatRole.enum";
import { FetchStatus } from "../../lib/enums/fetchStatus.enum";
import { fetchAiResponse } from "../../lib/utils/api/gemini";

export const useChatObserver = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector((state) => state.chat.messages);
  const fetchStatus = useAppSelector((state) => state.chat.fetchStatus);

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    const hasUnansweredPrompt = lastMessage?.role === ChatRole.USER;

    if (hasUnansweredPrompt && fetchStatus.status === FetchStatus.IDLE) {
      const prompt = lastMessage.content;
      startFetchingSequence(prompt);
    }
  }, [messages?.length]);

  async function startFetchingSequence(prompt: string) {
    // start fetching
    dispatch(
      chatSlice.actions.setStatus({
        status: FetchStatus.LOADING,
        message: `Searching for ${prompt}...`,
      })
    );

    // Imitate the second fetch
    await new Promise((resolve) => setTimeout(resolve, 1500));

    dispatch(
      chatSlice.actions.setStatus({
        status: FetchStatus.LOADING,
        message: `Browsing the web...`,
      })
    );

    try {
      const aiResponse = await fetchAiResponse(prompt);

      // config for chunking the response
      // to simulate incremental updates
      const words = aiResponse.split(" ");
      const typingSpeed = 50;
      const totalWords = words.length;
      const chunkSize = 10;
      const id = crypto.randomUUID();

      // add the first chunk of the response
      dispatch(
        chatSlice.actions.addMessage({
          id,
          role: ChatRole.AI,
          content: words.slice(0, chunkSize).join(" "),
          timestamp: Date.now(),
        })
      );

      // simulate typing / incremental udpates
      for (let i = 0; i < totalWords; i += chunkSize) {
        const chunk = words.slice(0, i + chunkSize).join(" ");
        setTimeout(() => {
          dispatch(
            chatSlice.actions.updateMessage({
              id,
              role: ChatRole.AI,
              content: chunk,
              timestamp: Date.now(),
            })
          );
        }, (i / chunkSize) * typingSpeed);
      }

      // finish fetching
      dispatch(chatSlice.actions.setStatus({ status: FetchStatus.IDLE }));
    } catch (error: unknown) {
      dispatch(
        chatSlice.actions.setStatus({
          status: FetchStatus.ERROR,
          message:
            error instanceof Error ? error.message : "Something went wrong",
        })
      );
      console.error("Error fetching AI response:", error);
    }
  }
};
