import { useAtom } from "jotai";
import { tablesAtom, textAreaAtom } from "../../store";
import TableList from "../TableList/TableList";
import TextArea from "../TextArea/TextArea";

const Tables = () => {
  const [value] = useAtom(textAreaAtom);
  const [tables, setTables] = useAtom(tablesAtom);

  const addTable = () => {
    if (!tables.some((table) => table.text === value.trim())) {
      setTables((crr) => [...crr, { items: [], text: value.trim() }]);
    }
  };

  return (
    <>
      <TableList />
      <TextArea placeholder="Table" onSubmit={addTable} />
    </>
  );
};

export default Tables;
