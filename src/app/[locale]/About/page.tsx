import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { BlueDivCenter } from "../components/BlueDivCenter";
import { CircleDiv } from "../components/CircleDiv";

export default function Pages() {
    const t = useTranslations('about');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-screen h-[250px] flex justify-center'>
                <div className='w-full h-full flex justify-center items-start bg-prancha-mar bg-cover bg-center md:flex-row 
                    md:bg-center'>
                    <div className="w-full h-[51%] flex justify-center items-end md:h-[50%]">
                        <h1 className="font-beyonders text-white text-lg md:text-4xl lg:text-5xl xl:text-6xl">{t("img-text")}</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">
                <BlueDiv completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:space-x-10 md:w-[90%] md:flex-row'>
                    <div className="w-full mb-7 md:mb-0 md:w-[50%]">
                        <p className="mb-7">{t("p1")}</p>
                        <p className="mb-7">{t("p2")}</p>
                        <p className="mb-7">{t("p3")} <p className="font-bold">{t("p3-1")}</p></p>
                    </div>

                    <div className="w-full md:w-[50%]">
                        <p>{t("p4")}
                            <span className="font-bold">{t("p4-1")}</span>
                            <span className="">{t("p4-2")}</span>
                            <span className="font-bold">{t("p4-3")}</span>
                            <span className="">{t("p4-4")}</span>
                        </p>
                        <p className="mt-7 font-bold">{t('p5')}</p>
                        <p>{t("p6")}</p>
                        <p className="font-bold">{t("p7")}</p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <BlueDivCenter color="bg-bluelight uppercase" completBlue firstText={t("h2")} aboutStyle="hidden" />

                <div className='w-full h-full flex justify-center items-center bg-gray-50'>
                    <div className="w-full h-full grid grid-cols-2 gap-4 justify-items-center items-center pt-8 lg:pt-0 lg:h-[300px] lg:flex md:w-[90%]">
                        <CircleDiv firstText="circle-1" style="bg-about-1" />
                        <CircleDiv firstText="circle-2" style="bg-about-2" />
                        <CircleDiv firstText="circle-3" style="bg-about-3" />
                        <CircleDiv firstText="circle-4" style="bg-about-4" />
                    </div>
                </div>

            </div>

        </section>
    )
}