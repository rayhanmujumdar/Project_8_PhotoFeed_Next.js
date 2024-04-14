'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }) {
    const dialogRef = useRef();
    const router = useRouter();
    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal;
        }
    }, []);
    const onHide = useCallback(() => {
        router.back();
    }, [router]);
    const onKeydown = useCallback(
        function (event) {
            if (event.key === 'Escape') onHide();
        },
        [onHide]
    );
    useEffect(() => {
        document.addEventListener('keydown', onkeydown);
    }, [onKeydown]);
    return (
        <div className="backdrop-blur-md w-full h-full fixed top-1/2 -translate-y-1/2 flex justify-center items-center z-50">
            <dialog
                ref={dialogRef}
                onClose={onHide}
                className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md lg:w-4/5"
            >
                <span
                    onClick={onHide}
                    className="flex justify-end cursor-pointer"
                >
                    <Image
                        src="/icons/xmark.svg"
                        alt="close"
                        width={30}
                        height={30}
                    />
                </span>
                {children}
            </dialog>
        </div>
    );
}
