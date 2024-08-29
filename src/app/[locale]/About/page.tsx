import { useTranslations } from "next-intl";

export default function Pages() {
    const t = useTranslations('HomePage');

    return (
        <div>{t("about")}</div>
    )
}