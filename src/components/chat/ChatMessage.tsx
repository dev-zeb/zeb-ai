import React from "react";
import ReactMarkdown from "react-markdown";
import ChatActions from "./ChatActions";
import { Sender } from "@/app/hooks/use-chat-storage";

interface ChatMessageProps {
  message: { text: string; sender: Sender; id: string };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`p-1 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white max-w-lg self-end text-right" : "bg-gray-300 text-black w-full self-start text-left dark:bg-gray-700 dark:text-white"}`}
      >
        <div>
          {message.sender === "ai" ? (
            <ReactMarkdown className="prose dark:prose-invert">{message.text}</ReactMarkdown>
          ) : (
            message.text
          )}
        </div>
        {message.sender === "ai" && <ChatActions message={message} />}
      </div>
    </div>
  );
};

export default ChatMessage;