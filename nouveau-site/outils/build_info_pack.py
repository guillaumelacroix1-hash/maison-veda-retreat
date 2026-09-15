#!/usr/bin/env python3
"""Génère les deux Info Packs Organisateurs (FR et EN) en PDF.

La seule source de vérité est `nouveau-site/info-pack-organisateurs.md` :
ce script le lit, il ne duplique aucun texte. Modifier le markdown puis
relancer :

    python3 nouveau-site/outils/build_info_pack.py

Les photos viennent de `ressources/info-pack/<hebergement>/`, groupées par
hébergement. Elles ne sont jamais mélangées d'un hébergement à l'autre :
c'est une consigne d'Aurélie, chaque bande illustre le logement qu'elle
accompagne.
"""
import io
import re
from datetime import date
from pathlib import Path

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (BaseDocTemplate, Frame, Image as RLImage, KeepTogether,
                                PageTemplate, Paragraph, Spacer, Table, TableStyle)

RACINE = Path(__file__).resolve().parents[2]
SOURCE = RACINE / 'nouveau-site' / 'info-pack-organisateurs.md'
PHOTOS = RACINE / 'ressources' / 'info-pack'
SORTIE = RACINE / 'public' / 'docs'
POLICES = RACINE / 'ressources' / 'polices'
PHOTO_COUVERTURE = RACINE / 'public' / 'srilanka' / 'lac-koggala-lever-du-jour.jpg'
LOGO = RACINE / 'public' / 'icon-logo-final' / 'logo-veda-srilanka-complet.png'

VERT = colors.HexColor('#002d2c')
OR = colors.HexColor('#b99b64')
SABLE = colors.HexColor('#b49174')
CREME = colors.HexColor('#fdfbf7')
GRIS = colors.HexColor('#4a4a4a')
IVOIRE = colors.HexColor('#f4eee3')


def enregistrer_polices():
    """Les polices du site : Playfair Display pour les titres, Inter pour le texte.

    Times et Helvetica, les polices par défaut du générateur, donnaient au pack
    l'allure d'un document administratif sans rapport avec le site qui y
    renvoie. Les fichiers vivent dans ressources/polices (licence SIL OFL).
    """
    for nom in ('PlayfairDisplay-Regular', 'PlayfairDisplay-RegularItalic', 'PlayfairDisplay-SemiBold',
                'Inter-Regular', 'Inter-RegularItalic', 'Inter-Medium', 'Inter-SemiBold'):
        pdfmetrics.registerFont(TTFont(nom, str(POLICES / f'{nom}.ttf')))
    # Les <b> et <i> du markdown retrouvent ainsi la bonne graisse.
    pdfmetrics.registerFontFamily('Inter', normal='Inter-Regular', bold='Inter-SemiBold',
                                  italic='Inter-RegularItalic', boldItalic='Inter-SemiBold')
    pdfmetrics.registerFontFamily('PlayfairDisplay', normal='PlayfairDisplay-SemiBold',
                                  bold='PlayfairDisplay-SemiBold', italic='PlayfairDisplay-RegularItalic',
                                  boldItalic='PlayfairDisplay-RegularItalic')


enregistrer_polices()

MARGE = 18 * mm
LARGEUR = A4[0] - 2 * MARGE

S = {
    'titre': ParagraphStyle('titre', fontName='PlayfairDisplay-SemiBold', fontSize=26, leading=30,
                            textColor=VERT, spaceAfter=2 * mm),
    'chapeau': ParagraphStyle('chapeau', fontName='Inter-Regular', fontSize=9, leading=14,
                              textColor=SABLE, spaceAfter=6 * mm),
    'section': ParagraphStyle('section', fontName='PlayfairDisplay-SemiBold', fontSize=16, leading=20,
                              textColor=VERT, spaceBefore=7 * mm, spaceAfter=3 * mm),
    'texte': ParagraphStyle('texte', fontName='Inter-Regular', fontSize=9, leading=14.5,
                            textColor=GRIS, spaceAfter=2.5 * mm),
    'puce': ParagraphStyle('puce', fontName='Inter-Regular', fontSize=9, leading=14.5,
                           textColor=GRIS, leftIndent=5 * mm, bulletIndent=1 * mm,
                           bulletFontName='Inter-Regular', bulletColor=OR, spaceAfter=1.5 * mm),
}


def markdown_vers_html(t: str) -> str:
    """Gras, italique et échappement, pour les Paragraph de reportlab."""
    t = t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    t = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)
    t = re.sub(r'(?<!\*)\*([^*]+?)\*(?!\*)', r'<i>\1</i>', t)
    return t


