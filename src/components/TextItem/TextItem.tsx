import { useAtom } from "jotai";
import React, { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { cursorAtom } from "../../store";
import CopyButton from "../CopyButton/CopyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const TextItem = ({
  i,
  text,
  onDelete,
}: {
  i: number;
  text: string;
  onDelete: () => void;
}) => {
  const [cursor, setCursor] = useAtom(cursorAtom);

  const focusRef = useRef<HTMLDivElement>(null);
  useHotkeys(";", () => {
    setCursor(-1);
    focusRef?.current && focusRef?.current.blur();
  });

  const handleFocus = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    focusRef.current &&
      focusRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setCursor(i);
  };

  return (
    <div
      tabIndex={0}
      ref={focusRef}
      onFocus={handleFocus}
      className="hover:bg-neutral-700 hover:cursor-pointer bg-neutral-800 mt-1 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl"
    >
      <span>{text}</span>
      {cursor === i ? (
        <div className="w-full flex justify-end">
          <div className="flex items-center py-1">
            <CopyButton text={text} />
            <EditButton text={text} />
            <DeleteButton onClick={onDelete} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextItem;
