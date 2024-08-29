import { useTranslations } from "next-intl";
import { AboutSpan } from "./AboutSpan";

type Props = {
    aboutStyle?: string;
    firstText: string;
}

export const BlueDiv = ({ aboutStyle, firstText }: Props) => {
    const t = useTranslations('HomePage');

    return (
        <div className='w-full h-[56px] bg-[linear-gradient(to_right,#36A9E1_60%,white_95%)]  flex justify-center items-center'>
            <div className='w-[85%] flex justify-between items-center xl:w-[65%]'>
                <h4 className='text-[12px] font-semibold text-white pl-6 uppercase font-conthrax md:text-md lg:text-xl'>{firstText}</h4>
                <AboutSpan style={`bg-bluedark text-white ${aboutStyle}`} />
            </div>
        </div>
    )
}