"use client";

import { Sender, useChatStorage } from "@/app/hooks/use-chat-storage";
import { Container } from "@/components/container";
import { useState } from "react";
import { Button } from "../button";
import { Textarea } from "../textarea";
import ChatMessage from "./ChatMessage";
import toast from "react-hot-toast";
import { BookOpen, TrashIcon } from "lucide-react";
import Loader from "../loader";

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { messages, saveMessage, clearMessages } = useChatStorage();
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: Sender.User, id: Date.now().toString() };
    setMessage("");
    setLoading(true);

    try {
      setIsTyping(true);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const { reply } = await response.json();
      const aiMessage = { text: reply, sender: Sender.AI, id: Date.now().toString() };
      saveMessage([userMessage, aiMessage]);
    } catch (error: unknown) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsTyping(false);
      setLoading(false);
    }
  };

  return (
    <Container className="h-full w-full max-w-full md:max-w-2xl mx-auto px-4">
      <div className="flex flex-col h-full space-y-6">
        {/* Chat Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center gap-4">
            <BookOpen className="w-6 h-6 text-blue-500" />
            Chat Box
          </h2>
          <Button variant="destructive" onClick={clearMessages}>
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
          {isTyping && <Loader />}
        </div>

        {/* Input Area */}
        <div className="space-y-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="h-20"
          />
          <Button onClick={sendMessage} disabled={loading} className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </Container>
  );
}
