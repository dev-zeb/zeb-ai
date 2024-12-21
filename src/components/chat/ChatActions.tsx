import { downloadChat } from "@/utils/download-chat";
import { useCallback } from "react";
import { Button } from "../button";
import { CopyIcon, DownloadIcon, ShareIcon } from "lucide-react";

interface ChatActionsProps {
  message: { text: string; sender: "user" | "ai" };
}

const ChatActions: React.FC<ChatActionsProps> = ({ message }) => {
  const copyText = useCallback(() => {
    navigator.clipboard.writeText(message.text);
  }, [message.text]);

  const handleDownload = () => {
    downloadChat(message.text);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Chat Message",
        text: message.text,
      });
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <div className="flex justify-end space-x-2 mt-2">
      <Button variant="outline" onClick={copyText} size="icon">
        <CopyIcon size={16} />
      </Button>
      <Button variant="outline" onClick={handleDownload} size="icon">
        <DownloadIcon size={16} />
      </Button>
      <Button variant="outline" onClick={handleShare} size="icon">
        <ShareIcon size={16} />
      </Button>
    </div>
  );
};

export default ChatActions;
