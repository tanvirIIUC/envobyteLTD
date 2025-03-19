import { useState } from "react";
import WebsiteService from "./WebsiteService";

const DigitalServices = () => {
    const [currentItem, setCurrentItem] = useState("website")
    return <div>
        <div className="bg-[#04135B] pt-40 lg:px-20 px-5">
            <p className="text-[#FF693B] text-[16px] font-raleway font-semibold leading-[24px] tracking-[3.84px]">
                DIGITAL SERVICES
            </p>

            <div className="flex items-center justify-between">
                <h1 className="text-white lg:text-5xl text-[20px] font-bold">Check Our Available Services</h1>

                <button className="bg-[#FF693B] cursor-pointer relative overflow-hidden lg:w-[180px] w-[100px] py-2 my-5 rounded text-white text-[16px] font-semibold before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
                    All Services
                </button>


            </div>
            <p className="border border-[#FFFFFF42]"></p>
            <div className="flex lg:gap-10 gap-2 mt-10">
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer  ${currentItem === "website" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("website")}>WEBSITE
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "uiUx" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("uiUx")}>UI/UX
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "seo" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("seo")}>SEO
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "logoDesign" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("logoDesign")}>LOGO DESIGN
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "bannerDesign" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("bannerDesign")}>BANNER DESIGN
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "googleAds" ? "text-[#0C89FF] font-bold" : "text-white font-[400px]"}`}
                    onClick={() => setCurrentItem("googleAds")}> GOOGLE ADS
                </button>
            </div>

        </div>
        {
            currentItem === "website" && <WebsiteService />
        }
    </div>

};
export default DigitalServices;