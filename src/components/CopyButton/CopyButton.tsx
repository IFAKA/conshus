import { useAtom } from "jotai";
import { Check, Copy } from "phosphor-react";
import { useState } from "react";
import { cursorAtom } from "../../store";

const CopyButton = ({ text }: { text: string }) => {
  const [, setCursor] = useAtom(cursorAtom);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTimeout(() => {
      setCopied(false);
      setCursor(-1);
    }, 500);
    setCopied(true);
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {copied ? (
        <span className="mr-2">
          <Check />
        </span>
      ) : (
        <button className="mr-2 bg-transparent" onClick={handleCopy}>
          <Copy />
        </button>
      )}
    </>
  );
};

export default CopyButton;
