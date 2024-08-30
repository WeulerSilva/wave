"use client"

import { useTranslations } from "next-intl";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


export const Footer = () => {
    const t = useTranslations('HomePage');


    return (
        <footer className='w-screen flex justify-between items-center flex-col bg-bluedark pt-6'>
            <div className='w-[95%] space-x-3 flex justify-between items-center pb-6 xl:w-[65%]'>
                <a className='w-36 h-12 bg-logo bg-contain bg-no-repeat bg-center cursor-pointer'
                    href="/"
                    title="HOME">
                </a>
                <div className='flex justify-between items-center flex-col space-x-2 md:space-x-4 md:flex-row'>
                    <div className='flex justify-between items-center space-x-1 md:space-x-3'>
                        <a className='w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer'
                            href="https://www.instagram.com/wave.seg/"
                            target="_blank"
                            title="Instagram">
                            <FaInstagram className="w-5 h-5 text-black" />
                        </a>
                        <a className='w-8 h-8 rounded-full bg-white flex justify-center items-center cursor-pointer'
                            href="https://www.linkedin.com/showcase/waveseg-oficial/?originalSubdomain=br"
                            target="_blank"
                            title="Linkedin">
                            <FaLinkedinIn className="w-5 h-5 text-black" />
                        </a>
                    </div>
                    <a className='text-white font-conthrax text-[10px] cursor-pointer mt-2 md:mt-0'
                        href="mailto:INFO@WAVESEG.TECH">
                        INFO@WAVESEG.TECH
                    </a>
                </div>
                <a className='w-36 h-12 bg-seg-logo bg-contain bg-no-repeat bg-center cursor-pointer'
                    href="https://waveseg.tech/"
                    target="_blank"
                    title="SEG|south entertainment group">
                </a>
            </div>
            <a className='bg-bluelight text-center w-screen flex justify-center items-center text-[12px] text-white'
                href="https://www.wbusiness.com.br/"
                target="_blank"
                title="WBusiness">
                {t("desc")}
            </a>
        </footer>
    );
};
