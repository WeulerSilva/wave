import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { TitleParagraph } from "../components/TitleParagraph";
import { LiDiv } from "../components/LiDiv";

export default function Pages() {
    const t = useTranslations('tech');


    return (
        <section className='w-screen flex flex-col justify-center items-center mb-10'>
            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <BlueDiv completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:w-[85%] xl:w-[65%]'>
                    <LiDiv text="li-1" />
                    <LiDiv text="li-2" />
                    <LiDiv text="li-3" />
                    <LiDiv text="li-4" />
                    <LiDiv text="li-5" />

                    <div className="w-full h-[217px] bg-onda-tech bg-cover bg-[-100px] bg-bluelight md:bg-[-10px]">
                        <div className="w-full h-[96%] flex justify-end items-end md:h-[92%] lg:h-[88%]">
                            <h1 className="font-beyonders text-white text-2xl  md:text-4xl lg:text-5xl lg:pr-[107px] xl:text-[51px]"
                                >{t("img-text")}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center">
                <BlueDiv completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0 md:space-x-10 md:w-[85%] md:flex-row xl:w-[65%]'>
                    
                </div>
            </div>
        </section>
    )
}