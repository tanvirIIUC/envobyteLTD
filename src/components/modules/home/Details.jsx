import detailsImg1 from '../../../assets/detailsImg1.png';
import detailsImg2 from '../../../assets/detailsImg2.png';
import detailsImg3 from '../../../assets/detailsImg3.png';
import detailsBg from '../../../assets/detailsBg.png';
const Details = () => {
    return <div>
        <div className=" z-10 flex flex-col items-center mt-20">
            <p className="text-[#0C89FF] text-[16px] font-semibold leading-[24px] tracking-[0.24em]">MORE DETAILS</p>
            <h1 className="text-[#0A2C8C] font-bold text-5xl">Get Your Answers</h1>

            <div className='mt-10 lg:flex'>
                <div className='bg-[#0A2C8C] z-30 w-[365px] p-5 h-[535px] border border-[#E8E5E5] flex flex-col justify-center items-center relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg'>
                    <img src={detailsImg1} alt="icon" className="transition-transform duration-500 hover:scale-110" />
                    <div className="text-center">
                        <h1 className='text-[30px] font-semibold text-white'>Why Choose Envobyte</h1>
                        <p className='text-[#65B5FF] text-[16px] font-medium my-2'>Experienced & trustworthy</p>
                        <p className='text-[16px] font-normal text-white'>
                            We’re experienced, trustworthy, and a team of experts in design, development, SEO, and more, delivering everything you need for success.
                        </p>
                    </div>
                </div>

                <div className='w-[365px] p-5 h-[535px] bg-white z-30 border border-[#E8E5E5] flex flex-col justify-center items-center relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg'>
                    <img src={detailsImg2} alt="icon" className="transition-transform duration-500 hover:scale-110" />
                    <div className="text-center">
                        <h1 className='text-[30px] font-semibold text-[#424242]'>What’s Your Benefit</h1>
                        <p className='text-[#002AA3] text-[16px] font-medium my-2'>Experienced & trustworthy</p>
                        <p className='text-[16px] font-normal text-[#424242]'>
                            A hassle-free process that saves you time, with everything you need in one seamless package at an incredibly attractive price.
                        </p>
                    </div>
                </div>

                <div className='w-[365px] bg-white z-30 p-5 h-[535px] border border-[#E8E5E5] flex flex-col justify-center items-center relative overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-lg'>
                    <img src={detailsImg3} alt="icon" className="transition-transform duration-500 hover:scale-110" />
                    <div className="text-center">
                        <h1 className='text-[30px] font-semibold text-[#424242]'>What is Combo Offer</h1>
                        <p className='text-[#002AA3] text-[16px] font-medium my-2'>Experienced & trustworthy</p>
                        <p className='text-[16px] font-normal text-[#424242]'>
                            You’re getting web design, development, content writing, social media kit, custom graphics, and business consultation—all in one combo package!
                        </p>
                    </div>
                </div>


            </div>

        </div>
        <div className='relative'>
            <img className="mt-[-50px] z-0 h-[250px] w-full" src={detailsBg} alt="bg" />
            <div className='absolute w-full h-full top-0 flex justify-center items-center'>
                <button className='w-[180px] py-2 rounded bg-[#FF693B] text-white cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full'>
                    See Pricing
                </button>

            </div>
        </div>

    </div>




};
export default Details;