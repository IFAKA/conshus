import { cursorAtom, listsAtom } from "@/store";
import { useAtom } from "jotai";

const useLists = () => {
  const [lists, setLists] = useAtom(listsAtom);
  const [cursor] = useAtom(cursorAtom);

  const deleteTable = () => {
    const tableToDelete = lists[cursor];
    const newTables = lists.filter((table) => table !== tableToDelete);
    setLists(newTables);
  };

  const updateTable = (value: string) => {
    let newTable = [...lists];
    newTable[cursor] = { text: value, items: newTable[cursor].items };
    setLists(newTable);
  };

  const addTable = (value: string) => {
    if (!lists.some((table) => table.text === value.trim())) {
      setLists((crr) => [...crr, { items: [], text: value.trim() }]);
    }
  };

  return { tables: lists, deleteTable, updateTable, addTable };
};

export default useLists;
