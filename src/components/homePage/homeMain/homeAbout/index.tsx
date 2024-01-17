import "./main.css";
export const HomeAbout = () => {
  return (
    <div className="home-about p-14 w-full flex justify-center">
      <div className="home-about-group w-9/12">
        <h4 className="title-head text-3xl font-bold inline-block relative mb-7">ABOUT THE EVENT</h4>

        <div className="group-card flex gap-3 ">
          <div className="home-about-content ">
            <div className="content">
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
                accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
                volutpat ligula euismod.
              </p>
              <div className="card-left flex gap-2">
                <div className="card-info-content p-10">
                  <i className="fa-solid fa-microphone"></i>
                  <h4 className="font-bold text-2xl">9 Speakers</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.</p>
                  <strong>Read More</strong>
                </div>
                <div className="card-info-content p-10">
                  <i className="fa-solid fa-rocket"></i>
                  <h4 className="font-bold text-2xl">9 Speakers</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.</p>
                  <strong>Read More</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about-content">
            <div className="content">
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
                accumsan. Pellentesque convallis consectetur tortor id placerat. Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
                volutpat ligula euismod.
              </p>
              <div className="card-left flex gap-2">
                <div className="card-info-content p-10">
                  <i className="fa-solid fa-bullhorn"></i>
                  <h4 className="font-bold text-2xl">9 Speakers</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.</p>
                  <strong>Read More</strong>
                </div>
                <div className="card-info-content p-10">
                  <i className="fa-regular fa-clock"></i>
                  <h4 className="font-bold text-2xl">9 Speakers</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus massa nec graviante.</p>
                  <strong>Read More</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
