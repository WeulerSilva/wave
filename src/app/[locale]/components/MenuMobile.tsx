"use client"

import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type Props = {
    onClick: () => void;
}

export const MenuMobile = ({ onClick }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        onClick();

        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="flex w-10 h-10 relative md:hidden" onClick={handleClick}>
            <div className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                <AiOutlineMenu className="w-[46px] h-[46px] cursor-pointer text-white" />
            </div>
            <div className={`transition-transform duration-300 absolute ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0'}`}>
                <AiOutlineClose className="w-10 h-10 cursor-pointer text-white" />
            </div>
        </div>
    );
};
