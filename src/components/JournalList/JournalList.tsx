import { useAtom } from "jotai";
import { cursorAtom, editableAtom, journalsAtom } from "../../store";
import { ScrollToEnd } from "../ScrollToEnd";
import { TextAreaEdit } from "../TextAreaEdit";
import { TextItem } from "../TextItem";

const JournalList = () => {
  const [journals, setJournals] = useAtom(journalsAtom);
  const [cursor] = useAtom(cursorAtom);
  const [editable] = useAtom(editableAtom);

  const handleDelete = (i: number) => () => {
    const journalToDelete = journals[i];
    const newJournals = journals.filter(
      (journal) => journal !== journalToDelete
    );
    setJournals(newJournals);
  };

  const updateList = (i: number) => (value: string) => {
    let newJournals = [...journals];
    newJournals[i] = { text: value, date: newJournals[i].date };
    setJournals(newJournals);
  };

  return (
    <ul className="flex-1 flex border-neutral-800 flex-col-reverse items-end px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md dark:scrollbar-track-neutral-800 dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-300">
      <ScrollToEnd listenTo={journals} />
      {journals.map(({ text }, i) => (
        <li key={text}>
          {editable && cursor === i ? (
            <TextAreaEdit onSubmit={updateList(i)} />
          ) : (
            <TextItem i={i} text={text} onDelete={handleDelete(i)} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default JournalList;
