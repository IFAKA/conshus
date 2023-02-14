import { List, TextArea, TotalMoneyTable } from "@/components";
import { useBudget } from "@/hooks";

const Budget = () => {
  const { budget, deleteTx, updateTx, addTx } = useBudget();
  return (
    <>
      <TotalMoneyTable />
      <List
        items={budget}
        position="bottom-right"
        onDelete={deleteTx}
        onUpdate={updateTx}
      />
      <TextArea placeholder={"Transaction"} onSubmit={addTx} />
    </>
  );
};

export default Budget;
