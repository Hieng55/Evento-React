import "./main.css";
import b1 from "../../../../assets/brandLogo/b1.png.webp";
import b3 from "../../../../assets/brandLogo/b3.png.webp";
import b4 from "../../../../assets/brandLogo/b4.png.webp";
import b5 from "../../../../assets/brandLogo/b5.png.webp";

export const OurPartners = () => {
  return (
    <div className="ourPartners title w-9/12 m-auto pt-24 pb-24 ">
      <h4 className="title-head text-3xl font-bold inline-block relative mb-7">OUR SPEAKERS</h4>
      <ul className="brand flex justify-between p-10 ">
        <li>
          <img className="opacity-55" src={b1} alt="" />
        </li>
        <li>
          <img className="opacity-55" src={b4} alt="" />
        </li>
        <li>
          <img className="opacity-55" src={b3} alt="" />
        </li>
        <li>
          <img className="opacity-55" src={b5} alt="" />
        </li>
        <li>
          <img className="opacity-55" src={b4} alt="" />
        </li>
      </ul>
    </div>
  );
};
