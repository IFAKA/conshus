import { useAtom } from "jotai";
import { useMemo } from "react";
import { budgetAtom } from "../../store";
import { compactNumber, getLastNumber } from "../../utils";
import { CopyButton } from "../CopyButton";
import { MonthSelector } from "../MonthSelector";

const TotalMoneyTable = () => {
  const [budget] = useAtom(budgetAtom);

  const total = useMemo(
    () =>
      budget?.reduce((prv, { text }) => {
        const crrNmb = getLastNumber(text);
        return +(prv + crrNmb).toFixed(2);
      }, 0),
    [budget]
  );

  return (
    <div className="flex justify-between mx-2">
      <CopyButton
        className="flex w-fit mr-2 items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer bg-neutral-200 dark:bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl"
        value={total}
      >
        <>
          <h3 className="font-bold mr-2">Total:</h3>
          <span>{total ? compactNumber(total) : "?"}</span>
        </>
      </CopyButton>
      <MonthSelector />
    </div>
  );
};

export default TotalMoneyTable;
