'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const lang = pathname.split('/')[1];
    const [language, setLanguage] = useState(lang);
    const [show, setShow] = useState(false);
    const handleSetLanguage = updatedLang => {
        setLanguage(updatedLang);
        setShow(false);
        const newUrl = pathname.replace(lang, updatedLang);
        router.replace(newUrl);
    };
    return (
        <div className="flex gap-4 items-center">
            <div className="relative">
                <button
                    onClick={() => setShow(prev => !prev)}
                    className="flex items-center gap-2"
                >
                    {language === 'en' ? (
                        <Image
                            className="max-w-8"
                            src="/images/usa.png"
                            alt="bangla"
                            width={32}
                            height={32}
                        />
                    ) : (
                        <Image
                            className="max-w-8"
                            src="/images/bd.png"
                            alt="bangla"
                            width={32}
                            height={32}
                        />
                    )}
                    {language === 'en' ? 'English' : 'Bangla'}
                </button>
                {show && (
                    <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                        <li
                            onClick={() => handleSetLanguage('bn')}
                            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                        >
                            <Image
                                className="max-w-8"
                                src="/images/bd.png"
                                alt="bangla"
                                width={32}
                                height={32}
                            />
                            Bangla
                        </li>
                        <li
                            onClick={() => handleSetLanguage('en')}
                            className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                        >
                            <Image
                                className="max-w-8"
                                src="/images/usa.png"
                                alt="english"
                                width={32}
                                height={32}
                            />
                            English
                        </li>
                    </div>
                )}
            </div>
        </div>
    );
}
