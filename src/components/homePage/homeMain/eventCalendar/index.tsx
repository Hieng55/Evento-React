import "./main.css";
import c1 from "../../../../assets/event/c1.png.webp";
import c2 from "../../../../assets/event/c2.png.webp";
import c3 from "../../../../assets/event/c3.png.webp";
export const EventCalendar = () => {
  return (
    <div className="event-calendar w-9/12 mx-auto my-auto pt-12 ">
      <div className=" event-calendar-head flex items-center gap-2 bg-[#f50136] p-3 text-white">
        <i className="fa-regular fa-calendar text-3xl"></i>
        <h5 className="text-lg">Next Events Calendar </h5>
      </div>
      <div className="event-calendar-content">
        <div className="event-calendar-detail flex justify-between text-center items-center p-3 bg-slate-200">
          <img src={c1} alt="" />
          <div className="time-event">
            <h4 className="text-2xl font-bold">14</h4>
            <h5>February</h5>
          </div>
          <div className="info-event">
            <h4 className="font-bold text-lg mb-2">Conference in Amsterdam</h4>
            <h5 className="font-bold text-sm mb-2">08 AM - 04 PM</h5>
            <h6 className="text-gray-500 text-sm">Speaker: Daniel Hill</h6>
          </div>
          <button className="btn bg-[#f50136] text-white w-32 h-10  text-xs rounded-3xl" type="button">
            READ MORE
          </button>
          <a className="text-[#f50136] font-bold text-sm pr-10 underline" href="#">
            Buy Now
          </a>
        </div>
        <div className="event-calendar-detail flex justify-between text-center items-center p-3 bg-slate-200">
          <img src={c2} alt="" />
          <div className="time-event">
            <h4 className="text-2xl font-bold">18</h4>
            <h5>February</h5>
          </div>
          <div className="info-event">
            <h4 className="font-bold text-lg mb-2">Conference in Amsterdam</h4>
            <h5 className="font-bold text-sm mb-2">08 AM - 04 PM</h5>
            <h6 className="text-gray-500 text-sm">Speaker: Daniel Hill</h6>
          </div>
          <button className="btn bg-[#f50136] text-white w-32 h-10  text-xs rounded-3xl" type="button">
            READ MORE
          </button>
          <a className="text-[#f50136] font-bold text-sm pr-10 underline" href="#">
            Buy Now
          </a>
        </div>
        <div className="event-calendar-detail flex justify-between text-center items-center p-3 bg-slate-200">
          <img src={c3} alt="" />
          <div className="time-event">
            <h4 className="text-2xl font-bold">22</h4>
            <h5>February</h5>
          </div>
          <div className="info-event">
            <h4 className="font-bold text-lg mb-2">Conference in Amsterdam</h4>
            <h5 className="font-bold text-sm mb-2">08 AM - 04 PM</h5>
            <h6 className="text-gray-500 text-sm">Speaker: Daniel Hill</h6>
          </div>
          <button className="btn bg-[#f50136] text-white w-32 h-10  text-xs rounded-3xl" type="button">
            READ MORE
          </button>
          <a className="text-[#f50136] font-bold text-sm pr-10 underline" href="#">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
