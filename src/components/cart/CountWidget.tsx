const CountWidget = ({
  increaseCount,
  decreaseCount,
  count,
}: {
  increaseCount: () => void;
  decreaseCount: () => void;
  count: number;
}) => {
  return (
    <div className="flex shrink-0 items-center justify-center p-2 border border-1 border-gray-200 rounded-lg">
      <button
        className="shrink-0 px-2 text-md text-gray-500"
        onClick={event => {
          event.stopPropagation();
          increaseCount();
        }}
      >
        +
      </button>
      <span className="w-[50px] flex-1 text-center appearance-none">{count}</span>
      <button
        className="shrink-0 px-2 text-md text-gray-500"
        onClick={event => {
          event.stopPropagation();
          decreaseCount();
        }}
      >
        -
      </button>
    </div>
  );
};

export default CountWidget;
