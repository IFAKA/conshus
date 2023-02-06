const arr = new Array(365).fill(0);
const days = arr.map(() => parseInt(`${Date.now() * Math.random()}`));
const allDone = (i: number) => i % 3 === 0;
const somthingMissing = (i: number) => i % 2 === 0;
const YearGrid = () => {
  return (
    <>
      <div className="mx-2 mb-2 p-0.5 display flex justify-center items-center flex-wrap rounded hover:cursor-pointer hover:bg-neutral-600 bg-neutral-800">
        {days.map((day) => (
          <div
            key={day}
            className="overflow-hidden p-0.5 flex justify-center items-center"
          >
            <div
              className={`p-[3px] rounded-full w-full ${
                allDone(day)
                  ? "bg-neutral-100"
                  : somthingMissing(day) && "bg-neutral-500"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default YearGrid;
