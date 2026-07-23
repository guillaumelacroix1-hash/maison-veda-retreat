import { useEffect } from 'react'

/**
 * Renseigne le titre et la méta description de la page.
 *
 * Suffisant pour un site rendu côté client. Si le référencement des pages
 * devient un enjeu, il faudra passer au prérendu statique à la construction.
 */
export default function PageMeta({ title, description }) {
    useEffect(() => {
        const full = title ? `${title} | La Maison VEDA` : 'La Maison VEDA'
        document.title = full

        if (!description) return
        let tag = document.querySelector('meta[name="description"]')
        if (!tag) {
            tag = document.createElement('meta')
            tag.setAttribute('name', 'description')
            document.head.appendChild(tag)
        }
        tag.setAttribute('content', description)
    }, [title, description])

    return null
}
