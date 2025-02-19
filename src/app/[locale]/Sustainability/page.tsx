import { useTranslations } from "next-intl";
import { LiDiv } from "../components/LiDiv";

export default function Pages() {
    const t = useTranslations('sustainability');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-screen h-[350px] flex justify-center md:h-[450px]'>
                <div className='w-full h-full flex justify-center items-start bg-suste bg-cover bg-center md:flex-row md:bg-bottom'>
                    <div className="w-full h-full flex justify-center items-end">
                        <h1 className="font-beyonders text-white text-[13px] text-center mb-4 md:mb-7 md:text-[16px] lg:text-xl 2xl:text-[1.7rem]">{t("h1")}</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[14px] font-nexa 
                                text-justify md:pl-0 md:space-x-10 md:w-[85%]'>
                    <div className="w-full mb-7 md:mb-0">
                        <p className="mb-7">{t("p-1")} <span className="font-bold">{t("p-1-1")}</span></p>

                        <li className={`mb-6 text-[12px] text-bluedark font-conthrax relative before:content-['•'] before:absolute before:left-[-3px] before:top-[-5px] 
                             before:text-bluelight before:text-3xl md:text-[13px]`}
                        >
                            {t("l-1")}<span className="text-black font-nexa">{t("l-1-1")}</span>
                        </li>
                        <li className={`mb-6 text-[12px] text-bluedark font-conthrax relative before:content-['•'] before:absolute before:left-[-3px] before:top-[-5px] 
                             before:text-bluelight before:text-3xl md:text-[13px]`}
                        >
                            {t("l-2")}<span className="text-black font-nexa">{t("l-2-1")}</span>
                        </li>
                        <li className={`mb-6 text-[12px] text-bluedark font-conthrax relative before:content-['•'] before:absolute before:left-[-3px] before:top-[-5px] 
                             before:text-bluelight before:text-3xl md:text-[13px]`}
                        >
                            {t("l-3")}<span className="text-black font-nexa">{t("l-3-1")}</span>
                        </li>
                        <li className={`mb-6 text-[12px] text-bluedark font-conthrax relative before:content-['•'] before:absolute before:left-[-3px] before:top-[-5px] 
                             before:text-bluelight before:text-3xl md:text-[13px]`}
                        >
                            {t("l-4")}<span className="text-black font-nexa">{t("l-4-1")}</span>
                        </li>

                        <p className="md:mb-7">{t("p-2")} <span className="font-bold">{t("p-2-1")}</span><span>{t("p-2-2")}</span></p>

                    </div>

                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center relative md:mt-5">
                <div className="w-full h-full absolute"></div>

                <div className='w-full h-[370px] relative md:w-[85%] md:h-full'>

                    <div className="w-[165px] h-[150px] bg-gotinha bg-contain bg-no-repeat bg-bottom absolute bottom-0 
                         right-0 md:w-[245px] md:h-[250px] xl:w-[330px] xl:h-full md:right-[-30px]"></div>

                    <div className="w-full h-full flex justify-start items-center flex-col text-center px-4
                             md:px-0 md:text-left md:items-start md:w-[65%] lg:w-[70%] xl:w-[60%]">
                        <li className="text-[14px] list-none font-nexa font-bold text-black md:text-[15px] md:mt-7">{t("p-3")}</li>
                        <p className="text-[13px] font-nexa mb-7 italic md:text-[14px]">&quot;{t("p-4")}&quot;</p>
                        <li className="text-[14px] list-none font-conthrax text-bluedark md:text-[15px]"></li>
                        <p className="text-[13px] font-nexa mb-7 md:text-[14px]">{t("p-5")}</p>
                        <li className="text-[14px] list-none font-conthrax text-bluedark md:text-[15px]"></li>
                        <p className="text-[13px] font-nexa mb-7 md:text-[14px]"></p>
                    </div>
                </div>
            </div>

        </section>
    )
}