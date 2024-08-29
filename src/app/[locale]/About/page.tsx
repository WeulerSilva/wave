import { useTranslations } from "next-intl";

export default function pages() {
    const t = useTranslations('HomePage');

    return (
        <div>{t("about")}</div>
    )
}