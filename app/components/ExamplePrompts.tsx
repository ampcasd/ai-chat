import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import { ChatRole } from "../../lib/enums/chatRole.enum";
import { LikeStatus } from "../../lib/enums/likeStatus.enum";

const examples = [
  "What's the meaning of life?",
  "How do you define love?",
  "What's the meaning of AI?",
];

export function ExamplePrompts() {
  const store = useAppStore();

  const handleExampleClick = (prompt: string) => {
    store.dispatch(
      chatSlice.actions.addMessage({
        id: crypto.randomUUID(),
        role: ChatRole.USER,
        content: prompt,
        timestamp: Date.now(),
        liked: LikeStatus.UNRATED,
      })
    );
  };

  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 gap-2 w-full mx-auto max-w-[413px] md:max-w-[808px]`}
    >
      {examples.map((example) => (
        <button
          key={example}
          className="flex-1 p-3 md:p-4 bg-grayBackground rounded-md md:rounded-lg text-center text-sm md:text-lg border border-lightGrayBorder hover:bg-veryLightGray active:bg-lightGray transition-colors duration-200"
          onClick={() => handleExampleClick(example)}
        >
          {example}
        </button>
      ))}
    </div>
  );
}
