import "./main.css";
export const CountEvent = () => {
  return (
    <>
      <div className="countEvent bg-center bg-no-repeat bg-cover text-center relative">
        <div className="bg-black opacity-50 absolute w-full h-full "></div>
        <div className="content relative p-20">
          <h5 className="title-countEvent text-2xl mb-12 font-semibold text-white">Counter until the big event</h5>
          <ul className="flex justify-center text-center gap-5">
            <li>
              <h4>00</h4>
              <h6>Weeks</h6>
            </li>
            <li>
              <h4>00</h4>
              <h6>Days</h6>
            </li>
            <li>
              <h4>00</h4>
              <h6>Hours</h6>
            </li>
            <li>
              <h4>00</h4>
              <h6>Minutes</h6>
            </li>
            <li>
              <h4>00</h4>
              <h6>Seconds</h6>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
