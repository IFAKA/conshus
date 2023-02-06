import { useAtom } from "jotai";
import { MonthType } from "../../models";
import { budgetAtom, textAreaAtom } from "../../store";
import TextArea from "../TextArea/TextArea";
import TotalMoneyTable from "../TotalMoneyTable/TotalMoneyTable";
import TxList from "../TxList/TxList";

const Budget = () => {
  const [value] = useAtom(textAreaAtom);
  const [budget, setBudget] = useAtom(budgetAtom);

  const addItem = () => {
    if (!budget.some((tx) => tx.text === value.trim())) {
      setBudget((crr) => [
        {
          date: new Date().toLocaleString("en-US", {
            month: "short",
          }) as MonthType,
          text: value.trim(),
        },
        ...crr,
      ]);
    }
  };

  return (
    <>
      <TotalMoneyTable />
      <TxList />
      <TextArea placeholder={"Tx"} onSubmit={addItem} />
    </>
  );
};

export default Budget;
