#!/usr/bin/env python3
"""
Supports imprimés de La Maison VEDA, aux couleurs de la charte.

Trois pièces :
  1. cours-kundalini-A5.pdf  — flyer à distribuer aux portes ouvertes
  2. cours-kundalini-A4.pdf  — même contenu, à afficher sur la porte du studio
  3. sri-lanka-A4.pdf        — affiche du lieu au Sri Lanka

Tout est dessiné sur le canevas plutôt qu'en texte qui coule : une affiche se
compose au millimètre, et le contenu est court et connu à l'avance.
"""

import os
from reportlab.lib.pagesizes import A4, A5
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.lib.utils import ImageReader
from PIL import Image as PILImage

ROOT = "/Users/macdelilie/Library/Mobile Documents/com~apple~CloudDocs/Claude code/retraite maison veda SL modif lilie"
SC = os.path.join(ROOT, "nouveau-site", "supports-imprimes")
OUT = SC

DARK = colors.HexColor("#002d2c")
GOLD = colors.HexColor("#b99b64")
CREAM = colors.HexColor("#fdfbf7")
LIGHT = colors.HexColor("#f5f5f5")

SERIF = "Times-Roman"
SERIF_I = "Times-Italic"
SANS = "Helvetica"
SANS_B = "Helvetica-Bold"

MANDALA = os.path.join(SC, "mandala-or.png")
PHOTO_LILIE = os.path.join(ROOT, "public/images/professeures/lilie-sadhana.jpg")
PHOTO_LILIE_DRUM = os.path.join(ROOT, "public/images/professeures/lilie-tambour.jpg")
# Celle du site : Aurélie en tailleur, tout en blanc, jungle et fleurs roses.
PHOTO_LILIE_ASSISE = os.path.join(
    ROOT, "public/srilanka/histoire/53eba50a-9f90-4341-881d-4771610909fb.jpg")
PHOTO_DUO = os.path.join(ROOT, "public/images/professeures/lilie-anna-namaste.jpg")
PHOTO_LAC = os.path.join(ROOT, "public/visites/IMG_0945.jpg")
PHOTO_LOFT = os.path.join(ROOT, "ressources/info-pack/loft/img-008.jpg")
PHOTO_MAISON = os.path.join(ROOT, "ressources/info-pack/earth-house/img-000.jpg")
PHOTO_SHALA = os.path.join(ROOT, "ressources/info-pack/yoga-shala/img-001.jpg")
PHOTO_PLAGE = os.path.join(ROOT, "public/new_image/IMG_1494.jpeg")


# ------------------------------------------------------------------ outils
def fit_cover(path, x, y, w, h, c, alpha=1.0, zoom=1.0, focus=0.5, focus_x=0.5):
    """
    Dessine une photo qui remplit la zone (comme object-fit: cover).

    `zoom` resserre le cadrage, `focus` et `focus_x` choisissent la partie
    gardée (0 = haut / gauche, 1 = bas / droite). Sans ça, le rognage tombe
    toujours au centre de l'image, ce qui coupe le sujet dès que le cadre n'a
    pas les proportions de la photo.
    """
    with PILImage.open(path) as im:
        iw, ih = im.size
    scale = max(w / iw, h / ih) * zoom
    dw, dh = iw * scale, ih * scale
    dx = x - (dw - w) * focus_x
    dy = y - (dh - h) * (1 - focus)
    c.saveState()
    p = c.beginPath()
    p.rect(x, y, w, h)
    c.clipPath(p, stroke=0)
    if alpha < 1:
        c.setFillAlpha(alpha)
    c.drawImage(ImageReader(path), dx, dy, width=dw, height=dh, mask="auto")
    c.restoreState()


def mandala(c, cx, cy, size, alpha=1.0):
    c.saveState()
    c.setFillAlpha(alpha)
    with PILImage.open(MANDALA) as im:
        ratio = im.height / im.width
    c.drawImage(ImageReader(MANDALA), cx - size / 2, cy - size * ratio / 2,
                width=size, height=size * ratio, mask="auto")
    c.restoreState()


def tracked(c, text, x, y, font, size, color, tracking, align="center"):
    """
    Texte à lettres écartées, centré sur `x` (ou calé à gauche sur `x`).

    L'écartement passe par un objet texte : dans cette version de ReportLab, le
    canevas lui-même n'expose pas setCharSpace.
    """
    c.setFillColor(color)
    w = c.stringWidth(text, font, size) + tracking * (len(text) - 1)
    t = c.beginText(x if align == "left" else x - w / 2, y)
    t.setFont(font, size)
    t.setCharSpace(tracking)
    t.setFillColor(color)
    t.textOut(text)
    c.drawText(t)
    # L'espacement reste dans l'état PDF : sans cette remise à zéro, tous les
    # textes suivants sortiraient étirés et déborderaient de la page.
    reset = c.beginText(0, 0)
    reset.setCharSpace(0)
    c.drawText(reset)


