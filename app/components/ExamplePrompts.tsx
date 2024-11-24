import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import { INPUT_WIDTH } from "./ChatInput";

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
        id: "example",
        role: "user",
        content: prompt,
        timestamp: Date.now(),
      })
    );
  };

  return (
    <div className={`flex gap-2 w-[${INPUT_WIDTH}px]`}>
      {examples.map((example) => (
        <button
          key={example}
          className="flex-1 p-4 bg-grayBackground rounded-lg text-center text-lg border border-lightGrayBorder"
          onClick={() => handleExampleClick(example)}
        >
          {example}
        </button>
      ))}
    </div>
  );
}
