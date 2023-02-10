import { useAtom } from "jotai";
import { Check } from "phosphor-react";
import { useMemo, useState } from "react";
import { MONTHS } from "../../constants";
import { budgetAtom, cursorAtom } from "../../store";
import { compactNumber, getLastNumber } from "../../utils";

const crrYear = new Date().getFullYear() + "";

const TotalMoneyTable = () => {
  const [budget] = useAtom(budgetAtom);
  const [, setCursor] = useAtom(cursorAtom);
  const [copied, setCopied] = useState("");

  const total = useMemo(
    () =>
      budget?.reduce((prv, { text }) => {
        const crrNmb = getLastNumber(text);
        return +(prv + crrNmb).toFixed(2);
      }, 0),
    [budget]
  );

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

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTimeout(() => {
      setCopied("");
      setCursor(-1);
    }, 500);
    setCopied(e.currentTarget.name);
    navigator.clipboard.writeText(`${e.currentTarget.value}`);
  };

  return (
    <>
      <button
        name="total"
        value={total}
        onClick={handleCopy}
        disabled={!!copied}
        className="flex mx-2 mb-2 items-center hover:bg-neutral-300 dark:hover:bg-neutral-700 hover:cursor-pointer bg-neutral-200 dark:bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl"
      >
        {copied === "total" ? (
          <>
            <span>Copied</span>
            <Check className="ml-1" />
          </>
        ) : (
          <>
            <h3 className="font-bold mr-2">Total:</h3>
            <span>{total ? total : "?"}</span>
          </>
        )}
      </button>
      <div className="grid grid-cols-4 mx-2 rounded-xl overflow-hidden mb-2">
        {months.map(({ name, total }, i) => (
          <button
            name={name}
            value={total}
            onClick={handleCopy}
            disabled={!!copied}
            className={`bg-neutral-200 dark:bg-neutral-800 hover:disabled:cursor-default text-base display flex justify-center items-center flex-wrap py-1 hover:cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600`}
            key={name}
          >
            {copied === name ? (
              <>
                <span>Copied</span>
                <Check className="ml-1" />
              </>
            ) : (
              <>
                <span className=" font-semibold mr-1">{name}:</span>
                <span>{total > 0 ? compactNumber(total) : "?"}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default TotalMoneyTable;
