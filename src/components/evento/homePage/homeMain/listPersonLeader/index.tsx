import "./main.css";
import { data } from "./data";
export const ListPersonLeader = () => {
  const dataPerson = data;
  return (
    <div className="list-person pt-8">
      <div className="list-person-title w-9/12 m-auto">
        <h4 className="title-head text-3xl font-bold inline-block relative mb-7">OUR SPEAKERS</h4>
      </div>
      <div className="list-leader flex flex-wrap">
        {dataPerson.map((data) => {
          return (
            <div className="box w-1/4 relative cursor-pointer " key={data.id}>
              <div className="image overflow-hidden">
                <img className="w-full h-full object-cover " src={data.avatar} alt="" />
              </div>
              <div className="info-leader bg-gray-900 w-2/4 p-3 absolute bottom-6 left-0">
                <h5 className="text-red-600 font-semibold">{data.name}</h5>
                <p className="text-white text-xs">{data.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
