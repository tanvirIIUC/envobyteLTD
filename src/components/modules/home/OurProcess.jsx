import processBg from '../../../assets/ourProcessBg.png';
import processImg from '../../../assets/processImg.png';

const OurProcess = () => {
    return (
        <div>
            <div className='relative'>
                <img className='lg:h-[900px] h-[600px] w-full' src={processBg} alt='process' />
                <div className='pt-20 absolute w-full h-full top-0 flex flex-col items-center'>
                    <p className='text-[20px] text-white font-semibold'>HOW WE WORK</p>
                    <h1 className='text-white lg:w-[600px] text-center lg:text-[45px] text-3xl font-extrabold'>Our Process For Delivering
                        Results</h1>
                    <p className='text-[16px] lg:w-[700px] text-center text-white font-[400px] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever.</p>
                    <img className='w-[1300px] z-40 mt-16' src={processImg} alt='process' />
                    <button className='w-[180px] mt-10 py-2 rounded bg-[#FF693B] text-white cursor-pointer relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full'>
                        See Pricing
                    </button>

                </div>

            </div>

        </div>

    );
};

export default OurProcess;
