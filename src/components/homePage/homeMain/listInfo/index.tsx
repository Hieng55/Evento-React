import "./main.css"
export const ListInfo = () => {
  return (
    <div className="list-info p-20 flex ">
      <ul className="flex items-center justify-between w-full">
        <li>
          <i className="fa-regular fa-calendar"></i>
          <div className="group-info">
            <h5>DATE</h5>
            <p>12-14 february 2018</p>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-location-dot"></i>
          <div className="group-info">
            <h5>LOCATION</h5>
            <p>Los Angeles, CA.</p>
          </div>
        </li>
        <li>
          <i className="fa-regular fa-user"></i>
          <div className="group-info">
            <h5>SPEAKERS</h5>
            <p>Natalie James + guests</p>
          </div>
        </li>
        <li>
          <i className="fa-solid fa-ticket"></i>
          <div className="group-info">
            <h5>TICKETS</h5>
            <p>$65 early bird</p>
          </div>
        </li>
      </ul>
    </div>
  );
};
