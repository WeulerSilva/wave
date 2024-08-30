"use client";

import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import LanguageToggle from "./LanguageToggle";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";
import LanguageMobile from "./LanguageMobile";

export default function Header() {
    const t = useTranslations('header');

    const menuItems = [
        { key: 'Home', href: '/' },
        { key: 'About', href: '/About' },
        { key: 'Technology', href: '/Technology' },
        { key: 'Products', href: '/Products' },
        { key: 'Market', href: '/Market' },
        { key: 'Sustainability', href: '/Sustainability' },
        { key: 'Blog', href: '/Blog' },
        { key: 'Contact', href: '/Contact' }
    ];

    const router = useRouter();
    const pathname = usePathname();  // Obtém a rota atual

    const [MenuMobileOpen, setMenuMobileOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setMenuMobileOpen(!MenuMobileOpen);
    };

    return (
        <header className="flex justify-around items-center space-x-2 relative w-screen h-28 bg-bluedark md:justify-center md:items-end xl:space-x-6">
            <div className="w-60 h-28 flex justify-items-center items-end md:absolute md:w-52 md:h-44 md:top-10 lg:h-28
                            lg:relative lg:w-56">
                                <div className="w-full h-full bg-logo bg-contain bg-no-repeat bg-bottom mb-9 md:bg-top md:mb-6 lg:bg-center"></div>
                            </div>

            <MenuMobile onClick={handleMenuOpen}/>

            <div className="hidden md:flex md:relative">
                <ul className="flex space-x-3 font-[MontSerrat]  uppercase text-[8.5px] lg:space-x-4 2xl:space-x-14">
                    {menuItems.map((item) => {
                        // Verifica se o item é a página atual
                        const isActive = 
                            item.href === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.href);

                        return (
                            <li 
                                key={item.key} 
                                className={`font-conthrax cursor-pointer max-w-[106px] leading-none pb-2 font-semibold text-center 
                                ${isActive ? 'border-b-4 border-bluelight' : 'border-b-4 border-[#002D3A] hover:border-bluelight'} 
                                text-white`} 
                                onClick={() => router.push(item.href)}
                            >
                                <a>
                                    {t(item.key)}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <LanguageToggle/>
            </div>

            <div className={`w-[85vw] ${MenuMobileOpen ? 'h-[400px]' : 'h-0'} z-20 bg-bluelight absolute top-24 transition-all duration-500 ease-in-out overflow-hidden flex justify-center items-center`}>
                <nav className="flex flex-col">
                    <ul className="w-full flex flex-col justify-center items-center space-y-4 font-semibold text-md font-conthrax  uppercase">
                    {menuItems.map((item) => {
                        // Verifica se o item é a página atual
                        const isActive = 
                            item.href === '/' 
                            ? pathname === '/' 
                            : pathname.startsWith(item.href);

                        return (
                            <li 
                                key={item.key} 
                                className={`cursor-pointer max-w-full leading-none pb-0 font-semibold text-center 
                                ${isActive ? 'border-b-4 border-bluedark' : 'border-b-4 border-bluelight hover:border-bluelight'} 
                                text-white`} 
                                onClick={() => router.push(item.href)}
                            >
                                <a className="font-conthrax">
                                    {t(item.key)}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <LanguageMobile/>
                </nav>
            </div>
        </header>
    )
}
