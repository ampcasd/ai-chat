import { ChatRole } from "@/lib/enums/chatRole.enum";
import { FetchStatus } from "@/lib/enums/fetchStatus.enum";
import { LikeStatus } from "@/lib/enums/likeStatus.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatusState } from "./chatSlice.types";

export interface Message {
  id: string;
  timestamp: number;
  role: ChatRole;
  content: string;
  liked?: LikeStatus;
}

interface ChatState {
  messages: Message[];
  history: Message[][];
  fetchStatus: FetchStatusState;
}

const initialState: ChatState = {
  messages: [],
  history: [],
  fetchStatus: { status: FetchStatus.IDLE },
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    updateMessage: (state, action: PayloadAction<Message>) => {
      const existingMessage = state.messages.find(
        (m) => m.id === action.payload.id
      );
      if (existingMessage) {
        existingMessage.content = action.payload.content;
      }
    },
    clearMessages: (state) => {
      state.messages = [];
      state.fetchStatus = { status: FetchStatus.IDLE };
    },
    archiveMessages: (state) => {
      if (state.messages.length) {
        state.history.push(state.messages);
        state.messages = [];
      }
      state.fetchStatus = { status: FetchStatus.IDLE };
    },
    bringBackThread: (state, action: PayloadAction<Message[]>) => {
      // Add the current messages to the history
      state.history.push(state.messages);
      // Place archived messages into current conversation slot
      state.messages = action.payload;
      // Remove the archived thread from the history to avoid duplicates
      if (action.payload.length > 0) {
        state.history = state.history.filter(
          (messages) => messages[0]?.id !== action.payload[0]?.id
        );
      }
    },
    setStatus: (state, action: PayloadAction<FetchStatusState>) => {
      state.fetchStatus = action.payload;
    },
    likeMessage: (state, action: PayloadAction<string>) => {
      const message = state.messages.find((m) => m.id === action.payload);
      if (message) {
        message.liked = LikeStatus.LIKED;
      }
    },
    dislikeMessage: (state, action: PayloadAction<string>) => {
      const message = state.messages.find((m) => m.id === action.payload);
      if (message) {
        message.liked = LikeStatus.DISLIKED;
      }
    },
  },
});
