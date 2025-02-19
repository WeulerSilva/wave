
import { useTranslations } from "next-intl";
import { EmailContact } from "../components/EmailContact";
import { EmailForm } from "../components/EmailForm";


export default function Pages() {
    const t = useTranslations('contact');


    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className='w-full mt-4 px-6 my-1 flex justify-between items-start flex-col text-[15px] font-nexa 
                                text-justify md:pl-0  md:w-[90%]'>
                <p className="mb-2">{t("p-1")}</p>
                <p>{t("p-2")}</p>
            </div>
            <div className="w-full mt-4 flex justify-center flex-col items-center">
                <EmailContact />

            </div>

            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <EmailForm />

            </div>
        </section>
    )
}