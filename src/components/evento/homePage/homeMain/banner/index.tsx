import "./main.css";
export const Banner = () => {
  return (
    <div className="banner h-screen flex items-end banner bg-center bg-no-repeat bg-cover relative z-10">
      <div className="content-banner w-full h-3/4 pl-40 pt-20 bg-black bg-opacity-40">
        <h5 className="text-white text-4xl mb-4">PREPARE YOURSELF FOR THE</h5>
        <h3 className="text-8xl font-extrabold mb-4 text-[#f50136]">CONFERENCE</h3>
        <h6 className="text-white font-normal text-base mb-9">12-14 FEBRUARY 2018 - LOS ANGELES, CA</h6>
        <button
          className="btn-banner bg-[#f50136] text-white w-52 h-11 rounded-3xl text-sm font-medium transition duration-500 hover:bg-gray-900"
          type="button"
        >
          BUY TICKETS NOW
        </button>
        <div className="trapezoid absolute ">
          <ul className="flex items-center gap-1">
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
