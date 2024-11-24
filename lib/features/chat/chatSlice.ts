import { ChatRole } from "@/app/enums/chatRole.enum";
import { FetchStatus } from "@/app/enums/fetchStatus.enum";
import { LikeStatus } from "@/app/enums/likeStatus.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Message {
  id: string;
  timestamp: number;
  role: ChatRole;
  content: string;
  liked?: LikeStatus;
}

interface ChatState {
  messages: Message[];
  messageHistory: Message[][];
  fetchStatus: FetchStatus;
}

const initialState: ChatState = {
  messages: [],
  messageHistory: [],
  fetchStatus: FetchStatus.IDLE,
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push({ ...action.payload });
    },
    clearMessages: (state) => {
      state.messages = [];
      state.fetchStatus = FetchStatus.IDLE;
    },
    archiveMessages: (state) => {
      state.messageHistory.push(state.messages);
      state.messages = [];
      state.fetchStatus = FetchStatus.IDLE;
    },
    setStatus: (state, action: PayloadAction<FetchStatus>) => {
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
