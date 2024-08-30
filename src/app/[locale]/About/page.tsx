import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { BlueDivCenter } from "../components/BlueDivCenter";

export default function Pages() {
    const t = useTranslations('about');

    return (
        <section className='w-screen flex flex-col justify-center items-center mb-10'>
            <div className='w-screen h-[350px] flex justify-center'>
                <div className='w-full h-full flex justify-center items-start bg-prancha-mar bg-cover bg-center md:flex-row md:bg-center md:w-[90%] xl:w-[70%]'>
                    <div className="w-full h-[51%] flex justify-center items-end md:h-[50%]">
                        <h1 className="font-beyonders text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl">{t("img-text")}</h1>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">
                <BlueDiv completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-6 md:space-x-10 md:w-[85%] md:flex-row xl:w-[65%]'>
                    <div className="w-full mb-7 md:mb-0 md:w-[50%]">
                        <p className="mb-7">{t("p1")}</p>
                        <p>{t("p2")}</p>
                    </div>

                    <div className="w-full md:w-[50%]">
                        <p className="mb-7">{t("p3")}</p>
                        <p>{t("p4")}</p>
                        <p className="mt-7">{t('p5')}</p>
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <BlueDivCenter completBlue firstText={t("h2")} aboutStyle="hidden" />

                <div className='w-full h-full flex justify-center items-center'>
                    <div className="w-full h-[300px] bg-gray-50">

                    </div>
                </div>
            </div>

        </section>
    )
}