import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useClickOutside } from "../../hooks";
import { cursorAtom, sectionAtom } from "../../store";
import { CheckButton } from "../CheckButton";
import { CopyButton } from "../CopyButton";
import { DeleteButton } from "../DeleteButton";
import { EditButton } from "../EditButton";

const TextItem = ({
  i,
  text,
  onDelete,
}: {
  i: number;
  text: string;
  onDelete: () => void;
}) => {
  const [section] = useAtom(sectionAtom);
  const [cursor, setCursor] = useAtom(cursorAtom);

  const unfocus = () => setCursor(-1);

  const ref = useClickOutside(unfocus);
  useHotkeys(";", () => unfocus());

  const handleFocus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ref.current &&
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setCursor(i);
  };

  useEffect(() => {
    ref?.current && cursor === -1 && ref?.current.blur();
  }, [ref, cursor]);

  return (
    <div
      tabIndex={0}
      ref={ref}
      onClick={handleFocus}
      className="hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer dark:bg-neutral-800 bg-neutral-200 mt-1 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl"
    >
      <span>{text}</span>
      {cursor === i ? (
        <div className="w-full flex justify-end">
          <div className="flex items-center py-1">
            {section !== "trackers" ? (
              <CopyButton text={text} />
            ) : (
              <CheckButton i={i} />
            )}
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
