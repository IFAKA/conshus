import { List, TextArea } from "@/components";
import { useTables } from "@/hooks";

const Lists = () => {
  const { tables, deleteTable, updateTable, addTable } = useTables();
  return (
    <>
      <List
        items={tables}
        position="top-left"
        onDelete={deleteTable}
        onUpdate={updateTable}
      />
      <TextArea placeholder="Table" onSubmit={addTable} />
    </>
  );
};

export default Lists;
