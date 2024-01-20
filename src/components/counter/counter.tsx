import { useRef, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(4);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const intervalId = useRef<number | undefined>(undefined);
  function play() {
    setIsHidden(true);
    intervalId.current = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(intervalId.current);
          return prevCount;
        }
        return prevCount - 1;
      });
    }, 1000);
  }
  function pause() {
    console.log("pause");

    setIsHidden(false);
    clearInterval(intervalId.current);
  }
  function reset() {
    setIsHidden(false);
    clearInterval(intervalId.current);
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
