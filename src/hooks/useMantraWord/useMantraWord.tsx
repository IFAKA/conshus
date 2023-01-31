import { useAtom } from "jotai";
import React, { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { mantraAtom } from "../../store";

const useMantraWord = () => {
  const [mantra, setMantra] = useAtom(mantraAtom);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys("ctrl+m", () => setSelected(true));
  useHotkeys(";", () => inputRef.current?.blur(), {
    enableOnFormTags: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleFocus = () => setValue(mantra);
  const handleUnfocus = () => setSelected(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMantra(value);
    inputRef.current?.blur();
  };
  return {
    selected,
    handleSubmit,
    inputRef,
    value,
    handleChange,
    handleFocus,
    handleUnfocus,
    mantra,
  };
};

export default useMantraWord;
