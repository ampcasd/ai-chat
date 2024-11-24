"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Switch } from "./Switch";
import { AttachmentButton } from "./AttachmentButton";

export const INPUT_WIDTH = 800;

export const ChatInput: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState("4s-mini");

  return (
    <div className={`bg-lightGray p-3 rounded-3xl w-[${INPUT_WIDTH}px]`}>
      <div className={`border-darkGray border-2 bg-white rounded-xl px-6 py-5`}>
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

          <button className="w-[55px] h-[55px] rounded-full border border-lightGrayBorder flex items-center justify-center mb-[-10px] mr-[-10px] hover:bg-veryLightGray active:bg-darkGrayBackground">
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
  );
};
