import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { LiDiv } from "../components/LiDiv";
import { BlueDivCenter } from "../components/BlueDivCenter";

export default function Pages() {
    const t = useTranslations('tech');


    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className="w-full mt-6 flex justify-center flex-col items-center">
                <BlueDiv high highSize="h-[71px]" completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:px-0 md:w-[85%] xl:w-[65%]'>
                    <LiDiv text="li-1" />
                    <LiDiv text="li-2" />
                    <LiDiv text="li-3" />
                    <LiDiv text="li-4" />
                    <LiDiv text="li-5" />

                    <div className="w-full h-[217px] bg-onda-tech bg-cover bg-[-100px] bg-bluelight md:bg-[-10px] 2xl:bg-[-4px]">
                        <div className="w-full h-[96%] flex justify-end items-end md:h-[92%] lg:h-[88%]">
                            <h1 className="font-beyonders text-white text-2xl  md:text-4xl lg:text-5xl lg:pr-[107px] xl:text-[51px]"
                            >{t("img-text")}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center bg-[#D4E7F3]">
                <BlueDivCenter color="bg-bluedark" textSize="pl-6" completBlue firstText={t("h2")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:px-0 md:pl-0 md:w-[85%] md:flex-col xl:w-[65%]'>
                    <p className="font-nexa text-[12px] text-black mb-7 md:text-[15px]">
                        <span className="font-conthrax text-[13px] text-bluedark md:text-[16px]">{t("h2-span-1")}</span>
                        {t("h2-p1")}
                    </p>

                    <p className="font-nexa text-[12px] text-black mb-7 md:text-[15px]">
                        <span className="font-conthrax text-[13px] text-bluedark md:text-[16px]">{t("h2-span-2")}</span>
                        {t("h2-p2")}
                        <span className="font-conthrax text-[13px] text-bluedark md:text-[16px]">{t("h2-span-3")}</span>
                    </p>

                    <p className="font-nexa text-[12px] text-black mb-4 md:text-[15px]">
                        {t("h2-p3")}
                        <span className="font-conthrax text-[13px] text-bluedark md:text-[16px]">{t("h2-span-4")}</span>
                        {t("h2-p4")}
                    </p>
                </div>
            </div>

            <div className='w-full my-7 px-6 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:px-0 md:space-x-10 md:w-[85%] md:flex-row xl:w-[65%]'>
                <div className="w-full md:mb-0 md:w-[50%]">
                    <p className="mb-7">{t("p1")}</p>
                    <p className="mb-7">{t("p2")}</p>
                    <p className="mb-7">{t("p3")}</p>
                    <p className="mb-7">{t("p4")}</p>
                    <p className="mb-7 md:mb-0">{t("p5")}</p>
                </div>

                <div className="w-full md:w-[50%]">
                    <p className="mb-7">{t("p6")}</p>
                    <p className="mb-7">{t('p7')}</p>
                    <p>{t("p8")}</p>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">
                <BlueDiv textSize="md:ml-6" completBlue firstText={t("h3")} aboutStyle="hidden" />

                <div className='w-full h-full flex justify-center items-center bg-gray-50'>
                    <div className="w-full h-full flex items-center justify-center flex-col 
                         space-y-4 md:space-y-0 md:space-x-12 py-8 md:flex-row md:w-[90%] xl:w-[70%]">
                        <div className="w-full flex justify-center items-center flex-col mb-8 md:mb-0 lg:w-[25%]">
                            <a className={`w-[250px] h-[60px] bg-cae-logo bg-contain bg-no-repeat bg-center 
                                 md:w-[150px] lg:w-[250px] lg:h-[80px]`}
                                href="https://www.caexperts.com.br"
                                target="_blank"
                            ></a>
                        </div>

                        <div className="w-full flex justify-center items-center flex-col pb-8 md:pb-0 lg:w-[25%]">
                            <a className={`w-[250px] h-[60px] bg-unity-logo bg-contain bg-no-repeat bg-center 
                                 md:w-[150px] lg:w-[250px] lg:h-[80px]`}
                                href="https://www.unity.eco.br"
                                target="_blank"
                            ></a>
                        </div>

                        <div className="w-full flex justify-center items-center flex-col lg:w-[25%]">
                            <a className={`w-[250px] h-[60px] bg-wb-logo bg-contain bg-no-repeat bg-center 
                                 md:w-[150px] lg:w-[250px] lg:h-[80px]`}
                                href="https://www.wbusiness.com.br/"
                                target="_blank"
                            ></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}