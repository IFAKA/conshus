import { useAtom } from "jotai";
import { budgetAtom, textAreaAtom } from "../../store";
import { TotalMoneyTable } from "../TotalMoneyTable";
import { TxList } from "../TxList";
import { TextArea } from "../TextArea";

const Budget = () => {
  const [value] = useAtom(textAreaAtom);
  const [, setBudget] = useAtom(budgetAtom);

  const addItem = () =>
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

  return (
    <>
      <TotalMoneyTable />
      <TxList />
      <TextArea placeholder={"Transaction"} onSubmit={addItem} />
    </>
  );
};

export default Budget;
