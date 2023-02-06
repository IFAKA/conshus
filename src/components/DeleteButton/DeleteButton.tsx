import { useAtom } from "jotai";
import { Trash } from "phosphor-react";
import { cursorAtom } from "../../store";

type WithInitialValue<Value> = {
  init: Value;
};
export declare const RESET: unique symbol;
type SetStateActionWithReset<Value> =
  | Value
  | typeof RESET
  | ((prev: Value) => Value | typeof RESET);

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  const [, setCursor] = useAtom(cursorAtom);

  const handleClick = () => {
    onClick();
    setCursor(-1);
  };
  return (
    <button onClick={handleClick} className="bg-transparent">
      <Trash />
    </button>
  );
};

export default DeleteButton;
