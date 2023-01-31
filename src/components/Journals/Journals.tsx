import { useAtom } from "jotai";
import { notesAtom } from "../../store";

const Journals = () => {
  const [notes] = useAtom(notesAtom);
  return (
    <>
      {notes
        .map((note) => (
          <p
            key={note.text}
            className="mt-1 whitespace-pre-wrap text-lg leading-6 w-fit bg-neutral-800 px-[11px] py-[7px] rounded-xl"
          >
            {note.text.charAt(0).toUpperCase() + note.text.slice(1)}
          </p>
        ))
        .reverse()}
    </>
  );
};

export default Journals;
