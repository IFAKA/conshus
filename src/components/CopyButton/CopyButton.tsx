import { useAtom } from "jotai";
import { Check, Copy } from "phosphor-react";
import { ButtonHTMLAttributes, isValidElement, useState } from "react";
import { cursorAtom } from "../../store";

interface ICopyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string | number;
  className?: string;
}

const CopyButton = ({ value, children, className }: ICopyButton) => {
  const [, setCursor] = useAtom(cursorAtom);
  const [copied, setCopied] = useState(false);

  const hasChildren = isValidElement(children) || typeof children === "string";

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTimeout(() => {
      setCopied(false);
      setCursor(-1);
    }, 500);
    setCopied(true);
    navigator.clipboard.writeText(`${value}`);
  };

  return (
    <button
      className={`${className} disabled:cursor-default`}
      disabled={copied}
      onClick={handleCopy}
    >
      {copied ? (
        hasChildren ? (
          "Copied!"
        ) : (
          <Check />
        )
      ) : hasChildren ? (
        children
      ) : (
        <Copy />
      )}
    </button>
  );
};

export default CopyButton;
