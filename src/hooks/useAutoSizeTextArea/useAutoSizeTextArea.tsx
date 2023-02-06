import { useLayoutEffect } from "react";

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  maxRows: number = 0
) => {
  const scrollHeight = 28;
  const maxHeight = maxRows * scrollHeight;

  useLayoutEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "auto";
      const scrollHeight = textAreaRef.scrollHeight;

      if (maxHeight) {
        if (scrollHeight <= maxHeight) {
          textAreaRef.style.height = scrollHeight + "px";
        } else {
          textAreaRef.style.height = maxHeight + "px";
        }
      } else {
        textAreaRef.style.height = scrollHeight + "px";
      }
    }
  }, [value]);
};

export default useAutosizeTextArea;
