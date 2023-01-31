import { useEffect } from "react";

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  maxRows: number
) => {
  const scrollHeight = 28;
  const maxHeight = maxRows * scrollHeight;
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;

      if (scrollHeight <= maxHeight) {
        textAreaRef.style.height = scrollHeight + "px";
      } else {
        textAreaRef.style.height = maxHeight + "px";
      }
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
