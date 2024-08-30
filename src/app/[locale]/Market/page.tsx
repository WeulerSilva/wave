import { useTranslations } from "next-intl";
import { BlueDiv } from "../components/BlueDiv";
import { TitleParagraph } from "../components/TitleParagraph";

export default function Pages() {
    const t = useTranslations('market');


    return (
        <section className='w-screen flex flex-col justify-center items-center mb-10'>
            <div className="w-full mt-10 flex justify-center flex-col items-center">
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
                    </div>
                </div>
            </div>

            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <BlueDiv completBlue firstText={t("h1")} aboutStyle='hidden' />

                <div className='w-full mt-7 px-6 my-4 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-6 md:space-x-10 md:w-[85%] md:flex-row xl:w-[65%]'>
                    <div className="w-full md:w-[50%]">
                        <TitleParagraph h1={t('m-h-1')} p={t('m-p-1')} />
                        <TitleParagraph h1={t('m-h-2')} p={t('m-p-2')} />
                        <TitleParagraph h1={t('m-h-3')} p={t('m-p-3')} />
                    </div>

                    <div className="w-full md:w-[50%]">
                        <TitleParagraph h1={t('m-h-4')} p={t('m-p-4')} />
                        <TitleParagraph h1={t('m-h-5')} p={t('m-p-5')} />
                        <TitleParagraph h1={t('m-h-6')} p={t('m-p-6')} />
                    </div>
                </div>
            </div>
        </section>
    )
}