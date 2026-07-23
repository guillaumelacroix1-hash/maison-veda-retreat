/**
 * Bandeau d'ouverture des pages intérieures.
 * L'accueil et la page retraite 2027 ont leur propre hero plein écran.
 */
export default function PageHero({ eyebrow, title, accent, lead, image }) {
    return (
        <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-veda-dark pt-32">
            {image && (
                <>
                    <img
                        src={image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover opacity-40"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-veda-dark via-veda-dark/70 to-veda-dark/30" />
                </>
            )}

            <div className="relative mx-auto w-full max-w-container px-6 pb-16 md:pb-24">
                {eyebrow && (
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-veda-gold">
                        {eyebrow}
                    </p>
                )}
                <h1 className="font-heading text-4xl leading-tight text-balance md:text-6xl">
                    {title}
                    {accent && <> <span className="italic text-veda-gold">{accent}</span></>}
                </h1>
                {lead && (
                    <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-veda-light/70">
                        {lead}
                    </p>
                )}
            </div>
        </section>
    )
}
