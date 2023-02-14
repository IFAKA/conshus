import { cursorAtom, tablesAtom, textAreaAtom } from "@/store";
import { useAtom } from "jotai";

const useTables = () => {
  const [tables, setTables] = useAtom(tablesAtom);
  const [cursor] = useAtom(cursorAtom);

  const deleteTable = () => {
    const tableToDelete = tables[cursor];
    const newTables = tables.filter((table) => table !== tableToDelete);
    setTables(newTables);
  };

  const updateTable = (value: string) => {
    let newTable = [...tables];
    newTable[cursor] = { text: value, items: newTable[cursor].items };
    setTables(newTable);
  };

  const addTable = (value: string) => {
    if (!tables.some((table) => table.text === value.trim())) {
      setTables((crr) => [...crr, { items: [], text: value.trim() }]);
    }
  };

  return { tables, deleteTable, updateTable, addTable };
};

export default useTables;
