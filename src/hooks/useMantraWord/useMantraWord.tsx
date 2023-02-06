import { useAtom } from "jotai";
import React, { useRef, useState } from "react";
import { mantraAtom } from "../../store";

const useMantraWord = () => {
  const [mantra, setMantra] = useAtom(mantraAtom);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleFocus = () => setValue(mantra);
  const handleUnfocus = () => setSelected(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim()) {
      setMantra(value.replace(/\s+/g, " ").trim());
      inputRef.current?.blur();
    }
  };

  const handleClick = () => setSelected(true);
  return {
    selected,
    handleSubmit,
    inputRef,
    value,
    handleChange,
    handleFocus,
    handleUnfocus,
    handleClick,
    mantra,
  };
};

export default useMantraWord;
