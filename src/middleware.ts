import createMiddleware from 'next-intl/middleware';
import { routing } from '@/i18n/routing';
import { type NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
	return handleI18nRouting(request);
}

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)']
};