def centered(c, text, y, font, size, color, tracking=0):
    """Texte centré sur la page."""
    cx = c._pagesize[0] / 2
    if tracking:
        tracked(c, text, cx, y, font, size, color, tracking)
    else:
        c.setFont(font, size)
        c.setFillColor(color)
        c.drawCentredString(cx, y, text)


def rule(c, y, width, color=GOLD, thickness=0.8):
    c.setStrokeColor(color)
    c.setLineWidth(thickness)
    pw = c._pagesize[0]
    c.line(pw / 2 - width / 2, y, pw / 2 + width / 2, y)


def wrap(c, text, x, y, max_w, font, size, leading, color, align="left"):
    """Découpe un paragraphe et le dessine. Renvoie l'ordonnée finale."""
    c.setFont(font, size)
    c.setFillColor(color)
    words, line = text.split(), ""
    lines = []
    for word in words:
        trial = f"{line} {word}".strip()
        if c.stringWidth(trial, font, size) <= max_w:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for l in lines:
        if align == "center":
            c.drawCentredString(x, y, l)
        else:
            c.drawString(x, y, l)
        y -= leading
    return y



def gradient_png(path, w=8, h=600):
    """
    Voile vert dégradé, transparent en haut, opaque en bas.

    Dessiné une fois en image : empiler des rectangles semi-transparents laisse
    des bandes visibles à l'impression.
    """
    if os.path.exists(path):
        return path
    im = PILImage.new("RGBA", (w, h))
    px = im.load()
    for y in range(h):
        a = int(255 * (y / (h - 1)) ** 1.5)
        for x in range(w):
            px[x, y] = (0, 45, 44, a)
    im.save(path)
    return path


VOILE = gradient_png(os.path.join(SC, "voile-vert.png"))


# ------------------------------------------------------- flyer des cours
EXPERIENCE = ["Alignement du système nerveux", "Méditation et chant",
              "Respiration", "Connexion au divin"]


