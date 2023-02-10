import { useAtom } from "jotai";
import { useEffect, useRef } from "react";
import { useAutoSizeTextArea } from "../../hooks";
import { inputSelectedAtom, refAtom, textAreaAtom } from "../../store";
import { firstCharUpper } from "../../utils";

const TextArea = ({
  placeholder,
  onSubmit,
}: {
  placeholder: string;
  onSubmit: () => void;
}) => {
  const [value, setValue] = useAtom(textAreaAtom);
  const [, setInputSelected] = useAtom(inputSelectedAtom);
  const [, setRef] = useAtom(refAtom);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutoSizeTextArea(textAreaRef.current, value, 6);
  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      if (value.trim()) {
        onSubmit();
        setValue("");
      }
    }
  };

  const handleFocus = () => setInputSelected(true);
  const handleBlur = () => {
    setValue("");
    setInputSelected(false);
  };

  useEffect(() => {
    setRef(textAreaRef);
  }, []);

  return (
    <div className="p-2">
      <label className="py-2 w-full flex items-center rounded-t-[22px] rounded-b-[22px] dark:bg-neutral-700 border-2 border-neutral-400 dark:border-none shadow-lg">
        <textarea
          autoFocus={!!value}
          onChange={handleChange}
          value={firstCharUpper(value)}
          ref={textAreaRef}
          onKeyDown={onKeyPress}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          rows={1}
          className="px-4 text-lg resize-none w-full scrollbar-none bg-transparent focus-visible:outline-none focus:outline-none"
        />
      </label>
    </div>
  );
};

export default TextArea;
