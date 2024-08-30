"use client"

import { useTranslations } from "next-intl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
    const t = useTranslations('HomePage');


    return (
        <footer className='w-screen flex justify-between items-center flex-col bg-bluedark pt-6'>
            <div className='w-[95%] space-x-3 flex justify-between items-center pb-6 xl:w-[65%]'>
                <div className='w-36 h-12 bg-logo bg-contain bg-no-repeat bg-center cursor-pointer'></div>
                <div className='flex justify-between items-center flex-col space-x-2 md:space-x-4 md:flex-row'>
                    <div className='flex justify-between items-center space-x-1 md:space-x-3'>
                        <div className='w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                            <FaInstagram className="w-5 h-5 text-black" />
                        </div>
                        <div className='w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer'>
                            <FaLinkedinIn className="w-5 h-5 text-black" />
                        </div>
                    </div>
                    <span className='text-white font-conthrax text-[10px] cursor-pointer mt-2 md:mt-0'>INFO@WAVESEG.TECH</span>
                </div>
                <div className='w-36 h-12 bg-seg-logo bg-contain bg-no-repeat bg-center cursor-pointer'></div>
            </div>
            <span className='bg-bluelight text-center w-screen flex justify-center items-center text-[12px] text-white'>{t("desc")}</span>
        </footer>
    );
};
