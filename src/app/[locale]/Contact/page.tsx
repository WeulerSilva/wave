
import { useTranslations } from "next-intl";
import { EmailContact } from "../components/EmailContact";
import { EmailForm } from "../components/EmailForm";


export default function Pages() {
    const t = useTranslations('products');
    

    return (
        <section className='w-screen flex flex-col justify-center items-center'>
            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <EmailContact/>
                
            </div>

            <div className="w-full mt-10 flex justify-center flex-col items-center">
                <EmailForm/>
                
            </div>
        </section>
    )
}