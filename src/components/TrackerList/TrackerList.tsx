import { useAtom } from "jotai";
import { TODAY } from "../../constants";
import { cursorAtom, daysAtom, editableAtom } from "../../store";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";
import { ScrollToEnd } from "../ScrollToEnd";

const TrackerList = () => {
  const [days, setDays] = useAtom(daysAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const idx = days?.findIndex(
    ({ date }) => Date.parse(`${date}`) === Date.parse(`${TODAY}`)
  );
  const systems = days[idx]?.systems || [];

  const handleDelete = (i: number) => () => {
    const systemToDelete = systems[i];
    const newSystems = systems.filter((system) => system !== systemToDelete);
    let newDays = [...days];

    newDays[idx] = { date: newDays[idx].date, systems: newSystems };

    setDays(newDays);
  };

  const updateList = (i: number) => (value: string) => {
    let newSystems = [...systems];
    let newDays = [...days];

    newSystems[i] = { checked: newSystems[i].checked, text: value.trim() };
    newDays[idx] = { date: newDays[idx].date, systems: newSystems };

    setDays(newDays);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col items-start px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      {systems.map(({ text, checked }, i) => (
        <div key={text} className={`${checked && "line-through"}`}>
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

export default TrackerList;
