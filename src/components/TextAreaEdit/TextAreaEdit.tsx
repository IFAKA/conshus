import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { cursorAtom, editableAtom } from "../../store";
import { firstCharUpper } from "../../utils";

const TextAreaEdit = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [editable, setEditable] = useAtom(editableAtom);
  const [, setCursor] = useAtom(cursorAtom);
  const textAreaRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      if (e.currentTarget.textContent) {
        onSubmit(firstCharUpper(e.currentTarget.textContent?.trim()));
        setEditable("");
        setCursor(-1);
      }
    }
  };

  const handleBlur = () => {
    setEditable("");
    setCursor(-1);
  };

  useEffect(() => {
    textAreaRef.current?.focus();
    if (textAreaRef.current) {
      const sel = window.getSelection();
      sel?.collapse(
        textAreaRef.current.lastChild,
        textAreaRef.current.innerText.length
      );
    }
  }, []);

  return (
    <div
      role="textbox"
      contentEditable
      suppressContentEditableWarning
      className="hover:bg-neutral-700 bg-neutral-800 mt-1 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl resize-none scrollbar-none"
      ref={textAreaRef}
      onKeyDown={handleKeyPress}
      onBlur={handleBlur}
    >
      {firstCharUpper(editable)}
    </div>
  );
};

export default TextAreaEdit;
