import { useEffect, useState } from "react";
export const Counter = () => {
  const [count, setCount] = useState<number>(4);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  useEffect(() => {
    let idInterVal: number;
    if (isRunning) {
      idInterVal = setInterval(() => {
        count === 0 ? clearInterval(idInterVal) : setCount(count - 1);
      }, 1000);
    }
    return () => clearInterval(idInterVal);
  }, [count, isRunning]);
  function play() {
    setIsRunning(true);
    setIsHidden(true);
  }
  function pause() {
    setIsHidden(false);
    setIsRunning(false);
  }
  function reset() {
    setIsHidden(false);
    setIsRunning(false);
    setCount(4);
  }

  return (
    <div>
      <h3 className="text-center text-2xl mb-2">{count}</h3>
      <div className="flex gap-1">
        {!isHidden ? (
          <button onClick={play} className="text-white bg-orange-500 p-2">
            Play
          </button>
        ) : (
          <button onClick={pause} className="text-white bg-orange-500 p-2">
            Pause
          </button>
        )}
        <button onClick={reset} className="text-white bg-orange-500 p-2">
          Reset
        </button>
      </div>
    </div>
  );
};
