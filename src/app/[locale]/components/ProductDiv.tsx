import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    firstText: string;
    img: string;
}

export const ProductDiv= ({ firstText, img}: Props) => {
    const t = useTranslations('HomePage');
    

    return (
        <div className="flex justify-center items-center w-[384px] h-[113px] bg-bluedark rounded-3xl md:w-[300px] md:[100px] 
                        lg:w-[270px] xl:w-[300px] 2xl:w-[384px] 2xl:h-[113px]">
            <div className={`w-[30%] h-[80%] ${img} bg-contain bg-no-repeat bg-center`}></div>
            <span className="w-[60%] h-full flex justify-start items-center pl-3 text-white font-conthrax text-[17px] 
                    lg:text-[15px] xl:text-[17px]">{firstText}</span>
        </div>
    )
}