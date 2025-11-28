import React, { useEffect, useState } from "react";
import ARROWBTN from "../assets/forward.png";

import QUOTE from "../assets/quote.png";
// import ColoredText from "../ui/ColoredText";
import Button from "../ui/Button";

const cardStackStyle = [
  " z-[2] object-contain translate-x-[8%] translate-y-[2%] scale-[105%] lg:scale-110 duration-300 group-hover:rotate-[-8deg] ",

  " z-[1] object-contain translate-x-[4%] translate-y-[3%] scale-[95%] lg:scale-[100%] duration-500 group-hover:rotate-[6deg] ",

  "z-[0] object-contain translate-x-0 translate-y-[6%] scale-[95%] lg:scale-[100%] duration-700 group-hover:rotate-[5deg] ",
];

const Carousel = ({ carouselData, quoteAuthor }) => {
  const [slideNum, setSlideNum] = useState(0);
  const [translatePosition, setTranslatePosition] = useState(0);
  const [carouselSliderWidth, setCarouselSliderWidth] = useState(
    carouselData?.length * 100,
  );
  const [navigationButtonArr, setNavigationButtonArr] = useState([]);

  // PREV FUNCTION
  const prevBtn = () => {
    if (slideNum === 0) {
      return setSlideNum(carouselData?.length - 1);
    }
    return setSlideNum((prev) => (prev -= 1));
  };

  // NEXT FUNCTION
  const nextBtn = () => {
    if (slideNum === carouselData?.length - 1) {
      return setSlideNum(0);
    }
    return setSlideNum((prev) => (prev += 1));
  };

  useEffect(() => {
    setTranslatePosition(slideNum * (100 / carouselData?.length));
  }, [slideNum, carouselData?.length]);

  useEffect(() => {
    setCarouselSliderWidth(carouselData?.length * 100);
    setNavigationButtonArr(
      Array.from({ length: carouselData?.length }, (_, i) => i),
    );
  }, [carouselData?.length]);

  useEffect(() => {
    const timer = setInterval(()=> {
        setSlideNum(prev => (prev + 1) % carouselData.length)
    }, 3000)
        return () => clearInterval(timer)
  }, [slideNum, carouselData.length])
  

  return (
    <div className="relative mx-auto flex h-[80%] w-full flex-col gap-[1rem] overflow-x-hidden mobile:gap-[2rem] md:gap-[5rem] ">
      {/* SLIDER */}
      <div
        style={{
          width: `${carouselSliderWidth}%`,
          transform: `translateX(-${translatePosition}%)`,
        }}
        className="flex transition-all duration-500 "
      >
        {/* CARDS */}
        {carouselData?.map((item, id) => {
          return (
            <div key={id} className="flex w-full">
              {/* LEFT */}
              <div className="flex basis-3/6 items-start justify-center ">
                {item.displaceImg ? (
                  <div className="group relative inline-block w-full h-[24rem] md:h-[28rem] lg:h-[32rem]">
                    {item.displaceImg.map((img, idx) => {
                      return (
                        <img
                          key={idx}
                          src={img.img}
                          alt=""
                          className={`absolute h-full ${cardStackStyle[idx]}`}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <img
                    src={item.image[0]}
                    alt=""
                    className="block object-contain"
                  />
                )}
              </div>

              {/* RIGHT */}
              <div className=" flex basis-2/3 flex-col justify-center gap-2 px-[.6rem] pt-[2rem] sm:basis-3/6 sm:gap-5 sm:px-[2rem]">
                {/* HEADER */}
                <h2 className="text-[15px] md:text-lg lg:text-2xl relative text-center font-bold">
                  {item.header}
                  
                  
                  {/* ColoredText  */}
                  {/* {item.headerPaintedText ? (
                    <ColoredText
                      text={item.header}
                      colorWords={item.headerPaintedText}
                    />
                  ) : (
                    item.header
                  )} */}
                </h2>

                {/* PARAGRAPH */}
                <p className="relative text-center text-xs md:text-[15px]">
                  {/* Text Quote */}
                  {/* {item.quote && (
                    <span className=" absolute right-0 top-[-15%] z-20 h-[2vw] translate-x-[50%]">
                      <img
                        className=" h-full object-contain"
                        src={QUOTE}
                        alt="quote"
                      />
                    </span>
                  )} */}

                  {item.content}

                  {/* {item.contentPaintedText ? (
                    <ColoredText
                      text={item.content}
                      colorWords={item.contentPaintedText}
                      color={item.contentColor}
                    />
                  ) : (
                    item.content
                  )} */}
                  {/* Text Quote */}
                  {item.quote && (
                    <span className=" absolute bottom-0 left-[-2%] h-[2vw] translate-x-[-50%]">
                      <img
                        className=" h-full rotate-180 object-contain"
                        src={QUOTE}
                        alt="quote"
                      />
                    </span>
                  )}
                 <div className="font-bold pt-2">
                     {/* QOUTE AUTHOR */}
                        {item?.quoteAuthor ?? (
                        <p className="text-lg md:text-[15px] text-center font-semibold">
                            {` ~${quoteAuthor}`}
                        </p>
                        )}
                        </div>
                </p>

                

                {/* BUTTON */}
                {/* {item.btnText && (
                  <div className="self-center ">
                    <Button
                      type="primary"
                      path={item.path}
                      externalLink={item?.externalLink}
                      children={item.btnText}
                      addstyle="py-3 text-[#ffff] xs:text-[.8rem] smobile:text-[.9rem] mobile:text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] btnText xs:py-[.2rem] mobile:py-[.2rem] sm:py-[.5rem] md:py-[.7rem]"
                    />
                  </div>
                )} */}
              </div>
            </div>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="mx-auto flex w-18 md:w-24 gap-x-3 py-2  ">
        {navigationButtonArr?.map((item, id) => {
          return (
            <p
              key={id}
              onClick={() => setSlideNum(item)}
              className={`h-2 ${
                slideNum === item
                  ? "bg-gray-600 w-28 md:h-[.2rem] md:w-[6rem]"
                  : "w-6 md:w-10 bg-gray-300"
              }  h-[.3rem] rounded-full bg-[#CDCDCE] duration-300 xs:w-[.7rem] mobile:w-[1rem] md:h-[.5rem] md:w-[1.5rem]`}
            ></p>
          );
        })}
      </div>

      {/* NAVIGATION BUTTON*/}
      <div className="absolute right-[8%] top-0 z-20 flex w-fit gap-x-5">
        <button
          onClick={() => prevBtn()}
          className=" flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_1.2863757610321045px_2.572751522064209px_0_rgba(180,180,180,0.25)]  lmobile:h-6 lmobile:w-6 md:h-10 md:w-10"
        >
          <img className="rotate-180 scale-50" src={ARROWBTN} alt="back" />
        </button>
        <button
          onClick={() => nextBtn()}
          className="flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white shadow-[0_2.572751522064209px_5.145503044128418px_0_rgba(180,180,180,0.25)]  lmobile:h-6 lmobile:w-6 md:h-10 md:w-10"
        >
          <img className="scale-50" src={ARROWBTN} alt="front" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
