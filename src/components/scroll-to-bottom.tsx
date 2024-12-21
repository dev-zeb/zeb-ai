import { ArrowBigDown } from "lucide-react";
import { useEffect, useState } from "react";

interface ScrollToBottomProps {
  chatContainerRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollToBottom: React.FC<ScrollToBottomProps> = ({ chatContainerRef }) => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (chatContainerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
        setShowArrow(scrollTop + clientHeight < scrollHeight - 20); // Adjust the threshold as needed
      }
    };

    const container = chatContainerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [chatContainerRef]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    showArrow && (
      <button
        onClick={scrollToBottom}
        className="fixed bottom-16 right-4 p-2 rounded-full bg-blue-500 text-white"
      >
        <ArrowBigDown size={24} />
      </button>
    )
  );
};

export default ScrollToBottom;
