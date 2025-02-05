"use client"

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import JuridicModal from "./JuridicModal";


export const Footer = () => {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);
    const t = useTranslations('HomePage');
    const p = useTranslations('politics');
    const r = useLocale();

    const toggleExpand = (index: number) => {
        // Alterna o estado da seção clicada
        setExpandedSections((prev) => {
            const newState = [...prev];
            newState[index] = !newState[index]; // Alterna a seção com base no índice
            return newState;
        });
    };

    const [isVisible, setIsVisible] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; li1: string; li2: string; li3: string; li4: string; li5: string; li6: string; li7: string; li8: string; li9: string; li10: string; li11: string; li12: string; li13: string; li14: string; li15: string; li16: string }>({
        title: '',
        li1: '',
        li2: '',
        li3: '',
        li4: '',
        li5: '',
        li6: '',
        li7: '',
        li8: '',
        li9: '',
        li10: '',
        li11: '',
        li12: '',
        li13: '',
        li14: '',
        li15: '',
        li16: ''
    });

    // Função para abrir o modal
    const openModal = (title: string, li1: string, li2: string, li3: string, li4: string, li5: string, li6: string, li7: string, li8: string, li9: string, li10: string, li11: string, li12: string, li13: string, li14: string, li15: string, li16: string) => {
        setModalContent({ title, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12, li13, li14, li15, li16 });
        setIsVisible(true);
    };


    return (
        <footer className='w-screen flex justify-between items-center flex-col bg-bluedark'>
            <JuridicModal
                isVisible={isVisible}
                onClose={() => setIsVisible(false)}
                content={modalContent}
            />

            <div className='w-[95%] space-x-3 flex justify-between items-center md:w-[85%]'>
                <a className='w-36 h-12 bg-logo bg-contain bg-no-repeat bg-center cursor-pointer'
                    href="/"
                    title="HOME">
                </a>
                <div className='flex justify-between items-center flex-col space-x-2 py-4 mt-16 md:mt-0 md:space-x-0 md:flex-col'>
                    <div className="flex justify-between items-center flex-col md:flex-row md:space-x-4 xl:space-x-0">
                        <div className='flex justify-between items-center space-x-4 pt-4 md:pt-0 md:space-x-3'>
                            <a className='w-7 h-7 rounded-full bg-white flex justify-center items-center cursor-pointer'
                                href="https://www.instagram.com/wave.seg/"
                                target="_blank"
                                title="Instagram">
                                <FaInstagram className="w-4 h-4 text-black" />
                            </a>
                            <a className='w-7 h-7 rounded-full bg-white flex justify-center items-center cursor-pointer'
                                href="https://www.linkedin.com/showcase/waveseg-oficial/?originalSubdomain=br"
                                target="_blank"
                                title="Linkedin">
                                <FaLinkedinIn className="w-4 h-4 text-black" />
                            </a>
                        </div>
                        <a className='text-white font-conthrax text-[10px] flex justify-center items-center cursor-pointer mt-4 pb-4 md:pb-0 md:mt-0 xl:pl-8'
                            href="mailto:INFO@WAVESEG.TECH">
                            <MdOutlineEmail className="w-4 h-4 text-bluelight mr-2" />INFO@WAVESEG.TECH
                        </a>
                    </div>
                    <li className="cursor-pointer list-none text-white font-semibold font-conthrax text-center text-[12px] md:mt-4"
                                    onClick={() =>
                                        openModal(
                                            p('p1-name-1'),
                                            p('p1-name-2'),
                                            p('p1-1'),
                                            p('p1-2'),
                                            p('p1-3'),
                                            p('p1-4'),
                                            p('p1-5'),
                                            p('p1-6'),
                                            p('p1-7'),
                                            p('p1-name-4'),
                                            p('p1-8'),
                                            p('p1-9'),
                                            p('p1-10'),
                                            p('p1-11'),
                                            p('p1-12'),
                                            p('p1-13'),
                                            p(''),
                                        )}
                                >{p("p1-name-1")} {p("p1-name-2")}</li>
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