def lire_sections(langue: str):
    """Découpe le markdown en sections {titre: [blocs]} pour une langue."""
    texte = SOURCE.read_text(encoding='utf-8')
    debut = texte.index('# VERSION FRANÇAISE') if langue == 'fr' else texte.index('# ENGLISH VERSION')
    fin = texte.index('# ENGLISH VERSION') if langue == 'fr' else len(texte)
    corps = texte[debut:fin]

    sections, courante = [], None
    for ligne in corps.split('\n'):
        l = ligne.rstrip()
        if l.startswith('## '):
            courante = (l[3:].strip(), [])
            sections.append(courante)
        elif courante is None or not l.strip() or l.startswith('# ') or l.startswith('---'):
            continue
        elif l.startswith('- '):
            courante[1].append(('puce', l[2:].strip()))
        elif l.startswith('|'):
            cellules = [c.strip() for c in l.strip('|').split('|')]
            if all(set(c) <= set('-: ') for c in cellules):
                continue
            courante[1].append(('ligne', cellules))
        else:
            courante[1].append(('texte', l.strip()))
    return sections


def bande_photos(dossier: str, largeur=LARGEUR, hauteur=32 * mm, ecart=4 * mm):
    """Une rangée de photos d'un même hébergement, à hauteur égale.

    L'écart est réservé dans la largeur de colonne et l'image dessinée moins
    large : un padding de tableau ne se voit pas quand l'image occupe toute
    la colonne.
    """
    chemins = sorted((PHOTOS / dossier).glob('*.jpg'))
    if not chemins:
        return None
    ratios = [Image.open(p).size[0] / Image.open(p).size[1] for p in chemins]
    ecarts = ecart * (len(chemins) - 1)
    echelle = (largeur - ecarts) / (hauteur * sum(ratios))

    images, colonnes = [], []
    for i, (p, r) in enumerate(zip(chemins, ratios)):
        h = hauteur * echelle
        w = h * r
        images.append(RLImage(str(p), width=w, height=h))
        colonnes.append(w + (ecart if i < len(chemins) - 1 else 0))

    t = Table([images], colWidths=colonnes, hAlign='LEFT')
    t.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return t


# Quelle bande de photos suit quelle section, et dans quel ordre.
# Le titre est reconnu par un mot-clé, pour survivre à une reformulation.
BANDES = {
    'base': ['loft', 'earth-house', 'yoga-shala'],
    'partenaire': ['tothupola', 'jungle-breeze'],
}

TABLEAU = {'fr': 'Tarifs', 'en': 'Rates'}


# Textes de la couverture. La citation est la phrase d'Aurélie en tête du pack
# (info-pack-organisateurs.md) : la couverture n'affirme rien que le pack ne
# dise déjà.
COUVERTURE = {
    'fr': {
        'surtitre': 'INFO PACK  ·  ORGANISATEURS DE RETRAITES',
        'titre': 'Accueillir votre retraite',
        'accent': 'au bord du lac de Koggala',
        'citation': '«\u00a0Vous venez enseigner, je m\u2019occupe du reste.\u00a0»',
        'signature': 'AURÉLIE DUTREY, FONDATRICE',
        'saison': 'Saison',
    },
    'en': {
        'surtitre': 'INFO PACK  ·  FOR RETREAT ORGANISERS',
        'titre': 'Host your retreat',
        'accent': 'on the shores of Koggala Lake',
        'citation': '\u201cYou come to teach, I take care of the rest.\u201d',
        'signature': 'AURÉLIE DUTREY, FOUNDER',
        'saison': 'Season',
    },
}


def saison_en_cours(jour=None):
    """La saison court de novembre à avril : de mai à décembre, on annonce la
    prochaine, de janvier à avril, celle qui se déroule. Calculée au moment de
    la génération, elle ne vieillit pas dans le script."""
    jour = jour or date.today()
    debut = jour.year if jour.month >= 5 else jour.year - 1
    return f'{debut} · {debut + 1}'


