import { JournalList, TextArea } from "@/components";
import { useAtom } from "jotai";
import { journalsAtom, textAreaAtom } from "../../store";

const Journals = () => {
  const [value] = useAtom(textAreaAtom);
  const [journals, setJournals] = useAtom(journalsAtom);

  const addJournal = () => {
    if (!journals.some((journal) => journal.text === value.trim())) {
      setJournals((crr) => [{ date: new Date(), text: value.trim() }, ...crr]);
    }
  };

  return (
    <>
      <JournalList />
      <TextArea placeholder={"Thought"} onSubmit={addJournal} />
    </>
  );
};

export default Journals;
