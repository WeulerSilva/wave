"use client";

import { Link } from '@/navigation';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageToggle() {
    const pathName = usePathname();
    const router = useRouter();

    // Extract the current locale from the pathname
    const currentLocale = pathName.split('/')[1];

    return (
        <div className='absolute right-0 space-x-2 top-[-55px] flex'>
            <Link href="/" locale='pt'>
                <Image
                    alt="pt"
                    src={"/images/pt.webp"}
                    width={22}
                    height={22}
                    className={`rounded-md ${currentLocale === 'pt' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
            <Link href="/" locale='en'>
                <Image
                    alt="en"
                    src={"/images/en.webp"}
                    width={22}
                    height={22}
                    className={`rounded-md ${currentLocale === 'en' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
            <Link href="/" locale='es'>
                <Image
                    alt="es"
                    src={"/images/es.webp"}
                    width={22}
                    height={22}
                    className={`rounded-md ${currentLocale === 'es' ? 'border border-white' : ''} hover:border border-white`}
                />
            </Link>
        </div>
    );
}
