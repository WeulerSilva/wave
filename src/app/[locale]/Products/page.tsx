import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { BlueDivCenter } from "../components/BlueDivCenter";
import { ProductDiv } from "../components/ProductDiv";

export default function Pages() {
    const t = useTranslations('products');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className="hidden w-full mt-10 justify-center flex-col items-center">
                <BlueDivCenter color="bg-bluelight uppercase" textSize="text-[14px] lg:text-[16px]" completBlue firstText={t("h1")} aboutStyle="hidden" />

                <div className='text-bluedark w-full h-full flex justify-center items-center flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:w-[95%]'>
                    <h1 className="mt-2 mb-16 font-conthrax text-[14px] text-center lg:text-xl uppercase">
                        {t("h6")}
                    </h1>

                    <div className="w-full h-full flex justify-center items-center flex-col mb-12">
                        <div className="w-full flex justify-around items-center">
                            <span className="w-full flex justify-center items-center font-conthrax md:text-[14px] 
                                        xl:text-[19.5px] 2xl:mb-[30px]">
                                {t("m-h-1")}
                            </span>

                            <span className="hidden w-full md:flex"></span>
                        </div>

                        <div className="w-full flex justify-center items-center flex-col md:flex-row md:pt-7 md:space-x-4 xl:space-x-8 2xl:pt-0">
                            <div className="w-full h-[200px] bg-planta-1 bg-center bg-contain bg-no-repeat md:h-[270px] md:bg-top
                                            2xl:bg-center"></div>
                            <div className="w-full h-[200px] flex justify-start items-start md:h-[270px]">
                                <ul className="text-[13px] p-4 md:p-0 md:pt-3">
                                    <li className="font-conthrax text-[#676767]">{t("m-l-1")} <span className="text-bluedark">{t('m-span-1')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m-l-2")} <span className="text-bluedark">{t('m-span-2')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m-l-3")} <span className="text-bluedark">{t('m-span-3')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m-l-4")} <span className="text-bluedark">{t('m-span-4')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m-l-5")} <span className="text-bluedark">{t('m-span-5')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m-l-6")} <span className="text-bluedark">{t('m-span-6')}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col mb-12 mt-24 md:mt-0">
                        <div className="w-full flex justify-around items-center">
                            <span className="w-full flex justify-center items-center font-conthrax md:text-[14px] lg:text-[14px] 
                                        xl:text-[19.5px] 2xl:mb-[30px]">
                                {t("m2-h-1")}
                            </span>

                            <span className="hidden w-full md:flex"></span>
                        </div>

                        <div className="w-full flex justify-center items-center flex-col md:flex-row md:pt-7 md:space-x-4 xl:space-x-8 2xl:pt-0">
                            <div className="w-full h-[200px] bg-planta-1 bg-center bg-contain bg-no-repeat md:h-[270px] md:bg-top
                                            2xl:bg-center"></div>
                            <div className="w-full h-[200px] flex justify-start items-start md:h-[270px]">
                                <ul className="text-[13px] p-4 md:p-0 md:pt-3">
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-1")} <span className="text-bluedark">{t('m2-span-1')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-2")} <span className="text-bluedark">{t('m2-span-2')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-3")} <span className="text-bluedark">{t('m2-span-3')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-4")} <span className="text-bluedark">{t('m2-span-4')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-5")} <span className="text-bluedark">{t('m2-span-5')}</span></li>
                                    <li className="font-conthrax text-[#676767]">{t("m2-l-6")} <span className="text-bluedark">{t('m2-span-6')}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <BlueDivCenter color="bg-bluelight uppercase" textSize="xl:pl-14" completBlue firstText={t("div-h")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 mb-9 md:pl-0 md:w-[90%] md:px-0'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center lg:grid-cols-3">
                        <ProductDiv img="bg-p-1" firstText={t("div-1")} />
                        <ProductDiv img="bg-p-2" firstText={t("div-2")} />
                        <ProductDiv img="bg-p-3" firstText={t("div-3")} />
                        <ProductDiv img="bg-p-4" firstText={t("div-4")} />
                        <ProductDiv img="bg-p-5" firstText={t("div-5")} />
                        <ProductDiv img="bg-p-6" firstText={t("div-6")} />
                        <ProductDiv img="bg-p-7" firstText={t("div-7")} />
                        <ProductDiv img="bg-p-8" firstText={t("div-8")} />
                        <ProductDiv img="bg-p-9" firstText={t("div-9")} />
                        <ProductDiv img="bg-p-10" firstText={t("div-10")} />
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">
                <BlueDivCenter completBlue color="bg-bluelight" firstText={t("new")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[14px] font-nexa 
                                text-black text-justify md:pl-0 md:w-[85%] '>
                    <p className="w-full mb-3 md:mb-0">{t('new-1')}</p>

                    <li className="hidden w-full list-disc md:mt-3">{t("new-2")}</li>
                </div>
            </div>

            <div className="hidden w-full justify-center flex-col items-center">
                <BlueDivCenter completBlue color="bg-bluelight" textSize="text-[12px] text-center" firstText={t("h2")} aboutStyle='hidden' />

                <div className='flex w-full mt-7 px-6 my-4 justify-between items-start flex-col text-[14px] font-nexa 
                                text-black text-justify md:pl-0 md:w-[85%] '>
                    <p className="mb-7 italic">&quot;{t("p-1")}&quot;</p>
                    <p>{t("p-2")}</p>

                </div>
            </div>

            <div className="w-full mt-5 flex justify-center flex-col items-center bg-sky bg-cover bg-center">
                <BlueDivCenter color="bg-bluelight uppercase" textSize="md:pl-4 lg:pl-6 xl:pl-8" firstText="Surf Place" aboutStyle='hidden' />

                <div className='w-full h-[270px] flex flex-col-reverse relative justify-center md:flex-row-reverse md:w-[85%] md:h-[230px]'>
                    <div className="w-full h-full">
                        <div className="w-[165px] h-[150px] bg-coqueiro bg-cover bg-center absolute bottom-0 
                         right-0 md:w-[265px] md:h-[250px] xl:w-[325px] xl:h-[300px] md:left-[70%]"></div>
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col">
                        <div className="flex justify-center items-center h-[50%] md:h-full">
                            <div className="w-[93px] h-[90px] bg-surf bg-center bg-cover md:w-[73px] md:h-[70px] lg:w-[145px] lg:h-[140px]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}