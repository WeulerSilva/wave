import { useTranslations } from "next-intl";

type Props = {
    style?: string;
    firstText: string;
}

export const CircleDiv = ({ style, firstText }: Props) => {
    const t = useTranslations('about');

    return (
        <div className="w-full flex justify-center items-center flex-col mb-8 ld:mb-0 lg:w-[25%]">
            <div className={`w-[120px] h-[120px] ${style} bg-cover bg-center mb-8 lg:w-[140px] lg:h-[140px]`}></div>
            <span className="w-full text-[14px] text-center font-conthrax uppercase lg:text-[17px]">{t(firstText)}</span>
        </div>
    )
}