def flyer_cours(path, size):
    """
    Cours du lundi à La Maison VEDA France. Même maquette en A5 et en A4.

    Toute la page est posée en millimètres depuis le bas, et le facteur `k`
    l'agrandit d'un format à l'autre : le A4 est exactement le A5, en plus
    grand. Composer au fil du texte laisserait les blocs se chevaucher dès
    qu'une ligne change de longueur.
    """
    W, H = size
    c = pdfcanvas.Canvas(path, pagesize=size)
    c._pagesize = size
    k = W / A5[0]  # facteur d'échelle : la maquette est dessinée pour un A5

    def y(v):      # millimètres depuis le bas, à l'échelle du format
        return v * mm * k

    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Filigrane : le Sri Yantra, très discret derrière le texte.
    mandala(c, W / 2, H * 0.5, W * 1.1, alpha=0.06)

    c.setStrokeColor(GOLD)
    c.setLineWidth(0.7 * k)
    c.rect(7 * mm * k, 7 * mm * k, W - 14 * mm * k, H - 14 * mm * k, fill=0, stroke=1)

    mandala(c, W / 2, y(190), 15 * mm * k, alpha=0.95)
    centered(c, "LA MAISON VEDA", y(175), SANS_B, 7.4 * k, GOLD, tracking=2.2 * k)

    centered(c, "Cours de", y(165), SERIF, 21 * k, colors.white)
    centered(c, "Kundalini Yoga", y(155.5), SERIF_I, 21 * k, GOLD)

    # Le portrait à droite, l'invitation à gauche. Le carré est découpé dans
    # une photo verticale : d'où le zoom et le point de mire, qui cadrent sur
    # la posture plutôt que sur le milieu de l'image.
    side = 48 * mm * k
    fit_cover(PHOTO_LILIE_ASSISE, W - 15 * mm * k - side, y(94), side, side, c,
              zoom=1.587, focus=0.575, focus_x=0.89)
    c.setStrokeColor(colors.Color(0.73, 0.61, 0.39, alpha=0.55))
    c.setLineWidth(0.6 * k)
    c.rect(W - 15 * mm * k - side, y(94), side, side, fill=0, stroke=1)

    col_x = 15 * mm * k
    col_w = 64 * mm * k

    # L'invitation, dans les mots d'Aurélie.
    wrap(c, "Aurélie Dutrey est en France et donne des cours en septembre et en "
            "octobre seulement. Rejoignez-la pour une expérience de reconnexion.",
         col_x, y(139.5), col_w, SANS, 8.8 * k, 4.1 * mm * k, colors.white)

    # Ce que la pratique ouvre.
    for i, line in enumerate(EXPERIENCE):
        tracked(c, line.upper(), col_x, y(118.5 - i * 5.5), SANS_B, 6.8 * k, GOLD,
                1.2 * k, align="left")

    # Le cadre pratique : jour, horaires, tarif, lieu.
    box_top = 88.5
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.6 * k)
    c.setFillColor(colors.Color(1, 1, 1, alpha=0.05))
    c.roundRect(15 * mm * k, y(55.5), W - 30 * mm * k, y(33), 4 * mm * k,
                fill=1, stroke=1)

    centered(c, "TOUS LES LUNDIS", y(box_top - 7), SANS_B, 8.6 * k, GOLD, tracking=1.8 * k)

    c.setFont(SERIF, 18 * k)
    c.setFillColor(colors.white)
    c.drawCentredString(W * 0.34, y(box_top - 16.5), "10 h 00")
    c.drawCentredString(W * 0.66, y(box_top - 16.5), "18 h 30")

    rule(c, y(box_top - 22), W - 46 * mm * k, colors.Color(1, 1, 1, alpha=0.18), 0.5 * k)
    c.setFont(SERIF, 14.5 * k)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, y(box_top - 26), "15 €  la séance")
    c.setFont(SANS, 7 * k)
    c.setFillColor(colors.white)
    c.drawCentredString(W / 2, y(box_top - 30.5), "À La Maison VEDA · Saint-Simon, Charente")

    # Le pont vers le Sri Lanka : c'est là que la pratique se prolonge.
    band_top = 50.5
    c.setFillColor(GOLD)
    c.roundRect(15 * mm * k, y(26.5), W - 30 * mm * k, y(24), 3 * mm * k, fill=1, stroke=0)
    tracked(c, "ET SI L'ENVIE VOUS PREND", W / 2, y(band_top - 5.5),
            SANS_B, 6.8 * k, DARK, 1.6 * k)
    c.setFillColor(DARK)
    c.setFont(SERIF_I, 11 * k)
    c.drawCentredString(W / 2, y(band_top - 11.5), "Retrouvez Aurélie au Sri Lanka, de novembre à avril")
    c.setFont(SERIF_I, 8.8 * k)
    c.drawCentredString(W / 2, y(band_top - 17), "Un séjour à La Maison VEDA · Un cours au studio · Une retraite transformative")
    c.drawCentredString(W / 2, y(band_top - 21.5), "Et votre voyage dans l'île, que nous organisons pour vous avec chauffeur privé")

    c.setFont(SANS, 7.4 * k)
    c.setFillColor(colors.white)
    c.drawCentredString(W / 2, y(21.5), "Renseignements et inscription")
    c.setFont(SANS_B, 9.6 * k)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, y(16), "WhatsApp  +33 6 79 09 89 47")
    c.setFont(SANS, 7.4 * k)
    c.setFillColor(colors.white)
    c.drawCentredString(W / 2, y(11), "lamaisonveda@gmail.com   ·   lamaisonveda.com")

    c.showPage()
    c.save()
    return path


# ------------------------------------------------------- affiche Sri Lanka
FACONS = [
    ("Séjourner", "Louez une villa face au lac, pour vos vacances."),
    ("Pratiquer", "Cours de Kundalini quotidiens, ouverts à tous."),
    ("Vivre une retraite", "Une semaine de yoga en petit groupe, avec Lilie."),
    ("Partir en voyage", "Des circuits à travers l'île, véhicule privé et chauffeur."),
]


