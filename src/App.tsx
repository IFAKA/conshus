import { useAtom } from "jotai";
import { PaperPlaneRight } from "phosphor-react";
import { useRef } from "react";
import { Header, Journals, Systems } from "./components";
import { useAutoSizeTextArea } from "./hooks";
import { notesAtom, sectionAtom, textAreaAtom } from "./store";
import { useHotkeys } from "react-hotkeys-hook";

function App() {
  const [section] = useAtom(sectionAtom);
  const [notes, setNotes] = useAtom(notesAtom);
  const [value, setValue] = useAtom(textAreaAtom);

  const addJournal = () => {
    if (value && !notes.some((note) => note.text === value.trim())) {
      setNotes((crr) => [...crr, { date: new Date(), text: value.trim() }]);
      setValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeTextArea(textAreaRef.current, value, 6);
  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      addJournal();
    }
  };
  useHotkeys("/", () => textAreaRef.current?.focus(), { preventDefault: true });
  useHotkeys(";", () => textAreaRef.current?.blur(), {
    enableOnFormTags: true,
  });

  const handleClick = () => addJournal();
  const isDisabled = !value || notes.some((note) => note.text === value.trim());
  return (
    <div className="w-full flex flex-col items-center h-full">
      <Header />

      <div className="flex-1 flex border-x border-neutral-800 flex-col-reverse items-end w-full max-w-sm px-2 overflow-auto scrollbar-thin scrollbar-w-1 scrollbar-thumb-rounded-md scrollbar-track-neutral-800 scrollbar-thumb-neutral-700">
        {section === "journals" ? (
          <Journals />
        ) : section === "tables" ? (
          <></>
        ) : section === "systems" ? (
          <Systems />
        ) : null}
      </div>

      <div className="flex w-full max-w-sm p-2 items-end">
        <label className="py-2 w-full flex items-center rounded-t-[22px] rounded-b-[22px] dark:bg-neutral-700 border shadow-lg dark:border-none">
          <textarea
            onChange={handleChange}
            value={value}
            ref={textAreaRef}
            onKeyDown={onKeyPress}
            placeholder="Thought"
            name="New tought"
            id="idea"
            rows={1}
            className="px-4 text-lg resize-none w-full scrollbar-none bg-transparent focus-visible:outline-none focus:outline-none"
          />
        </label>
        {/* <div>
          <button
            onClick={handleClick}
            disabled={isDisabled}
            className="bg-white disabled:bg-neutral-800 dark:bg-neutral-700 h-11 shadow-xl border dark:border-none w-11 rounded-full ml-2 pl-[11px]"
          >
            <PaperPlaneRight size={24} weight="thin" />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
