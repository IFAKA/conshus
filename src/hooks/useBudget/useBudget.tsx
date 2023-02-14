import { budgetAtom, cursorAtom } from "@/store";
import { useAtom } from "jotai";

const useBudget = () => {
  const [budget, setBudget] = useAtom(budgetAtom);
  const [cursor] = useAtom(cursorAtom);

  const deleteTx = () => {
    const systemToDelete = budget[cursor];
    const newtrackers = budget.filter((system) => system !== systemToDelete);
    setBudget(newtrackers);
  };

  const updateTx = (value: string) => {
    let newtrackers = [...budget];
    newtrackers[cursor] = { text: value, date: newtrackers[cursor].date };
    setBudget(newtrackers);
  };

  const addTx = (value: string) =>
    setBudget((crr) => [
      {
        date: {
          month: new Date().toLocaleString("en-US", {
            month: "short",
          }),
          year: new Date().toLocaleString("en-US", {
            year: "numeric",
          }),
        },
        text: value.trim(),
      },
      ...crr,
    ]);
  return { budget, deleteTx, updateTx, addTx };
};

export default useBudget;
