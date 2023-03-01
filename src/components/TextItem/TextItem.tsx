import { TODAY } from "@/constants";
import { getXTimesNumber } from "@/utils";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useClickOutside } from "../../hooks";
import { cursorAtom, daysAtom, sectionAtom } from "../../store";
import { CheckButton } from "../CheckButton";
import { CopyButton } from "../CopyButton";
import { DeleteButton } from "../DeleteButton";
import { EditButton } from "../EditButton";

const TextItem = ({
  id,
  text,
  onDelete,
}: {
  id: number;
  text: string;
  onDelete: () => void;
}) => {
  const [section] = useAtom(sectionAtom);
  const [cursor, setCursor] = useAtom(cursorAtom);
  const [days] = useAtom(daysAtom);

  const todayIdx = days.findIndex(
    (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
  );
  const systems = days[todayIdx].systems;

  const ref = useClickOutside(id);
  useHotkeys(";", () => {
    ref.current?.blur();
    setCursor(-1);
  });
  const handleClick = () => setCursor(id);

  useEffect(() => {
    cursor === id &&
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [ref, cursor]);

  const times = getXTimesNumber(text);

  return (
    <div
      tabIndex={0}
      ref={ref}
      onClick={handleClick}
      className={`${
        section === "trackers" && systems[id].times === 0 && "line-through"
      } hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer dark:bg-neutral-800 bg-neutral-200 mt-1 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl`}
    >
      <span>{text}</span>
      {cursor === id ? (
        <div className="w-full flex justify-end">
          <div className="flex items-center py-1">
            {section === "trackers" ? (
              <CheckButton totalTimes={times} i={id} />
            ) : (
              <CopyButton value={text} className="mr-2 bg-transparent" />
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
