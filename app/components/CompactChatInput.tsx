"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { nunitoSans } from "../fonts";
import { useChatSubmit } from "../hooks/useChatSubmit";
import { AttachmentButton } from "./AttachmentButton";
import { INPUT_WIDTH } from "./ChatInput";
import { Switch } from "./Switch";

export function CompactChatInput(): JSX.Element {
  const [selectedModel, setSelectedModel] = useState("4s-mini");
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submit = useChatSubmit(setMessage, textareaRef);

  return (
    <div
      className={`flex w-full ${nunitoSans.className} max-w-[${INPUT_WIDTH}px]`}
    >
      <div
        className={`flex bg-lightGray p-3 w-full rounded-full mx-4 md:mx-24`}
      >
        <div
          className={`w-full border-darkGray border-2 bg-white rounded-full pl-5 pr-2 py-3`}
        >
          <div className="flex justify-between items-center space-x-4">
            <AttachmentButton hideText />

            <textarea
              className="w-full text-lg rounded-md placeholder:text-textDarkGray focus:outline-none py-2 resize-none overflow-y-auto max-h-[128px]"
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
                  submit(message);
                }
              }}
            />

            <Switch
              options={["4s-mini", "s1-preview"]}
              selectedOption={selectedModel}
              onChange={setSelectedModel}
            />

            <button onClick={() => submit(message)}>
              <div className="flex items-center justify-center h-[40px] w-[40px] rounded-full border border-lightGrayBorder hover:bg-veryLightGray active:bg-darkGrayBackground transition-colors duration-200">
                <Image
                  aria-hidden
                  src="/icons/arrow-right.svg"
                  alt="Send icon"
                  width={25}
                  height={25}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
