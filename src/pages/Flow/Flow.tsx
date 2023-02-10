import { useAtom } from "jotai";
import { flowAtom, textAreaAtom } from "../../store";
import { FlowList, TextArea } from "@/components";

const Flow = () => {
  const [value] = useAtom(textAreaAtom);
  const [flow, setFlow] = useAtom(flowAtom);

  const addSystem = () => {
    if (!flow.some((Flow) => Flow.text === value.trim())) {
      setFlow((crr) => [...crr, { days: [], text: value.trim() }]);
    }
  };

  return (
    <>
      <FlowList />
      <TextArea placeholder="Action" onSubmit={addSystem} />
    </>
  );
};

export default Flow;
