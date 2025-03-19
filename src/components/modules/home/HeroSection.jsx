import heroIcon1 from '../../../assets/heroIcon1.png';
import heroIcon2 from '../../../assets/heroIcon2.png';
import heroIcon3 from '../../../assets/heroIcon3.png';
import heroIcon4 from '../../../assets/heroIcon4.png';
import grpImg from '../../../assets/grpImg.png';

const HeroSection = () => {
  return <div className="bg-[#04135B] pt-[200px] text-white pb-10 ">
    <h1 className="text-7xl font-extrabold text-center">DIGITAL SERVICES</h1>
    <p className="text-center text-[25px] font-extrabold my-5">BUILDING YOUR EMPIRE DIGITALLY</p>

    <div className="flex gap-5 justify-center">
      <button className="bg-[#FF693B] cursor-pointer lg:w-[238px] w-[180px] py-2 my-5 rounded text-white text-[16px] font-semibold relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
        SEE PRICING
      </button>

      <button className="cursor-pointer border relative overflow-hidden lg:w-[238px] w-[180px] py-2 my-5 rounded text-white text-[16px] font-semibold before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
        BOOK AN APPOINTMENT
      </button>


    </div>
    <div className="flex lg:flex-row flex-col justify-around py-20 lg:mx-64">
      <div className="flex gap-3 ms-32 lg:ms-0">
        <img src={heroIcon1} alt='icon' />
        <div className=''>
          <p className='text-2xl font-semibold'>2K+</p>
          <p className='text-[16px] font-semibold'>Websites build</p>
        </div>

      </div>
      <p className=' lg:border border-[#ccc7c7d7] my-3 lg:my-0'></p>
      <div className="flex gap-3 ms-32 lg:ms-0">
        <img src={heroIcon2} alt='icon' />
        <div className=''>
          <p className='text-2xl font-semibold'>97%</p>
          <p className='text-[16px] font-semibold'>Client satisfaction</p>
        </div>

      </div>
      <p className=' lg:border border-[#ccc7c7d7] my-3 lg:my-0'></p>
      <div className="flex gap-3 ms-32 lg:ms-0">
        <img src={heroIcon3} alt='icon' />
        <div className=''>
          <p className='text-2xl font-semibold'>25+</p>
          <p className='text-[16px] font-semibold'>Team members</p>
        </div>

      </div>
      <p className=' lg:border border-[#ccc7c7d7] my-3 lg:my-0'></p>
      <div className="flex gap-3 ms-32 lg:ms-0">
        <img src={heroIcon4} alt='icon' />
        <div className=''>
          <p className='text-2xl font-semibold'>500+</p>
          <p className='text-[16px] font-semibold'>Amazing clients</p>
        </div>

      </div>

    </div>
    <div className='flex justify-center'>
      <img className='' src={grpImg} alt='group img' />
    </div>

  </div>;
};
export default HeroSection;