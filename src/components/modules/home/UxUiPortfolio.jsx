import { useState } from "react";
import UxUi from "./UxUi";

const UxUiPortfolio = () => {
    const [currentItem, setCurrentItem] = useState("uxUi")
    return <div>
        <div className=" lg:px-20 px-5">
            <p className="text-[#FF693B] text-[16px] font-raleway font-semibold leading-[24px] tracking-[3.84px]">
                UI/UX PORTFOLIO
            </p>

            <div className="flex items-center justify-between">
                <h1 className=" lg:text-5xl text-[20px] font-bold">Check Our Previous Work</h1>

                <button className="bg-[#FF693B] cursor-pointer lg:w-[180px] w-[100px] py-2 my-5 rounded text-white text-[16px] font-semibold relative overflow-hidden before:absolute before:inset-0 before:w-0 before:bg-white/20 before:transition-all before:duration-500 hover:before:w-full">
                    All Portfolio
                </button>


            </div>
            <p className="border border-[#0A2C8C1A]"></p>
            <div className="flex lg:gap-10 gap-3 mt-10">
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "uxUi" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("uxUi")}>UX/UI
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "website" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("website")}>WEBSITE
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "seo" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("seo")}>SEO
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "logoDesign" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("logoDesign")}>lOGO DESIGN
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "bannerDesign" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("bannerDesign")}>BANNER DESIGN
                </button>
                <button
                    className={`lg:text-[16px] hover:text-[#0C89FF] text-[12px] cursor-pointer ${currentItem === "googleAds" ? "text-[#0C89FF] font-bold" : "text-[#474747] font-[400px]"}`}
                    onClick={() => setCurrentItem("googleAds")}>GOOGLE ADS
                </button>

            </div>

        </div>
        {
            currentItem === "uxUi" && <UxUi />
        }
    </div>

};
export default UxUiPortfolio;