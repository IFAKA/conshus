import { List, TextArea } from "@/components";
import { useJournals } from "@/hooks";

const Journals = () => {
  const { journals, deleteJournal, updateJournal, addJournal } = useJournals();
  return (
    <>
      <List
        items={journals}
        position="bottom-right"
        onDelete={deleteJournal}
        onUpdate={updateJournal}
      />
      <TextArea placeholder={"Thought"} onSubmit={addJournal} />
    </>
  );
};

export default Journals;
