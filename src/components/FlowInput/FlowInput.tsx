import { useFlow } from "@/hooks";
import { TextArea } from "../TextArea";

const FlowInput = () => {
  const { addAction } = useFlow();
  return <TextArea placeholder="Action" onSubmit={addAction} />;
};

export default FlowInput;
