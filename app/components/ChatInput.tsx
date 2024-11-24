"use client";
import Image from "next/image";
import { useState } from "react";
import { AttachmentButton } from "./AttachmentButton";
import { Switch } from "./Switch";

export const INPUT_WIDTH = 1000;

export function ChatInput(): JSX.Element {
  const [selectedModel, setSelectedModel] = useState("4s-mini");

  return (
    <div className={`flex w-full max-w-[${INPUT_WIDTH}px]`}>
      <div className={`flex bg-lightGray p-3 w-full rounded-3xl mx-24`}>
        <div
          className={`w-full border-darkGray border-2 bg-white rounded-xl pl-5 pr-2 py-3`}
        >
          <textarea
            className="w-full h-18 text-lg rounded-md resize-none placeholder:text-textDarkGray focus:outline-none"
            placeholder="Ask me anything..."
          />

          <div className="flex items-end justify-between ">
            <div className="flex w-full space-x-6">
              <AttachmentButton />

              <Switch
                options={["4s-mini", "s1-preview"]}
                selectedOption={selectedModel}
                onChange={setSelectedModel}
              />
            </div>

            <button className="w-[55px] h-[55px] rounded-full border border-lightGrayBorder flex items-center justify-center mb-[-5px]  hover:bg-veryLightGray active:bg-darkGrayBackground transition-colors duration-200">
              <Image
                aria-hidden
                src="/arrow-right.svg"
                alt="Send icon"
                width={25}
                height={25}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
