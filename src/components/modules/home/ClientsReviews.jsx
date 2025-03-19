import fiverr from '../../../assets/fiverr.png';
import upwork from '../../../assets/upwork.png';
import rev1 from '../../../assets/rev1.png';
import rev2 from '../../../assets/rev2.png';
import rev3 from '../../../assets/rev3.png';
import star from '../../../assets/star.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ClientsReviews = () => {
  return <div className="flex flex-col items-center mt-40">
    <p className="text-[16px] text-center tracking-[3.72px] font-semibold text-[#0C89FF]">CLIENT REVIEWS</p>
    <h1 className="text-5xl font-bold mt-3 text-center text-[#001246]">Our Proud Clients</h1>
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10">
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev1} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={upwork} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From upwork</p>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev1} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={fiverr} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From fiverr</p>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev3} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={upwork} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From upwork</p>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev1} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={fiverr} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From fiverr</p>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev2} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={fiverr} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From fiverr</p>
            </div>

          </div>
        </div>
      </div>
      <div className="w-[315px] h-[240px] border border-[#d3d0d0] rounded-xl p-5 relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <p>
          <img src={star} alt='star' />
        </p>
        <p className="text-[#424242] text-[14px] font-[400px] mt-3">“Lorem ipsum dolor sit amet dolor sit consectetur eget maecenas sapien fusce egestas risus purus suspendisse turpis volutpat onare”</p>
        <div className='flex gap-1 mt-5'>
          <img src={rev3} alt="logo" />
          <div>
            <h1 className="text-[#0A2C8C] text-[18px] font-medium">Stephanie Powell</h1>
            <div className='flex gap-2 items-center'>
              <img className='flex items-center' src={fiverr} alt='logo' />
              <p className='text-[#0012464D] text-[14px] font-[400px]'>From fiverr</p>
            </div>

          </div>
        </div>
      </div>
    </div>
     <div className='flex justify-center w-full h-full gap-4 my-10'>
              <p className='cursor-pointer flex justify-center items-center border text-[#0A2C8C] border-[#0A2C8C] rounded-[8px] h-[34px] w-[34px]'>
                <IoIosArrowBack size={24} />
              </p>
              <p className='cursor-pointer flex justify-center items-center text-white bg-[#FF693B] rounded-[8px] h-[34px] w-[34px]'>
                <IoIosArrowForward size={24} />
              </p>
    
    
            </div>
  </div>;
};
export default ClientsReviews;