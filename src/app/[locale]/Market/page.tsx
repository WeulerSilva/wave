import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";

export default function Pages() {
    const t = useTranslations('market');


    return (
        <section className='w-screen flex flex-col justify-center items-center mb-10'>
            <div className="w-full mt-6 flex justify-center flex-col items-center md:mt-10">
                <div className={`w-full h-[56px] bg-[#36A9E1] flex justify-center items-center`}>
                    <div className='w-full flex justify-start items-center md:w-[90%]'>
                        <h4 className={`text-[11px] px-6 md:text-[14px] lg:text-[16px] font-semibold text-white uppercase font-conthrax md:pl-0`}>{t('h1')}<span className="text-[15px] font-sans text-white md:text-[17px]">®</span></h4>
                    </div>
                </div>

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[14px] font-nexa 
                                text-justify md:pl-0 md:space-x-10 md:w-[90%] md:flex-row'>
                    <div className="w-full">
                        <p className="mb-4">{t("p1")}</p>
                        <p>{t("p2")}</p>
                    </div>

                </div>
            </div>

            <div className="w-full mt-4 flex justify-center flex-col items-center md:mt-10">
                <BlueDiv completBlue firstText={t("h2")} textSize="text-[14px] lg:text-[16px]" aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0  md:w-[90%]'>
                    <p className="mb-7 font-serif italic">&quot;{t("p-1")}&quot;</p>
                    <p>{t("p-2")}</p>
                </div>
            </div>
        </section>
    )
}