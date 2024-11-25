"use client";
import { chatSlice } from "@/lib/features/chat/chatSlice";
import { useAppStore } from "@/lib/hooks";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChatRole } from "../enums/chatRole.enum";
import { AttachmentButton } from "./AttachmentButton";
import { Switch } from "./Switch";

export function MobileChatInput(): JSX.Element {
  const [selectedModel, setSelectedModel] = useState("4s-mini");
  const [message, setMessage] = useState("");

  const store = useAppStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    if (message.trim() === "") {
      return;
    }

    store.dispatch(
      chatSlice.actions.addMessage({
        role: ChatRole.USER,
        content: message,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      })
    );

    if (textareaRef.current) {
      textareaRef.current.style.height = "44px";
    }
    setMessage("");
  };

  return (
    <div
      className={`flex border flex-col space-y-3 border-darkGray p-3 w-full rounded-lg mx-4 md:mx-24`}
    >
      <div className="flex justify-between items-center space-x-4">
        <AttachmentButton hideText />

        <textarea
          className="w-full md:text-lg rounded-md placeholder:text-textDarkGray focus:outline-none py-2 resize-none overflow-y-auto max-h-[128px]"
          placeholder="Ask me anything..."
          value={message}
          rows={1}
          ref={textareaRef}
          onChange={(e) => {
            e.target.style.height = "auto";
            const newHeight = Math.min(e.target.scrollHeight, 128);
            e.target.style.height = newHeight + "px";
            setMessage(e.target.value);
          }}
          onKeyUp={(e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
              submit();
            }
          }}
        />
      </div>
      <div className="flex justify-between">
        <Switch
          options={["4s-mini", "s1-preview"]}
          selectedOption={selectedModel}
          onChange={setSelectedModel}
        />

        <button onClick={submit}>
          <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border border-lightGrayBorder hover:bg-veryLightGray active:bg-darkGrayBackground transition-colors duration-200">
            <Image
              aria-hidden
              src="/arrow-right.svg"
              alt="Send icon"
              width={16}
              height={16}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
