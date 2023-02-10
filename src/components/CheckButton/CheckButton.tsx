import { useAtom } from "jotai";
import { CheckSquare, Square } from "phosphor-react";
import { useState } from "react";
import { TODAY } from "../../constants";
import { cursorAtom, daysAtom } from "../../store";

const CheckButton = ({ i }: { i: number }) => {
  const [days, setDays] = useAtom(daysAtom);
  const [, setCursor] = useAtom(cursorAtom);
  const [updating, setUpdating] = useState(false);

  const idx = days.findIndex(
    (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
  );
  const systems = days[idx].systems;

  const updateDay = () => {
    let newDays = [...days];
    let newSystem = [...systems];

    newSystem[i] = { text: systems[i].text, checked: !systems[i].checked };
    newDays[idx] = {
      date: newDays[idx].date,
      systems: newSystem,
    };

    setDays(newDays);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTimeout(() => {
      setUpdating(false);
      setCursor(-1);
    }, 500);
    setUpdating(true);
    updateDay();
  };

  return (
    <button
      className="mr-2 bg-transparent"
      disabled={updating}
      onClick={handleClick}
    >
      {systems[i].checked ? <CheckSquare /> : <Square />}
    </button>
  );
};

export default CheckButton;
