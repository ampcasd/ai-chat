import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: string;
  timestamp: number;
  role: "user" | "ai";
  content: string;
}

interface ChatState {
  messages: Message[];
  messageHistory: Message[];
}

const initialState: ChatState = {
  messages: [],
  messageHistory: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    removeMessage: (state, action: PayloadAction<number>) => {
      state.messages.splice(action.payload, 1);
    },
  },
});
