import { Input } from "./../../shared/input/index";
import Button from "./../../shared/button/index";
import { Facebook } from "../../icons/socialMedia/Facebook";
import { Twitter } from "../../icons/socialMedia/Twitter";
import { Google } from "../../icons/socialMedia/Google";
import { Youtube } from "../../icons/socialMedia/Youtube";

export const Footer = () => {
  const mediaComponents = [Facebook, Twitter, Google, Youtube];
  const listCategories = ["Fruits & Vegetables", "Dairy Products", "Package Foods", "Beverage", "Health & Wellness"];
  return (
    <>
      <div className="footer bg-ctBlue7 p-10 text-white ">
        <div className="footer-container flex gap-3 w-11/12 m-auto">
          <div className="container-help w-1/4">
            <h4 className="text-base font-semibold">LET US HELP YOU</h4>
            <p className="m-3 ml-0 text-sm font-light">
              If you have any question, please contact us at: <br />
              <span className="mt-2 block font-semibold text-ctGreen5">support@example.com</span>
            </p>
            <span className="text-sm font-light">Social Media:</span>
            <ul className="flex-columns gap-3 mt-4">
              {mediaComponents.map((Component, index) => (
                <li key={index}>
                  <Component className="w-5 " />
                </li>
              ))}
            </ul>
          </div>
          <div className="container-looking w-1/4">
            <h4 className="text-base font-semibold">LOOKING FOR ORFARM?</h4>
            <p className="m-3 ml-0 text-sm font-light">68 St. Vicent Place, Glasgow, Greater Newyork NH2012, UK</p>
            <ul>
              <li className="font-light text-sm mb-5">
                Monday – Friday: <span className="font-semibold">8:10 AM – 6:10 PM</span>
              </li>
              <li className="font-light text-sm mb-5">
                Saturday: <span className="font-semibold">10:10 AM – 06:10 PM</span>
              </li>
              <li className="font-light text-sm ">
                Sunday: <span className="font-semibold">Close</span>
              </li>
            </ul>
          </div>
          <div className="container-categories w-1/4">
            <h4 className="text-base font-semibold">HOT CATEGORIES</h4>
            <ul className="m-3 ml-0 font-light">
              {listCategories.map((item) => (
                <li
                  key={item}
                  className="text-sm mb-2 transition duration-500 ease-in-out cursor-pointer hover:pl-1 hover:text-orange-600 hover:font-semibold "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="container-newsletter w-1/4">
            <h4 className="text-base font-semibold">OUR NEWSLETTER</h4>
            <p className="font-light text-sm mb-4 m-3 ml-0">
              Subscribe to the Orfarm mailing list to receive <br />
              updates on new arrivals & other information.
            </p>
            <div className="group-email relative ">
              <Input
                placeholder="Your email address..."
                focus="primary"
                sizeInput="large"
                className="focus:shadow-ctShadow1 h-12 rounded text-black text-sm"
                fullWidth
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-ctGreen6 rounded">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
