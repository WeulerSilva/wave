"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

type Props = {
    style?: string;
    text?: string;
    link: string;
}

export const AboutSpan = ({ style, text, link }: Props) => {
    const t = useTranslations('HomePage');
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        const locale = pathname.split('/')[1]; // Obtém o primeiro segmento da URL (o idioma)
        router.push(`/${locale}${link}`);
    };

    return (
        <span
            onClick={handleClick}
            className={`${style} font-conthrax px-3 h-fit text-[10px] font-semibold rounded-xl uppercase cursor-pointer mr-6 md:mr-0`}
        >
            {text ? text : t('video-span')}
        </span>
    );
}
