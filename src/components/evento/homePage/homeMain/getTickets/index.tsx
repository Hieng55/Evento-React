import "./main.css";
export const GetTickets = () => {
  return (
    <div className="getTickets p-24">
      <div className="w-9/12 flex justify-center m-auto text-white">
        <div className="contentTickets">
          <h4 className="title-head text-3xl font-bold flex relative mb-16">GET YOUR TICKETS</h4>
          <div className="groupTickets flex justify-center h-12">
            <p className="font-light text-sm w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec gravida tempus. Integer iaculis in aazzzCurabitur a
              pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.
            </p>
            <div className="w-1/4 flex justify-end">
              <button className="btn bg-[#f50136] w-36 rounded-3xl text-xs" type="button">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
