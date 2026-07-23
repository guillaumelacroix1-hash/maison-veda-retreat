import Hero from '../components/Hero'
import VosGuides from '../components/VosGuides'
import Programme from '../components/Programme'
import Villas from '../components/Villas'
import Gallery from '../components/Gallery'
import Tarifs from '../components/Tarifs'
import FAQ from '../components/FAQ'
import Prolonger from '../components/Prolonger'
import FinalCTA from '../components/FinalCTA'
import PageMeta from '../components/site/PageMeta'
import SectionNav from '../components/site/SectionNav'
import { useI18n } from '../i18n'
import { getRetreat } from '../data/retreats'

/**
 * Page de la retraite Hatha & Kundalini, 7 au 13 février 2027.
 *
 * C'est la maquette déjà validée : elle sert de référence visuelle au reste du
 * site et devient ici une page enfant du listing des retraites. Son en-tête et
 * son pied de page sont désormais fournis par SiteLayout, et sa navigation par
 * ancres par <SectionNav>.
 *
 * À faire : ces sections portent encore leurs textes en dur, en français.
 * Elles passeront par le dictionnaire i18n au moment de la version anglaise.
 */
export default function RetraiteSriLanka2027() {
    const { t, lang } = useI18n()
    const retreat = getRetreat('sri-lanka-2027')
    const copy = retreat[lang] ?? retreat.fr

    const sections = [
        { id: 'guides', label: t('retreats.guides') },
        { id: 'programme', label: t('retreats.programme') },
        { id: 'hebergement', label: t('nav.venue') },
        { id: 'tarifs', label: t('retreats.pricing') },
        { id: 'galerie', label: t('venue.galleryTitle') },
        { id: 'faq', label: t('retreats.faq') },
        { id: 'prolonger', label: t('retreats.extend') },
    ]

    return (
        <>
            <PageMeta title={`${copy.title}, ${copy.dates}`} description={copy.summary} />

            <div id="accueil"><Hero /></div>

            <SectionNav items={sections} />

            {/* scroll-offset compense l'en-tête fixe et la barre de sections. */}
            <div className="scroll-offset">
                <div id="guides"><VosGuides /></div>
                <div id="programme"><Programme /></div>
                <div id="hebergement"><Villas /></div>
                <div id="tarifs"><Tarifs /></div>
                <div id="galerie"><Gallery /></div>
                <div id="faq"><FAQ /></div>
                <div id="prolonger"><Prolonger /></div>
            </div>

            <FinalCTA />
        </>
    )
}
