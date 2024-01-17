import "./main.css";
export const NavBar = () => {
  return (
    <div className="navbar w-4/5 p-4 ">
      <div className="group-navbar flex items-center justify-between">
        <div className="logo-navbar">
          <img src="https://preview.colorlib.com/theme/evento/assets/img/logo.png" alt="" />
        </div>
        <ul className="navbar-menu flex gap-5 text-white">
          <li>HOME</li>
          <li>SPEAKERS</li>
          <li>EVENTS</li>
          <li>NEWS</li>
          <li>CONTACT</li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
