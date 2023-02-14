import { List, TextArea } from "@/components";
import { useFlow } from "@/hooks";

const Flow = () => {
  const { flow, deleteAction, updateAction, addAction } = useFlow();
  return (
    <>
      <List
        items={flow}
        position="top-left"
        onDelete={deleteAction}
        onUpdate={updateAction}
      />
      <TextArea placeholder="Action" onSubmit={addAction} />
    </>
  );
};

export default Flow;
