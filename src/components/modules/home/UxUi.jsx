import uiUxImg from '../../../assets/uxUiImg.png'
import { useRef } from "react";

import bg1 from "../../../assets/bg1.png";
import bar1 from "../../../assets/bar1.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const UxUi = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-10 w-full overflow-hidden">
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-scroll scroll-smooth w-full no-scrollbar"
        >
          {[{
            img: uiUxImg,
            
          }, {
            img: uiUxImg,
          }].map((service, index) => (
            <div key={index} className="">
              <img src={service.img} alt={service.title} />
             
            </div>
          ))}
        </div>
      </div>


      <div className='relative lg:block hidden'>
        <img className="w-full h-auto object-cover " src={bg1} alt="bg" />


        <div className='flex justify-center w-full h-full gap-4 absolute top-10'>
          <p onClick={() => scroll("left")} className='cursor-pointer flex justify-center items-center border text-[#0A2C8C] border-[#0A2C8C] rounded-[8px] h-[34px] w-[34px]'>
            <IoIosArrowBack size={24} />
          </p>
          <p onClick={() => scroll("right")} className='cursor-pointer flex justify-center items-center text-white bg-[#FF693B] rounded-[8px] h-[34px] w-[34px]'>
            <IoIosArrowForward size={24} />
          </p>


        </div>
        <div className="absolute top-20 lg:flex w-full justify-end hidden">
          <p className="text-[14px] font-raleway font-medium text-[#353535] lg:me-20 leading-[20px] tracking-[3.72px] uppercase flex items-center gap-5">
            CREATIVE SOLUTION <span><img src={bar1} alt="bar" /></span>
          </p>

        </div>


      </div>
    </div>
  );
};

export default UxUi;
