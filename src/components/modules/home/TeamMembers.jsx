import fiverr from '../../../assets/fiverr.png';
import upwork from '../../../assets/upwork.png';
import member1 from '../../../assets/member1.png';
import member2 from '../../../assets/member2.png';
import member3 from '../../../assets/member3.png';
import member4 from '../../../assets/member4.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const TeamMembers = () => {
    return <div className="flex flex-col items-center mt-32">
        <p className="text-[16px] text-center tracking-[3.72px] font-semibold text-[#0C89FF]">EXPERIENCED TEAM</p>
        <h1 className="text-5xl font-bold mt-3 text-center text-[#001246]">Our Team Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 px-4 max-w-6xl mx-auto">
            <div className="w-full relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img className="w-full h-auto " src={member1} alt="person" />
                <div className="p-4 bg-[#0A2C8C]">
                    <h1 className="text-[20px] font-semibold text-white">Mr Anik</h1>
                    <p className="text-[16px] font-semibold text-white">Backend Developer</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden rounded-lg border border-[#d3d0d0] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img className="w-full h-auto " src={member2} alt="person" />
                <div className="p-4 bg-[#0A2C8C] ">
                    <h1 className="text-[20px] font-semibold text-white">Mr Shahed</h1>
                    <p className="text-[16px] font-semibold text-white">Frontend Developer</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden rounded-lg border border-[#d3d0d0] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img className="w-full h-auto " src={member3} alt="person" />
                <div className="p-4 bg-[#0A2C8C] ">
                    <h1 className="text-[20px] font-semibold text-white">Mr Mainul Islam</h1>
                    <p className="text-[16px] font-semibold text-white">SEO Expert</p>
                </div>
            </div>
            <div className="w-full relative overflow-hidden rounded-lg border border-[#d3d0d0] transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <img className="w-full h-auto " src={member4} alt="person" />
                <div className="p-4 bg-[#0A2C8C] ">
                    <h1 className="text-[20px] font-semibold text-white">Mr Hasib</h1>
                    <p className="text-[16px] font-semibold text-white">Content Writer</p>
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
export default TeamMembers;