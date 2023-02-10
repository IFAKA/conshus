import { useAtom } from "jotai";
import { cursorAtom, editableAtom, flowAtom } from "../../store";
import { ScrollToEnd } from "../ScrollToEnd";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";

const FlowList = () => {
  const [flow, setFlow] = useAtom(flowAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const systemToDelete = flow[i];
    const newSystems = flow.filter((system) => system !== systemToDelete);
    setFlow(newSystems);
  };

  const updateList = (i: number) => (value: string) => {
    let newFlow = [...flow];
    newFlow[i] = { text: value, days: newFlow[i].days };
    setFlow(newFlow);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col items-start px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      {flow.map(({ text }, i) => (
        <div key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </div>
      ))}
      <ScrollToEnd listenTo={flow} />
    </ul>
  );
};

export default FlowList;
