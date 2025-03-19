import logo from '../../assets/logo.png';
import msg from '../../assets/msg.png';
import whats from '../../assets/whats.png';
import fb from '../../assets/fb.png';
import linkedin from '../../assets/linkedin.png';
import ins from '../../assets/ins.png';
import sky from '../../assets/sky.png';
import lnk from '../../assets/lnk.png';
const Footer = () => {
  return <div className='bg-[#001243]'>
    <div className=" px-10 border flex justify-center border-b-[#E5E7EB33] border-t-[#E5E7EB33]">
      <div className='lg:flex gap-20 py-10'>
        <div>
          <p>
            <img src={logo} alt="logo" />
          </p>
          <p className="text-[16px] font-normal w-[250px] text-white mt-5">We are an IT Company. We help
            businesses to bring ideas to life
            easily and affordably.</p>
        </div>
        <div>
          <p className='text-white text-[18px] font-bold'>
            Company
          </p>
          <p className="text-[16px] font-normal text-white mt-5">About Us</p>
          <p className="text-[16px] font-normal text-white mt-1">Privacy Policy</p>
          <p className="text-[16px] font-normal text-white mt-1">Refund Policy</p>
        </div>
        <div>
          <p className='text-white text-[18px] font-bold'>
            Learn More
          </p>
          <p className="text-[16px] font-normal text-white mt-5">Combo Offer</p>
          <p className="text-[16px] font-normal text-white mt-1">Service Industries</p>
          <p className="text-[16px] font-normal text-white mt-1">Envobyte Apps</p>
        </div>
        <div>
          <p className='text-white text-[18px] font-bold'>
            Support
          </p>
          <p className="text-[16px] font-normal text-white mt-5">Contact Us</p>
          <p className="text-[16px] font-normal text-white mt-1">FAQ</p>
          <p className="text-[16px] font-normal text-white mt-1">Terms & Conditions</p>
        </div>
        <div>
          <p className='text-white text-[18px] font-bold'>
            Get in Touch
          </p>
          <p className="text-[16px] font-normal flex items-center gap-2 text-white mt-5"><span><img src={msg} alt='img' /></span> support@envobyte.comContact Us</p>
          <p className="text-[16px] font-normal flex items-center gap-2 text-white mt-5"><span><img src={whats} alt='img' /></span> +1 (667) 777 2477</p>

          <div className='flex gap-3 mt-3'>
            <img src={fb} alt='icon' />
            <img src={linkedin} alt='icon' />
            <img src={ins} alt='icon' />
            <img src={sky} alt='icon' />
            <img src={lnk} alt='icon' />
          </div>
        </div>

      </div>
     
    </div>
    
        <p className='text-center py-3 text-[14px] font-bold text-white'>@2025 - ENVOBYTE, All rights are reserved.</p>
      
  </div>

};
export default Footer;