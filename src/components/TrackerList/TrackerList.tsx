import { useAtom } from "jotai";
import { cursorAtom, editableAtom, trackersAtom } from "../../store";
import ScrollToEnd from "../ScrollToEnd/ScrollToEnd";
import TextAreaEdit from "../TextAreaEdit/TextAreaEdit";
import TextItem from "../TextItem/TextItem";

const TrackerList = () => {
  const [trackers, setTrackers] = useAtom(trackersAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const systemToDelete = trackers[i];
    const newtrackers = trackers.filter((system) => system !== systemToDelete);
    setTrackers(newtrackers);
  };

  const updateList = (i: number) => (value: string) => {
    let newtrackers = [...trackers];
    newtrackers[i] = { text: value, days: newtrackers[i].days };
    setTrackers(newtrackers);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col items-start px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      {trackers.map(({ text }, i) => (
        <div key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </div>
      ))}
      <ScrollToEnd listenTo={trackers} />
    </ul>
  );
};

export default TrackerList;
