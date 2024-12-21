import { useState, useEffect } from "react";

export enum Sender {
  User = "user",
  AI = "ai",
}
export interface ChatMessage {
  text: string;
  sender: Sender;
  id: string;
}

export const useChatStorage = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Load messages from localStorage on initial render
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  // Save a new message to state and localStorage
  const saveMessage = (newMessages: ChatMessage[]) => {
    const updatedMessages = [...messages, ...newMessages];
    setMessages(updatedMessages);
    localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));
    console.log("[sufi] Updated messages:", updatedMessages); 
  };

  // Function to clear all messages
  const clearMessages = () => {
    setMessages([]); 
    localStorage.removeItem("chatMessages");
  };

  return { messages, saveMessage, clearMessages };
};
