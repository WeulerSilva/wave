import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    aboutStyle?: string;
    firstText: string;
    textSize?: string;
    completBlue?: boolean;
}

export const BlueDiv = ({ aboutStyle, firstText, textSize, completBlue}: Props) => {
    const t = useTranslations('HomePage');

    return (
        <div className={`w-full h-[56px] ${completBlue ? 'bg-[#36A9E1]' : 'bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]'}   
                        flex justify-center items-center`}>
            <div className='w-full flex justify-between items-center md:w-[85%] xl:w-[65%]'>
                <h4 className={`${textSize ? '' : 'text-[12px]'} ${textSize} font-semibold text-white pl-6 uppercase font-conthrax md:text-md lg:text-xl`}>{firstText}</h4>
                <AboutSpan style={`bg-bluedark text-white ${aboutStyle}`} />
            </div>
        </div>
    )
}