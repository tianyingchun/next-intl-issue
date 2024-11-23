import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
import { LanguageCode } from '../generated-types';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LanguageCode.en, LanguageCode.de],
  // Used when no locale matches
  defaultLocale: LanguageCode.en,
  localePrefix: 'as-needed',
  localeDetection: false,
  domains: [
    {
      domain: 'www.issilo.com',
      defaultLocale: LanguageCode.en,
      locales: [LanguageCode.en],
    },
    {
      domain: 'www.issilo.de',
      defaultLocale: LanguageCode.de,
    },
  ],
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
