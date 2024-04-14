import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

const defaultLocale = 'en';
const locales = ['bn', 'en'];

function getLocale(request) {
    const acceptLanguage = request.headers.get('accept-language');
    const headers = { 'accept-language': acceptLanguage };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
}
export function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const pathnameHasLocale = locales.some(
        locale =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );
    if (pathnameHasLocale) return NextResponse.next();
    const locale = getLocale(request);
    return NextResponse.redirect(
        new URL(`/${locale}/${pathname}`, request.url)
    );
}

export const config = {
    matcher: ['/((?!api|assets|.*\\..*|_next).*)'],
};
