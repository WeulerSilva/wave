import { useTranslations } from "next-intl";

type Props = {
    style?: string;
    text?: string;
}

export const AboutSpan = ({ style, text }: Props) => {
    const t = useTranslations('HomePage');

    return (
        <span className={`${style} font-conthrax px-3 h-fit text-[10px] font-semibold rounded-xl uppercase cursor-pointer md:text-[12px]`}>
            {text ? text : t('video-span')}
        </span>
    );
}