def photo_de_couverture():
    """Le lac de Koggala au lever du soleil, recadré au format A4 et fondu dans le
    vert de la marque en haut, pour le logo, et en bas, où l'eau calme porte le
    texte. L'ancienne couverture laissait une photo délavée dans un bandeau,
    et toute la moitié basse vide."""
    photo = Image.open(PHOTO_COUVERTURE).convert('RGB')
    rapport = A4[0] / A4[1]
    largeur, hauteur = photo.size
    if largeur / hauteur > rapport:
        nouvelle = round(hauteur * rapport)
        x = round((largeur - nouvelle) * 0.46)   # le soleil et la barque restent dans le cadre
        photo = photo.crop((x, 0, x + nouvelle, hauteur))
    else:
        nouvelle = round(largeur / rapport)
        y = round((hauteur - nouvelle) / 2)
        photo = photo.crop((0, y, largeur, y + nouvelle))
    photo = photo.resize((1240, 1754), Image.LANCZOS)

    def opacite(t):
        if t < 0.20:
            return 0.62 * (1 - t / 0.20) ** 1.6
        if t < 0.52:
            return 0.0
        if t < 0.72:
            u = (t - 0.52) / 0.20
            return 0.93 * (u * u * (3 - 2 * u))
        return 0.93 + 0.05 * (t - 0.72) / 0.28

    degrade = Image.new('L', (1, photo.height))
    degrade.putdata([round(255 * opacite(y / (photo.height - 1))) for y in range(photo.height)])
    degrade = degrade.resize(photo.size)
    photo = Image.composite(Image.new('RGB', photo.size, (0, 45, 44)), photo, degrade)

    tampon = io.BytesIO()
    photo.save(tampon, 'JPEG', quality=90)
    tampon.seek(0)
    return ImageReader(tampon)


def texte_espace(canvas, texte, x, y, police, taille, espacement, couleur, centre=True):
    """Texte en capitales espacées, centré sur x.

    L'espacement des lettres est un réglage d'état du PDF : il survit au bloc
    de texte et élargissait tous les textes suivants, qui sortaient décentrés.
    L'état est donc sauvegardé puis restauré autour du tracé."""
    largeur = pdfmetrics.stringWidth(texte, police, taille) + espacement * (len(texte) - 1)
    canvas.saveState()
    objet = canvas.beginText(x - largeur / 2 if centre else x, y)
    objet.setFont(police, taille)
    objet.setCharSpace(espacement)
    objet.setFillColor(couleur)
    objet.textOut(texte)
    objet.setCharSpace(0)
    canvas.drawText(objet)
    canvas.restoreState()


def couverture(canvas, doc, langue):
    t = COUVERTURE[langue]
    L, H = A4
    centre = L / 2
    canvas.saveState()

    canvas.drawImage(photo_de_couverture(), 0, 0, width=L, height=H)

    # Filet doré intérieur, comme un passe-partout.
    canvas.setStrokeColor(OR)
    canvas.setStrokeAlpha(0.55)
    canvas.setLineWidth(0.6)
    canvas.rect(9 * mm, 9 * mm, L - 18 * mm, H - 18 * mm, stroke=1, fill=0)
    canvas.setStrokeAlpha(1)

    if LOGO.exists():
        largeur_logo = 34 * mm
        logo = Image.open(LOGO)
        hauteur_logo = largeur_logo * logo.height / logo.width
        canvas.drawImage(str(LOGO), centre - largeur_logo / 2, H - 22 * mm - hauteur_logo,
                         width=largeur_logo, height=hauteur_logo, mask='auto')

    texte_espace(canvas, t['surtitre'], centre, 95 * mm, 'Inter-SemiBold', 7.5, 2.2, OR)

    canvas.setFillColor(IVOIRE)
    canvas.setFont('PlayfairDisplay-Regular', 36)
    canvas.drawCentredString(centre, 78 * mm, t['titre'])
    canvas.setFillColor(OR)
    canvas.setFont('PlayfairDisplay-RegularItalic', 30)
    canvas.drawCentredString(centre, 65 * mm, t['accent'])

    canvas.setStrokeColor(OR)
    canvas.setLineWidth(0.8)
    canvas.line(centre - 8 * mm, 54 * mm, centre + 8 * mm, 54 * mm)

    canvas.setFillColor(IVOIRE)
    canvas.setFont('PlayfairDisplay-RegularItalic', 13)
    canvas.drawCentredString(centre, 43 * mm, t['citation'])
    texte_espace(canvas, t['signature'], centre, 36 * mm, 'Inter-Medium', 6.8, 1.6, SABLE)

    canvas.setStrokeColor(OR)
    canvas.setStrokeAlpha(0.45)
    canvas.setLineWidth(0.4)
    canvas.line(20 * mm, 22 * mm, L - 20 * mm, 22 * mm)
    canvas.setStrokeAlpha(1)
    canvas.setFillColor(SABLE)
    canvas.setFont('Inter-Regular', 7.5)
    canvas.drawString(20 * mm, 16 * mm, f"{t['saison']} {saison_en_cours()}")
    canvas.drawRightString(L - 20 * mm, 16 * mm, 'srilanka.lamaisonveda.com')

    canvas.restoreState()


def pied_de_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#e6e0d5'))
    canvas.setLineWidth(0.5)
    canvas.line(MARGE, 14 * mm, A4[0] - MARGE, 14 * mm)
    canvas.setFont('Inter-Regular', 7.5)
    canvas.setFillColor(SABLE)
    canvas.drawString(MARGE, 9.5 * mm, 'LA MAISON VEDA · SRI LANKA')
    canvas.drawRightString(A4[0] - MARGE, 9.5 * mm, 'srilanka.lamaisonveda.com')
    canvas.setFillColor(OR)
    canvas.drawCentredString(A4[0] / 2, 9.5 * mm, str(canvas.getPageNumber() - 1))
    canvas.restoreState()


