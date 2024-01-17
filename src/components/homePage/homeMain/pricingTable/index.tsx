import "./main.css";
export const PricingTable = () => {
  return (
    <div className="group-pricingTable pt-20 pb-20 ">
      <div className="w-9/12 m-auto">
        <h4 className="title-head text-3xl font-bold inline-block relative mb-7">OUR SPEAKERS</h4>
      </div>
      <div className="list-pricingTable w-9/12 m-auto flex flex-wrap gap-9">
        <div className="card text-center pt-16 pb-16 relative">
          <div className="card-content">
            <h5 className="font-bold text-2xl mb-1">Early Bird</h5>
            <p className="text-gray-600 text-sm mb-3">For The Fast Ones</p>
            <h3 className="flex justify-center gap-1 mb-3">
              <span className="text-5xl font-semibold">65</span>
              <span>
                <i className="fa-solid fa-dollar-sign text-gray-400 text-xl"></i>
              </span>
            </h3>
            <ul>
              <li className="text-gray-600 text-sm mb-6">Front seat</li>
              <li className="text-gray-600 text-sm mb-6">Complementary Drinks</li>
              <li className="text-gray-600 text-sm mb-6">Early Entrance</li>
              <li className="text-gray-600 text-sm mb-6">Promo Gift</li>
            </ul>
            <button
              className="btn bg-[#f50136]  text-white w-40 h-11 text-xs font-medium rounded-full transition duration-500 hover:bg-gray-900"
              type="button"
            >
              PURCHASE
            </button>
          </div>
          <div className="tab absolute bg-[#f50136] text-white font-bold text-xs p-3 top-0">RECOMMENDED</div>
        </div>
        <div className="card text-center pt-16 pb-16 relative">
          <div className="card-content">
            <h5 className="font-bold text-2xl mb-1">Corporate</h5>
            <p className="text-gray-600 text-sm mb-3">For The Business</p>
            <h3 className="flex justify-center gap-1 mb-3">
              <span className="text-5xl font-semibold">95</span>
              <span>
                <i className="fa-solid fa-dollar-sign text-gray-400 text-xl"></i>
              </span>
            </h3>
            <ul>
              <li className="text-gray-600 text-sm mb-6">Front seat</li>
              <li className="text-gray-600 text-sm mb-6">Complementary Drinks</li>
              <li className="text-gray-600 text-sm mb-6">Early Entrance</li>
              <li className="text-gray-600 text-sm mb-6">Promo Gift</li>
            </ul>
            <button
              className="btn bg-[#f50136]  text-white w-40 h-11 text-xs font-medium rounded-full transition duration-500 hover:bg-gray-900"
              type="button"
            >
              PURCHASE
            </button>
          </div>
          <div className="tab absolute bg-[#f50136] text-white font-bold text-xs p-3 top-0">RECOMMENDED</div>
        </div>
        <div className="card text-center pt-16 pb-16 relative">
          <div className="card-content">
            <h5 className="font-bold text-2xl mb-1">Early Bird</h5>
            <p className="text-gray-600 text-sm mb-3">For The Fast Ones</p>
            <h3 className="flex justify-center gap-1 mb-3">
              <span className="text-5xl font-semibold">65</span>
              <span>
                <i className="fa-solid fa-dollar-sign text-gray-400 text-xl"></i>
              </span>
            </h3>
            <ul>
              <li className="text-gray-600 text-sm mb-6">Front seat</li>
              <li className="text-gray-600 text-sm mb-6">Complementary Drinks</li>
              <li className="text-gray-600 text-sm mb-6">Early Entrance</li>
              <li className="text-gray-600 text-sm mb-6">Promo Gift</li>
            </ul>
            <button
              className="btn bg-[#f50136]  text-white w-40 h-11 text-xs font-medium rounded-full transition duration-500 hover:bg-gray-900"
              type="button"
            >
              PURCHASE
            </button>
          </div>
          <div className="tab absolute bg-[#f50136] text-white font-bold text-xs p-3 top-0">RECOMMENDED</div>
        </div>
      </div>
    </div>
  );
};
