import { useEffect, useRef, useState } from "react";
import { getData } from "../../services/callApi";
import { ApiResponse } from "../../services/interface";
import Button from "../../shared/button";
import "./index.css";

export const LazyLoad = () => {
  const [products, setProducts] = useState<ApiResponse[]>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const textRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const imageRefs = useRef<Array<HTMLHeadingElement | null>>([]);

  useEffect(() => {
    getData("products")
      .then(setProducts)
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const toggleClass = (className: string) => target.classList.toggle(className, isIntersecting);
        if (target.classList.contains("card")) toggleClass("slide");
        else if (target.classList.contains("btn")) toggleClass("animate");
        else if (target.classList.contains("text-title")) toggleClass("left");
        else if (target.classList.contains("img")) toggleClass("scale");
      });
    });

    [...cardRefs.current, ...btnRefs.current, ...textRefs.current, ...imageRefs.current].forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [products]);

  return (
    <div className="shop-product mt-5 flex flex-wrap gap-5 justify-center pt-7 pb-7">
      {products.length > 0 ? (
        products.map((item, index) => (
          <div
            ref={(element) => (cardRefs.current[index] = element)}
            key={item.id}
            className={`card w-1/5 hover:shadow-ctShadow1 cursor-pointer group overflow-hidden`}
          >
            <div className="image overflow-hidden h-60">
              <img ref={(element) => (imageRefs.current[index] = element)} className="img object-cover w-full h-full" src={item.image} alt="" />
            </div>
            <div className="content bg-slate-200 p-2">
              <span className="text-gray-500 text-xs">{item.category}</span>
              <h5 ref={(element) => (textRefs.current[index] = element)} className="text-title text-ctBlue7 text-sm font-medium mt-2 mb-2 truncate">
                {item.title}
              </h5>
              <h4>
                <span className="text-red-600 font-semibold mr-2">${item.price}</span>
                <del className="text-slate-500 text-sm">${item.price}</del>
              </h4>
              <div>
                <Button
                  ref={(element) => (btnRefs.current[index] = element)}
                  fullWidth
                  className="btn group-hover:bg-ctGreen5 mt-2 rounded duration-500"
                >
                  ADD CART
                </Button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>no product</div>
      )}
    </div>
  );
};
