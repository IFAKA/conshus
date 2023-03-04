import { useAtom } from "jotai";
import { CheckSquare, Square } from "phosphor-react";
import { useState } from "react";
import { TODAY } from "../../constants";
import { cursorAtom, daysAtom } from "../../store";

const CounterCheckButton = ({
  totalTimes,
  i,
}: {
  totalTimes: number;
  i: number;
}) => {
  const [days, setDays] = useAtom(daysAtom);
  const [, setCursor] = useAtom(cursorAtom);
  const [updating, setUpdating] = useState(false);

  const idx = days.findIndex(
    (day) => Date.parse(`${day.date}`) === Date.parse(`${TODAY}`)
  );
  const systems = days[idx].systems;

  const updateDay = () => {
    if (systems[i].times > 0) {
      let newDays = [...days];
      let newSystem = [...systems];

      newSystem[i] = { text: systems[i].text, times: systems[i].times - 1 };
      newDays[idx] = {
        date: newDays[idx].date,
        systems: newSystem,
      };

      setDays(newDays);
    }
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
      disabled={updating || !(systems[i].times > 0)}
      onClick={handleClick}
    >
      {systems[i].times ? (
        totalTimes > 1 ? (
          <div className="border dark:border-white border-black text-sm pt-[1px] dark:hover:bg-neutral-800 hover:bg-neutral-200 rounded h-[18px] w-[18px] flex items-center justify-center">
            {totalTimes - systems[i].times}
          </div>
        ) : (
          <Square />
        )
      ) : (
        <CheckSquare />
      )}
    </button>
  );
};

export default CounterCheckButton;
