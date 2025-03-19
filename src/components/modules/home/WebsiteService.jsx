import { useRef } from "react";
import wordpressIcon from "../../../assets/wordpressIcon.png";
import contentIcon from "../../../assets/contentIcon.png";
import seoIcon from "../../../assets/seoIcon.png";
import bg1 from "../../../assets/bg1.png";
import bar from "../../../assets/bar.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const WebsiteService = () => {
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
    <div className="pt-10 w-full overflow-hidden bg-[#04135B]">
      <div className="relative flex items-center lg:px-20 px-5">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-scroll scroll-smooth w-full no-scrollbar"
        >
          {[{
            icon: wordpressIcon,
            title: "WordPress Website",
            description: "Design & Development"
          }, {
            icon: contentIcon,
            title: "Content Writing",
            description: "For entire project"
          }, {
            icon: seoIcon,
            title: "Monthly SEO",
            description: "Rank #1 on Google"
          }, {
            icon: seoIcon,
            title: "Monthly SEO",
            description: "Rank #1 on Google"
          }, {
            icon: seoIcon,
            title: "Monthly SEO",
            description: "Rank #1 on Google"
          }].map((service, index) => (
            <div key={index} className="w-[570px] min-w-[570px] bg-[#3158C733] h-[350px] rounded border border-[#ffffff38] flex flex-col items-center justify-center">
              <img src={service.icon} alt={service.title} />
              <h1 className="text-white mt-2 text-2xl font-semibold">{service.title}</h1>
              <p className="text-white my-3 text-[16px] font-normal">{service.description}</p>
              <div className="flex gap-3">
                <button className="bg-[#0C89FF] relative overflow-hidden rounded-3xl w-[129px] py-2 cursor-pointer text-white before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
                  Portfolio
                </button>

                <button className="border border-[#0C89FF] relative overflow-hidden rounded-3xl cursor-pointer w-[129px] py-2 text-[#0C89FF] before:absolute before:inset-0 before:w-0 before:bg-[#0C89FF] before:transition-all before:duration-500 hover:before:w-full hover:text-white">
                  <span className="relative z-10">Order</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>


      <div className='relative lg:block hidden'>
        <img className="w-full h-auto object-cover " src={bg1} alt="bg" />


        <div className='flex justify-center w-full h-full gap-4 absolute top-10'>
          <p onClick={() => scroll("left")} className='cursor-pointer flex justify-center items-center text-white border border-[#4580FF] rounded-[8px] h-[34px] w-[34px]'>
            <IoIosArrowBack size={24} />
          </p>
          <p onClick={() => scroll("right")} className='cursor-pointer flex justify-center items-center text-white bg-[#FF693B] rounded-[8px] h-[34px] w-[34px]'>
            <IoIosArrowForward size={24} />
          </p>


        </div>
        <div className="absolute top-20 lg:flex w-full justify-end hidden">
          <p className="text-[14px] font-raleway font-medium text-white lg:me-20 leading-[20px] tracking-[3.72px] uppercase flex items-center gap-5">
            CREATIVE SOLUTION <span><img src={bar} alt="bar" /></span>
          </p>

        </div>


      </div>
    </div>
  );
};

export default WebsiteService;
