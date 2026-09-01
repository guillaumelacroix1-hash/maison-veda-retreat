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
import re
from pathlib import Path

from PIL import Image
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (BaseDocTemplate, Frame, Image as RLImage, KeepTogether,
                                PageTemplate, Paragraph, Spacer, Table, TableStyle)

RACINE = Path(__file__).resolve().parents[2]
SOURCE = RACINE / 'nouveau-site' / 'info-pack-organisateurs.md'
PHOTOS = RACINE / 'ressources' / 'info-pack'
SORTIE = RACINE / 'public' / 'docs'

VERT = colors.HexColor('#002d2c')
OR = colors.HexColor('#b99b64')
SABLE = colors.HexColor('#b49174')
CREME = colors.HexColor('#fdfbf7')
GRIS = colors.HexColor('#4a4a4a')

MARGE = 18 * mm
LARGEUR = A4[0] - 2 * MARGE

S = {
    'titre': ParagraphStyle('titre', fontName='Times-Bold', fontSize=26, leading=30,
                            textColor=VERT, spaceAfter=2 * mm),
    'chapeau': ParagraphStyle('chapeau', fontName='Helvetica', fontSize=9.5, leading=14,
                              textColor=SABLE, spaceAfter=6 * mm),
    'section': ParagraphStyle('section', fontName='Times-Bold', fontSize=15, leading=19,
                              textColor=VERT, spaceBefore=7 * mm, spaceAfter=3 * mm),
    'texte': ParagraphStyle('texte', fontName='Helvetica', fontSize=9.5, leading=14.5,
                            textColor=GRIS, spaceAfter=2.5 * mm),
    'puce': ParagraphStyle('puce', fontName='Helvetica', fontSize=9.5, leading=14.5,
                           textColor=GRIS, leftIndent=5 * mm, bulletIndent=1 * mm,
                           spaceAfter=1.5 * mm),
    'couv_titre': ParagraphStyle('ct', fontName='Times-Bold', fontSize=34, leading=40,
                                 textColor=colors.white, alignment=TA_CENTER),
    'couv_sous': ParagraphStyle('cs', fontName='Helvetica', fontSize=12, leading=18,
                                textColor=colors.white, alignment=TA_CENTER),
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


def fond_couverture(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(VERT)
    canvas.rect(0, 0, *A4, stroke=0, fill=1)
    couv = PHOTOS / 'couverture.jpg'
    if couv.exists():
        canvas.drawImage(str(couv), 0, A4[1] * 0.32, width=A4[0], height=A4[1] * 0.68,
                         preserveAspectRatio=True, anchor='c', mask='auto')
    canvas.restoreState()


def pied_de_page(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor('#e6e0d5'))
    canvas.setLineWidth(0.5)
    canvas.line(MARGE, 14 * mm, A4[0] - MARGE, 14 * mm)
    canvas.setFont('Helvetica', 7.5)
    canvas.setFillColor(SABLE)
    canvas.drawString(MARGE, 9.5 * mm, 'LA MAISON VEDA — SRI LANKA')
    canvas.drawRightString(A4[0] - MARGE, 9.5 * mm, 'lamaisonveda.com')
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

    # --- couverture ---
    titre = 'Info Pack Organisateurs' if langue == 'fr' else 'Organisers Info Pack'
    sous = ('Accueillir votre retraite au Sri Lanka' if langue == 'fr'
            else 'Hosting your retreat in Sri Lanka')
    histoire += [Spacer(1, A4[1] * 0.70), Paragraph(titre, S['couv_titre']),
                 Spacer(1, 4 * mm), Paragraph(sous, S['couv_sous'])]
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
                parts.append(Paragraph(markdown_vers_html(contenu), S['puce'], bulletText='—'))
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
                     onPage=fond_couverture),
        PageTemplate(id='corps', frames=[cadre], onPage=pied_de_page),
    ])
    doc.build(histoire)
    return doc.filename


if __name__ == '__main__':
    for langue in ('fr', 'en'):
        chemin = construire(langue)
        print(f'{langue} → {chemin}')
