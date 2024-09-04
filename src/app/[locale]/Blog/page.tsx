import { useTranslations } from "next-intl";
import { BlogDiv } from "../components/BlogDiv";
import { AboutSpan } from "../components/AboutSpan";

export default function Pages() {
    const t = useTranslations('blog');

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-screen h-[350px] flex justify-center md:h-[220px]'>
                <div className='w-full h-full relative flex justify-center items-start bg-mar-blog bg-cover bg-center md:flex-row md:bg-bottom md:w-[90%]'>
                    <div className="w-full h-full flex justify-center items-center md:justify-start">
                        <h1 className="font-beyonders text-white text-7xl text-center mb-4 md:pl-10 md:mb-5 2xl:mb-14 md:text-6xl lg:text-7xl 
                           lg:mb-[40px] xl:mb-16 xl:text-5xl 2xl:text-[50px]">BLOG</h1>
                    </div>

                    <div className="w-[205px] h-[140px] bg-laptop bg-cover bg-center absolute bottom-[-10px] 
                         right-6 md:bottom-[-35px] md:w-[255px] md:h-[170px] md:right-[50px] lg:right-[80px] lg:w-[300px] lg:h-[200px]
                         xl:w-[330px] xl:h-[220px] xl:right-[80px] 2xl:right-[70px] 2xl:w-[365px] 2xl:h-[240px]"></div>
                </div>
            </div>

            <div className="w-full mt-7 px-2 my-4 flex justify-center items-center flex-col text-[15px] font-nexa 
                            text-center md:items-start md:justify-start md:text-justify md:pl-0 md:space-x-10 md:w-[90%] md:flex-row">
                <h3 className="w-[80%] h-full text-center text-[13px] font-conthrax md:text-[17px]">{t("h1")}</h3>
            </div>

            <div className='w-full mt-7 px-6 my-4 flex justify-between items-center flex-col text-[15px] font-nexa 
                             text-justify md:px-0 md:w-[90%]'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:gap-8 lg:grid-cols-3">
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                    <BlogDiv widthFull goText={t("go")} callText={t("call")} />
                </div>

                <AboutSpan style="bg-bluedark text-white p-1 mr-0 mb-4 md:mt-10 md:mb-6" text={t('more')} />
            </div>

        </section>
    )
}