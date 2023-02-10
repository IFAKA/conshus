import { useAtom } from "jotai";
import { cursorAtom, editableAtom, tablesAtom } from "../../store";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";
import { ScrollToEnd } from "../ScrollToEnd";

const TableList = () => {
  const [tables, setTables] = useAtom(tablesAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const tableToDelete = tables[i];
    const newTables = tables.filter((table) => table !== tableToDelete);
    setTables(newTables);
  };

  const updateList = (i: number) => (value: string) => {
    let newTable = [...tables];
    newTable[i] = { text: value, items: newTable[i].items };
    setTables(newTable);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col items-start px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      {tables.map(({ text }, i) => (
        <div key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </div>
      ))}
      <ScrollToEnd listenTo={tables} />
    </ul>
  );
};

export default TableList;
