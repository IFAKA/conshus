import { cursorAtom, flowAtom } from "@/store";
import { useAtom } from "jotai";

const useFlowActions = () => {
  const [flow, setFlow] = useAtom(flowAtom);
  const [cursor] = useAtom(cursorAtom);

  const deleteAction = () => {
    const systemToDelete = flow[cursor];
    const newSystems = flow.filter((system) => system !== systemToDelete);
    setFlow(newSystems);
  };

  const updateAction = (value: string) => {
    let newFlow = [...flow];
    newFlow[cursor] = { text: value, days: newFlow[cursor].days };
    setFlow(newFlow);
  };

  const addAction = (value: string) => {
    if (!flow.some((Flow) => Flow.text === value.trim())) {
      setFlow((crr) => [...crr, { days: [], text: value.trim() }]);
    }
  };

  return { flow, setFlow, deleteAction, updateAction, addAction };
};

export default useFlowActions;
