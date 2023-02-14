import { POSITION } from "@/constants";
import { useScrollTo } from "@/hooks";
import { cursorAtom, editableAtom } from "@/store";
import { useAtom } from "jotai";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";

const List = <T extends { text: string }>({
  items,
  position: positionKey,
  onDelete,
  onUpdate,
}: {
  items: T[];
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onDelete: () => void;
  onUpdate: (value: string) => void;
}) => {
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);
  const ref = useScrollTo(items.length);

  return (
    <ul
      className={`${POSITION[positionKey]} flex-1 flex border-neutral-800 px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300`}
    >
      {items.map(({ text }, i) => (
        <li ref={ref} key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={onUpdate} />
          ) : (
            <TextItem id={i} text={text} onDelete={onDelete} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
