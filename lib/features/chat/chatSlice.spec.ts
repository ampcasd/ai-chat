import { ChatRole } from "@/lib/enums/chatRole.enum";
import { FetchStatus } from "@/lib/enums/fetchStatus.enum";
import { LikeStatus } from "@/lib/enums/likeStatus.enum";
import { chatSlice } from "./chatSlice";

describe("chatSlice", () => {
  const initialState = {
    messages: [],
    history: [],
    fetchStatus: { status: FetchStatus.IDLE },
  };

  it("should handle adding a message", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const nextState = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    expect(nextState.messages).toContainEqual(message);
  });

  it("should handle updating a message", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const updatedMessage = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, updated AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.updateMessage(updatedMessage)
    );

    expect(nextState.messages[0].content).toBe("Hello, updated AI!");
  });

  it("should handle setting fetch status", () => {
    const nextState = chatSlice.reducer(
      initialState,
      chatSlice.actions.setStatus({ status: FetchStatus.LOADING })
    );
    expect(nextState.fetchStatus.status).toBe(FetchStatus.LOADING);
  });

  it("should handle clearing messages", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.clearMessages()
    );

    expect(nextState.messages).toEqual([]);
    expect(nextState.fetchStatus.status).toBe(FetchStatus.IDLE);
  });

  it("should handle archiving messages", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.archiveMessages()
    );

    expect(nextState.history).toContainEqual([message]);
    expect(nextState.messages).toEqual([]);
    expect(nextState.fetchStatus.status).toBe(FetchStatus.IDLE);
  });

  it("should handle bringing back a thread with valid payload", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.archiveMessages()
    );
    const stateWithNewMessage = chatSlice.reducer(
      nextState,
      chatSlice.actions.addMessage(message)
    );

    const bringBackState = chatSlice.reducer(
      stateWithNewMessage,
      chatSlice.actions.bringBackThread([message])
    );

    expect(bringBackState.messages).toEqual([message]);
    expect(bringBackState.history).toEqual([]);
  });

  it("should handle liking a message", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.likeMessage("1")
    );

    expect(nextState.messages[0].liked).toBe(LikeStatus.LIKED);
  });

  it("should handle disliking a message", () => {
    const message = {
      id: "1",
      timestamp: Date.now(),
      role: ChatRole.USER,
      content: "Hello, AI!",
    };

    const stateWithMessage = chatSlice.reducer(
      initialState,
      chatSlice.actions.addMessage(message)
    );
    const nextState = chatSlice.reducer(
      stateWithMessage,
      chatSlice.actions.dislikeMessage("1")
    );

    expect(nextState.messages[0].liked).toBe(LikeStatus.DISLIKED);
  });
});
