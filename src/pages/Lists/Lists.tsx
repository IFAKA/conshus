import { List, TextArea } from "@/components";
import { useLists } from "@/hooks";

const Lists = () => {
  const { tables, deleteTable, updateTable, addTable } = useLists();
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
