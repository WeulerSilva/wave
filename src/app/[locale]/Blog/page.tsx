import { useTranslations } from "next-intl";
import { BlogDiv } from "../components/BlogDiv";
import { AboutSpan } from "../components/AboutSpan";

export default function Pages() {
    const t = useTranslations('blog');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-screen h-[350px] flex justify-center md:h-[264px]'>
                <div className='w-full h-full flex justify-center items-start bg-mar-blog bg-cover bg-center md:flex-row md:bg-bottom md:w-[90%] xl:w-[70%]'>
                    <div className="w-full h-full flex justify-center items-center md:justify-start">
                        <h1 className="font-beyonders text-white text-7xl text-center mb-4 md:pl-10 md:mb-5 2xl:mb-14 md:text-6xl lg:text-7xl 
                           lg:mb-9 xl:text-7xl 2xl:text-[68px]">BLOG</h1>
                    </div>
                </div>
            </div>

            <div className="w-full mt-7 px-6 my-4 flex justify-center items-center flex-col text-[15px] font-nexa 
                            text-center md:items-start md:justify-start md:text-justify md:pl-0 md:space-x-10 md:w-[90%] md:flex-row xl:w-[70%]">
                <h3 className="w-[80%] h-full text-[17px] font-conthrax md:text-[21px] lg:w-[60%]">{t("h1")}</h3>
            </div>

            <div className='w-full mt-7 px-6 my-4 flex justify-between items-center flex-col text-[15px] font-nexa 
                             text-justify md:px-0 md:w-[90%] xl:w-[70%]'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:gap-5 lg:grid-cols-3">
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                </div>

                <AboutSpan style="bg-bluedark text-white p-1 mr-0 mb-4 md:mt-10 md:mb-6" text={t('more')}/>
            </div>

        </section>
    )
}