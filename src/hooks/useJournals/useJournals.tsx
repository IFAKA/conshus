import { cursorAtom, journalsAtom, textAreaAtom } from "@/store";
import { useAtom } from "jotai";

const useJournals = () => {
  const [journals, setJournals] = useAtom(journalsAtom);
  const [cursor] = useAtom(cursorAtom);

  const deleteJournal = () => {
    const journalToDelete = journals[cursor];
    const newJournals = journals.filter(
      (journal) => journal !== journalToDelete
    );
    setJournals(newJournals);
  };

  const updateJournal = (value: string) => {
    let newJournals = [...journals];
    newJournals[cursor] = { text: value, date: newJournals[cursor].date };
    setJournals(newJournals);
  };

  const addJournal = (value: string) => {
    if (!journals.some((journal) => journal.text === value.trim())) {
      setJournals((crr) => [{ date: new Date(), text: value.trim() }, ...crr]);
    }
  };

  return { journals, setJournals, deleteJournal, updateJournal, addJournal };
};

export default useJournals;
