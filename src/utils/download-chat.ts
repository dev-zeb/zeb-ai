export const downloadChat = (text: string) => {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "chat_message.txt";
  link.click();
};
