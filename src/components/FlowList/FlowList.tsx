import { useFlow } from "@/hooks";
import { List } from "../List";

const FlowList = () => {
  const { flow, deleteAction, updateAction } = useFlow();
  return (
    <List
      items={flow}
      position="top-left"
      onDelete={deleteAction}
      onUpdate={updateAction}
    />
  );
};

export default FlowList;