def table_tarifs(lignes):
    donnees = [[Paragraph(markdown_vers_html(c), S['texte']) for c in l] for l in lignes if len(l) >= 2]
    if not donnees:
        return None
    t = Table(donnees, colWidths=[LARGEUR * 0.52, LARGEUR * 0.48])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('TOPPADDING', (0, 0), (-1, -1), 3 * mm),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 3 * mm),
        ('LEFTPADDING', (0, 0), (-1, -1), 3 * mm),
        ('RIGHTPADDING', (0, 0), (-1, -1), 3 * mm),
        ('LINEBELOW', (0, 0), (-1, -2), 0.4, colors.HexColor('#e6e0d5')),
        ('BACKGROUND', (0, 0), (-1, -1), CREME),
    ]))
    return t


def construire(langue: str):
    sections = lire_sections(langue)
    histoire = []

    # --- couverture : couverture() la dessine en entier, la page n'attend
    # qu'un contenu, même vide, pour exister ---
    titre = 'Info Pack Organisateurs' if langue == 'fr' else 'Organisers Info Pack'
    histoire += [Spacer(1, 1)]
    # Sans NextPageTemplate, le saut de page garde le gabarit de couverture
    # et son fond photo se répète derrière tout le document.
    from reportlab.platypus import NextPageTemplate, PageBreak
    histoire += [NextPageTemplate('corps'), PageBreak()]

    for i, (titre_section, blocs) in enumerate(sections):
        parts = [Paragraph(markdown_vers_html(titre_section), S['section'])]
        lignes_tableau = []
        for genre, contenu in blocs:
            if genre == 'texte':
                parts.append(Paragraph(markdown_vers_html(contenu), S['texte']))
            elif genre == 'puce':
                parts.append(Paragraph(markdown_vers_html(contenu), S['puce'], bulletText='•'))
            elif genre == 'ligne':
                lignes_tableau.append(contenu)
        if lignes_tableau:
            t = table_tarifs(lignes_tableau)
            if t:
                parts.append(t)

        histoire.append(KeepTogether(parts) if len(parts) < 8 else parts[0])
        if len(parts) >= 8:
            histoire.extend(parts[1:])

        bas = titre_section.lower()
        for cle, dossiers in BANDES.items():
            if cle in bas:
                for d in dossiers:
                    bande = bande_photos(d)
                    if bande:
                        histoire += [Spacer(1, 3 * mm), bande]
                histoire.append(Spacer(1, 2 * mm))

    doc = BaseDocTemplate(str(SORTIE / f'info-pack-organisateurs-{langue}.pdf'),
                          pagesize=A4, title=titre, author='La Maison VEDA',
                          leftMargin=MARGE, rightMargin=MARGE,
                          topMargin=MARGE, bottomMargin=22 * mm)
    cadre = Frame(MARGE, 22 * mm, LARGEUR, A4[1] - MARGE - 22 * mm, id='corps')
    doc.addPageTemplates([
        PageTemplate(id='couverture', frames=[Frame(MARGE, 22 * mm, LARGEUR, A4[1] - 40 * mm)],
                     onPage=lambda canvas, document: couverture(canvas, document, langue)),
        PageTemplate(id='corps', frames=[cadre], onPage=pied_de_page),
    ])
    doc.build(histoire)
    return doc.filename


def image_de_couverture(pdf: Path, langue: str):
    """Écrit la couverture du PDF en image pour le site (public/docs).

    Tirée du PDF lui-même : l'ancienne image, faite à part, ne ressemblait plus
    au document téléchargé depuis des semaines. Demande PyMuPDF ; sans lui, le
    PDF est produit quand même et l'image garde sa version précédente.
    """
    try:
        import fitz
    except ImportError:
        print('  (image de couverture non régénérée : pip install pymupdf)')
        return None
    page = fitz.open(str(pdf))[0]
    pixels = page.get_pixmap(dpi=96)
    image = Image.frombytes('RGB', (pixels.width, pixels.height), pixels.samples)
    destination = SORTIE / f'info-pack-cover-{langue}.jpg'
    image.save(destination, 'JPEG', quality=82, optimize=True, progressive=True)
    return destination


if __name__ == '__main__':
    for langue in ('fr', 'en'):
        chemin = construire(langue)
        print(f'{langue} : {chemin}')
        image = image_de_couverture(Path(chemin), langue)
        if image:
            print(f'     couverture : {image}')
