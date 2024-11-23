import {useTranslations} from 'next-intl';
import { getLocale } from 'next-intl/server';

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  const locale = getLocale();
  return <h1>{t('title')} locale:{locale}</h1>;
}
