import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import PageMeta from '../components/site/PageMeta'

export default function NotFound() {
    const { t, lang, path } = useI18n()

    return (
        <>
            <PageMeta title="404" />
            <section className="flex min-h-[70vh] items-center justify-center px-6 pt-32 text-center">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">404</p>
                    <h1 className="mt-5 font-heading text-4xl md:text-6xl">
                        {lang === 'en' ? 'Page not found' : 'Page introuvable'}
                    </h1>
                    <Link
                        to={path('home')}
                        className="mt-10 inline-block rounded-full bg-veda-gold px-10 py-3.5 text-sm font-bold uppercase tracking-widest text-veda-dark transition-colors duration-300 hover:bg-white"
                    >
                        {t('nav.home')}
                    </Link>
                </div>
            </section>
        </>
    )
}
