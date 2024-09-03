import { useTranslations } from "next-intl";

export default function Pages() {
    const t = useTranslations('sustainability');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-screen h-[350px] flex justify-center md:h-[450px]'>
                <div className='w-full h-full flex justify-center items-start bg-gota bg-cover bg-center md:flex-row md:bg-bottom md:w-[90%] xl:w-[70%]'>
                    <div className="w-full h-full flex justify-center items-end">
                        <h1 className="font-beyonders text-white text-[13px] text-center mb-4 md:mb-7 md:text-[16px] lg:text-xl 2xl:text-[1.7rem]">{t("h1")}</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[14px] font-nexa 
                                text-justify md:pl-0 md:space-x-10 md:w-[85%] md:flex-row xl:w-[65%]'>
                    <div className="w-full mb-7 md:mb-0 md:w-[50%]">
                        <p className="mb-7">{t("p1")}</p>
                        <p className="mb-7">{t("p2")}</p>
                        <p className="mb-7">{t("p3")}</p>
                        <p className="mb-0 md:mb-7">{t("p4")}</p>
                    </div>

                    <div className="w-full md:w-[50%]">
                        <p>{t("p5")}</p>
                        <p className="mt-7">{t('p6')}</p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5 flex justify-center flex-col items-center relative">
                <div className="w-full h-full bg-[#fafcfd] absolute"></div>

                <div className='w-full h-[505px] relative md:w-[85%] md:h-full xl:w-[65%]'>

                    <div className="w-[165px] h-[150px] bg-gotinha bg-contain bg-no-repeat bg-center absolute bottom-0 
                         right-0 md:w-[265px] md:h-[250px] xl:w-[330px] xl:h-full md:right-[-30px]"></div>

                    <div className="w-full h-full flex justify-start items-start flex-col 
                             md:w-[65%] lg:w-[70%] xl:w-[60%]">
                        <li className="text-[14px] list-none font-conthrax text-bluedark md:text-[15px] mt-7">{t("l1")}</li>
                        <p className="text-[13px] font-nexa mb-7 md:text-[14px]">{t("lp1")}</p>
                        <li className="text-[14px] list-none font-conthrax text-bluedark md:text-[15px]">{t("l2")}</li>
                        <p className="text-[13px] font-nexa mb-7 md:text-[14px]">{t("lp2")}</p>
                        <li className="text-[14px] list-none font-conthrax text-bluedark md:text-[15px]">{t("l3")}</li>
                        <p className="text-[13px] font-nexa mb-7 md:text-[14px]">{t("lp3")}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}