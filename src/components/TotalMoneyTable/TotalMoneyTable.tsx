import { useAtom } from "jotai";
import { Check } from "phosphor-react";
import { useMemo, useState } from "react";
import { budgetAtom, cursorAtom } from "../../store";

const monthss = [
  { name: "Jan", total: 3502000 },
  { name: "Feb", total: 3330 },
  { name: "Mar", total: 3501000 },
  { name: "Apr", total: 3500000 },
  { name: "May", total: 35000 },
  { name: "Jun", total: 3500000 },
  { name: "Jul", total: 3504000 },
  { name: "Aug", total: 3500000 },
  { name: "Sep", total: 3507000 },
  { name: "Oct", total: 500000 },
  { name: "Nov", total: 500000 },
  { name: "Dec", total: 300000 },
];

const compactNumber = (nmb: number) =>
  Intl.NumberFormat("en", { notation: "compact" }).format(nmb);

const getLastNumber = (string: string) => {
  const crrNmb = string.match(/(-?\d[\d\.]*)/g) ?? [0];
  return +crrNmb[crrNmb.length - 1];
};

const TotalMoneyTable = () => {
  const [budget] = useAtom(budgetAtom);
  const [cursor, setCursor] = useAtom(cursorAtom);
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
      monthss.map((month) => {
        const thisMonth = budget.filter(({ date }) => date === month.name);
        const totalMonth = thisMonth.reduce((prv, { text }) => {
          const crrNmb = getLastNumber(text);
          return +(prv + crrNmb).toFixed(2);
        }, 0);
        return { name: month.name, total: totalMonth };
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
        className="flex mx-2 mb-2 items-center hover:bg-neutral-700 hover:cursor-pointer bg-neutral-800 whitespace-pre-wrap text-lg leading-6 px-[11px] py-[7px] rounded-xl"
      >
        {copied === "total" ? (
          <>
            <span>Copied</span>
            <Check className="ml-1" />
          </>
        ) : (
          <>
            <h3 className="font-bold mr-2">Total:</h3>
            <span>{total}</span>
          </>
        )}
      </button>
      <div className="grid grid-cols-4 mx-2 rounded-xl bg-neutral-800 overflow-hidden mb-2">
        {months.map(({ name, total }, i) => (
          <button
            name={name}
            value={total}
            onClick={handleCopy}
            disabled={!!copied}
            className={`hover:disabled:cursor-default text-base display flex justify-center items-center flex-wrap py-1 hover:cursor-pointer hover:bg-neutral-600`}
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
                <span>{compactNumber(total)}</span>
              </>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default TotalMoneyTable;
