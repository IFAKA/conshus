import { useAtom } from "jotai";
import { cursorAtom, editableAtom, systemsAtom } from "../../store";
import CopyButton from "../CopyButton/CopyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import ScrollToEnd from "../ScrollToEnd/ScrollToEnd";
import TextAreaEdit from "../TextAreaEdit/TextAreaEdit";
import TextItem from "../TextItem/TextItem";

const SystemList = () => {
  const [systems, setSystems] = useAtom(systemsAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const systemToDelete = systems[i];
    const newSystems = systems.filter((system) => system !== systemToDelete);
    setSystems(newSystems);
  };

  const updateList = (i: number) => (value: string) => {
    let newSystems = [...systems];
    newSystems[i] = { text: value, days: newSystems[i].days };
    setSystems(newSystems);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col items-start px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md scrollbar-track-neutral-800 scrollbar-thumb-neutral-700">
      {systems.map(({ text }, i) => (
        <div key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </div>
      ))}
      <ScrollToEnd listenTo={systems} />
    </ul>
  );
};

export default SystemList;