def affiche_sri_lanka(path):
    """
    Affiche du lieu au Sri Lanka.

    Une affiche se lit debout, à un mètre ou deux : les corps de texte sont
    nettement plus gros que sur un dépliant qu'on tient en main. Et comme tout
    est en blanc sur vert foncé, ils sont aussi plus gras — un texte clair sur
    fond sombre s'amincit à l'impression, l'encre bavant sur les contours.

    Toutes les hauteurs sont posées d'avance, en millimètres depuis le bas :
    c'est ce qui garantit qu'aucun bloc n'en recouvre un autre.
    """
    W, H = A4
    c = pdfcanvas.Canvas(path, pagesize=A4)
    c._pagesize = A4

    def y(v):
        return v * mm

    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Photo en tête, fondue vers le vert par un voile dégradé.
    fit_cover(PHOTO_LAC, 0, y(222), W, y(75), c)
    c.drawImage(ImageReader(VOILE), 0, y(222), width=W, height=y(42), mask="auto")

    mandala(c, W / 2, y(220), 22 * mm, alpha=0.95)

    centered(c, "LA MAISON VEDA", y(202), SANS_B, 11, GOLD, tracking=3.5)
    centered(c, "Sri Lanka", y(183), SERIF_I, 46, colors.white)
    rule(c, y(175), 30 * mm)

    wrap(c, "Deux villas au bord du lac de Koggala, un yoga shala sur le toit, "
            "et la jungle tout autour.",
         W / 2, y(167.5), W - 30 * mm, SANS, 12.5, 5.5 * mm, colors.white,
         align="center")

    # Les quatre façons de venir, deux par ligne.
    col_w = (W - 40 * mm - 6 * mm) / 2
    card_h = 22 * mm
    for i, (title, desc) in enumerate(FACONS):
        cx = 20 * mm + (col_w + 6 * mm) * (i % 2)
        cy = y(153) - (i // 2) * (card_h + 5 * mm)
        c.setStrokeColor(colors.Color(0.73, 0.61, 0.39, alpha=0.55))
        c.setLineWidth(0.7)
        c.roundRect(cx, cy - card_h, col_w, card_h, 2.5 * mm, fill=0, stroke=1)
        c.setFont(SERIF, 17)
        c.setFillColor(GOLD)
        c.drawString(cx + 7 * mm, cy - 8 * mm, title)
        wrap(c, desc, cx + 7 * mm, cy - 14 * mm, col_w - 14 * mm, SANS, 10.5,
             4.6 * mm, colors.white)

    # Bandeau doré : la retraite de février et ses places restantes. C'est le
    # bloc le plus lisible de l'affiche — fond clair, texte foncé.
    band_top = 100 * mm
    c.setFillColor(GOLD)
    c.roundRect(20 * mm, y(56), W - 40 * mm, y(44), 3 * mm, fill=1, stroke=0)
    tracked(c, "PROCHAINE RETRAITE", W / 2, band_top - 9 * mm, SANS_B, 10, DARK, 2.5)
    c.setFillColor(DARK)
    c.setFont(SERIF, 19)
    c.drawCentredString(W / 2, band_top - 18 * mm, "Hatha & Kundalini · 7 au 13 février 2027")
    c.setFont(SANS_B, 12)
    c.drawCentredString(W / 2, band_top - 25.5 * mm, "Il reste 3 places   ·   à partir de 1 280 €")

    # Le tour qui enchaîne sur la retraite : même bandeau, séparé par un filet,
    # pour qu'on lise les deux dates comme un seul voyage possible.
    c.setStrokeColor(colors.Color(0, 0.18, 0.17, alpha=0.35))
    c.setLineWidth(0.6)
    c.line(W / 2 - 60 * mm, band_top - 30 * mm, W / 2 + 60 * mm, band_top - 30 * mm)
    c.setFillColor(DARK)
    c.setFont(SERIF, 14)
    c.drawCentredString(W / 2, band_top - 35.5 * mm,
                        "Et à la suite : le tour de l'île en mini-van, du 13 au 19 février")
    c.setFont(SANS, 10.5)
    c.drawCentredString(W / 2, band_top - 41 * mm,
                        "7 jours et 6 nuits  ·  à partir de 5 personnes  ·  100 à 150 €  par jour")

    # Trois vignettes du lieu.
    tw = (W - 40 * mm - 2 * 4 * mm) / 3
    for i, photo in enumerate([PHOTO_MAISON, PHOTO_SHALA, PHOTO_PLAGE]):
        fit_cover(photo, 20 * mm + i * (tw + 4 * mm), y(26), tw, y(26), c)

    c.setFont(SANS, 10)
    c.setFillColor(colors.white)
    c.drawCentredString(W / 2, y(20), "Habaraduwa, lac de Koggala, sud du Sri Lanka")
    c.setFont(SANS_B, 13)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, y(11), "WhatsApp  +33 6 79 09 89 47   ·   lamaisonveda.com")

    c.showPage()
    c.save()
    return path


for p in [
    flyer_cours(os.path.join(OUT, "cours-kundalini-A5.pdf"), A5),
    flyer_cours(os.path.join(OUT, "cours-kundalini-A4.pdf"), A4),
    affiche_sri_lanka(os.path.join(OUT, "sri-lanka-A4.pdf")),
]:
    print("OK ->", os.path.basename(p), os.path.getsize(p) // 1024, "Ko")
