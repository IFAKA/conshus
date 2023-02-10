import { useAtom } from "jotai";
import { budgetAtom, textAreaAtom } from "../../store";
import TextArea from "../TextArea/TextArea";
import TotalMoneyTable from "../TotalMoneyTable/TotalMoneyTable";
import TxList from "../TxList/TxList";

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
