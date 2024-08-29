type Props = {
    style?: string;
}

export const MediaMentionsLogos = ({style}: Props) => {
    return (
        <div className={`${style} w-20 h-20 rounded-full bg-gray-700 cursor-pointer lg:w-24 lg:h-24`}></div>
    )
}