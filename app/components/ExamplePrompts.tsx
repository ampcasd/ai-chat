import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import { ChatRole } from "../enums/chatRole.enum";
import { LikeStatus } from "../enums/likeStatus.enum";

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
    <div className={`flex gap-2 w-full max-w-[808px]`}>
      {examples.map((example) => (
        <button
          key={example}
          className="flex-1 p-4 bg-grayBackground rounded-lg text-center text-lg border border-lightGrayBorder hover:bg-veryLightGray active:bg-lightGray transition-colors duration-200"
          onClick={() => handleExampleClick(example)}
        >
          {example}
        </button>
      ))}
    </div>
  );
}
