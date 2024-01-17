import "./main.css";
import c1 from "../../../assets/event/c1.png.webp";
import c2 from "../../../assets/event/c2.png.webp";
import c3 from "../../../assets/event/c3.png.webp";
export const Footer = () => {
  return (
    <>
      <div className="list-footer bg-[#0b031b] flex justify-center pt-16 pb-16 ">
        <div className="w-10/12 flex ">
          <div className="media w-1/3 p-10">
            <img className="mb-10" src="https://preview.colorlib.com/theme/evento/assets/img/logo.png.webp" alt="" />
            <p className="text-[#919191] text-sm mb-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec gravida tempus. Integer iaculis in aazzzCurabitur a
              pulvinar nunc. Maecenas laoreet finibus lectus, at volutpat ligula euismod.
            </p>
            <ul className="social-media-icon flex gap-3">
              <li className="border border-solid border-[#f50136] transition-all duration-500 flex w-10 h-10 items-center justify-center cursor-pointer rounded-full">
                <i className="text-[#f50136] text-lg fa-brands fa-pinterest "></i>
              </li>
              <li className="border border-solid border-[#f50136] transition-all duration-500 flex w-10 h-10 items-center justify-center cursor-pointer rounded-full">
                <i className="text-[#f50136] text-lg fa-brands fa-facebook-f"></i>
              </li>
              <li className="border border-solid border-[#f50136] transition-all duration-500 flex w-10 h-10 items-center justify-center cursor-pointer rounded-full">
                <i className="text-[#f50136] text-lg fa-brands fa-twitter"></i>
              </li>
              <li className="border border-solid border-[#f50136] transition-all duration-500 flex w-10 h-10 items-center justify-center cursor-pointer rounded-full">
                <i className="text-[#f50136] text-lg fa-brands fa-dribbble"></i>
              </li>
              <li className="border border-solid border-[#f50136] transition-all duration-500 flex w-10 h-10 items-center justify-center cursor-pointer rounded-full">
                <i className="text-[#f50136] text-lg fa-brands fa-instagram"></i>
              </li>
            </ul>
          </div>
          <div className="instagram w-1/3 p-10">
            <h4 className="title-head text-base text-white font-bold inline-block relative mb-7">INSTAGRAM</h4>
            <ul className="flex flex-wrap gap-2 list-image">
              <li>
                <img className="overflow-hidden w-full h-full" src={c1} alt="" />
              </li>
              <li>
                <img className="overflow-hidden w-full h-full" src={c2} alt="" />
              </li>
              <li>
                <img className="overflow-hidden w-full h-full" src={c3} alt="" />
              </li>
              <li>
                <img className="overflow-hidden w-full h-full" src={c2} alt="" />
              </li>
              <li>
                <img className="overflow-hidden w-full h-full" src={c1} alt="" />
              </li>
              <li>
                <img className="overflow-hidden w-full h-full" src={c3} alt="" />
              </li>
            </ul>
          </div>
          <div className="subscribe w-1/3 p-10">
            <h4 className="title-head text-base text-white font-bold inline-block relative mb-7">SUBSCRIBE TO OUR NEWSLETTER</h4>
            <input className="bg-[#6a3eb629] text-white pl-4 w-full h-11 border-0 outline-none" type="text" placeholder="E-mail here" />
            <button className="btn w-full mt-7 text-xs text-white font-medium p-4 rounded-3xl">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="footer-menu bg-[#080113]">
        <div className="footer-menu-content w-10/12 p-5 m-auto flex items-center justify-between">
          <p className="text-white text-xs">
            Copyright ©2024 All Rights Reserved | This Template Is Made With <i className="fa-regular fa-heart"></i> By Colorlib
          </p>
          <ul className="flex gap-5 text-sm text-[#919191] ">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Speakers</li>
            <li className="hover:text-white cursor-pointer">Events</li>
            <li className="hover:text-white cursor-pointer">News</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
