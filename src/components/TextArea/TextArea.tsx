import { useRef, useState } from "react";
import { useAutoSizeTextArea } from "../../hooks";
import { firstCharUpper } from "../../utils";

const TextArea = ({
  placeholder,
  onSubmit,
}: {
  placeholder: string;
  onSubmit: (value: string) => void;
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);

  const ref = useRef<HTMLTextAreaElement>(null);
  useAutoSizeTextArea(ref.current, value, 6);
  const onKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(firstCharUpper(value.trim()));
        setValue("");
      }
    }
  };

  return (
    <div className="p-2">
      <label className="py-2 w-full flex items-center rounded-t-[22px] rounded-b-[22px] dark:bg-neutral-700 border-2 border-neutral-400 dark:border-none shadow-lg">
        <textarea
          autoFocus={!!value}
          onChange={handleChange}
          value={firstCharUpper(value)}
          ref={ref}
          onKeyDown={onKeyPress}
          placeholder={placeholder}
          rows={1}
          className="px-4 text-lg resize-none w-full scrollbar-none bg-transparent focus-visible:outline-none focus:outline-none"
        />
      </label>
    </div>
  );
};

export default TextArea;
