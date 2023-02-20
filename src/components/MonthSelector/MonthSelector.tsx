import { MONTHS } from "@/constants";
import { budgetAtom } from "@/store";
import { compactNumber, getLastNumber } from "@/utils";
import { useAtom } from "jotai";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useMemo, useState } from "react";
import { CopyButton } from "../CopyButton";

const crrYear = new Date().getFullYear() + "";
const crrMonthIdx = new Date().getMonth();

const MonthSelector = () => {
  const [budget] = useAtom(budgetAtom);
  const [monthIdx, setMonthIdx] = useState(crrMonthIdx);

  const months = useMemo(
    () =>
      MONTHS.map((month) => {
        const thisMonth = budget.filter(
          ({ date }) => date.month === month && date.year === crrYear
        );
        const totalMonth = thisMonth.reduce((prv, { text }) => {
          const crrNmb = getLastNumber(text);
          return +(prv + crrNmb).toFixed(2);
        }, 0);
        return { name: month, total: totalMonth };
      }),
    [budget]
  );

  const handleDecrease = () =>
    monthIdx > 0
      ? setMonthIdx((crr) => crr - 1)
      : setMonthIdx(MONTHS.length - 1);

  const handleIncrease = () =>
    monthIdx < MONTHS.length - 1
      ? setMonthIdx((crr) => crr + 1)
      : setMonthIdx(0);

  return (
    <div className="flex">
      <button
        onClick={handleDecrease}
        className="hover:disabled:cursor-default disabled:opacity-50 hover:disabled:bg-neutral-800 disabled:bg-neutral-800 disabled:hover:bg-neutral-800 flex w-fit items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer bg-neutral-200 dark:bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-2 py-[7px] rounded-l-xl"
        aria-label="Previous month"
      >
        <CaretLeft />
      </button>
      <CopyButton
        name={months[monthIdx].name}
        className="w-[110px] justify-center border-x-2 dark:border-neutral-900 border-white flex items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer bg-neutral-200 dark:bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px]"
        value={months[monthIdx].total}
      >
        <>
          <span className=" font-semibold mr-1">{months[monthIdx].name}:</span>
          <span>
            {months[monthIdx].total
              ? compactNumber(months[monthIdx].total)
              : "?"}
          </span>
        </>
      </CopyButton>
      <button
        onClick={handleIncrease}
        className="hover:disabled:cursor-default disabled:opacity-75 disabled:hover:bg-neutral-800 flex w-fit items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer bg-neutral-200 dark:bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-2 py-[7px] rounded-r-xl"
        aria-label="Next month"
      >
        <CaretRight />
      </button>
    </div>
  );
};

export default MonthSelector;
