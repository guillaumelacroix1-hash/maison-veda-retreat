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
PHOTO_DUO = os.path.join(ROOT, "public/images/professeures/lilie-anna-namaste.jpg")
PHOTO_LAC = os.path.join(ROOT, "public/visites/IMG_0945.jpg")
PHOTO_LOFT = os.path.join(ROOT, "ressources/info-pack/loft/img-008.jpg")
PHOTO_MAISON = os.path.join(ROOT, "ressources/info-pack/earth-house/img-000.jpg")
PHOTO_SHALA = os.path.join(ROOT, "ressources/info-pack/yoga-shala/img-001.jpg")
PHOTO_PLAGE = os.path.join(ROOT, "public/new_image/IMG_1494.jpeg")


# ------------------------------------------------------------------ outils
def fit_cover(path, x, y, w, h, c, alpha=1.0):
    """Dessine une photo qui remplit la zone (comme object-fit: cover)."""
    with PILImage.open(path) as im:
        iw, ih = im.size
    ratio_box, ratio_img = w / h, iw / ih
    if ratio_img > ratio_box:      # image trop large : on rogne les côtés
        dh, dw = h, h * ratio_img
        dx, dy = x - (dw - w) / 2, y
    else:                          # image trop haute : on rogne haut et bas
        dw, dh = w, w / ratio_img
        dx, dy = x, y - (dh - h) / 2
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


def tracked(c, text, x, y, font, size, color, tracking):
    """
    Texte à lettres écartées, centré sur `x`.

    L'écartement passe par un objet texte : dans cette version de ReportLab, le
    canevas lui-même n'expose pas setCharSpace.
    """
    c.setFillColor(color)
    w = c.stringWidth(text, font, size) + tracking * (len(text) - 1)
    t = c.beginText(x - w / 2, y)
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
              "Respiration", "Grâce et connexion au divin"]


def flyer_cours(path, size):
    """Cours du lundi à La Maison VEDA France. Même maquette en A5 et en A4."""
    W, H = size
    c = pdfcanvas.Canvas(path, pagesize=size)
    c._pagesize = size
    k = W / A5[0]  # facteur d'échelle : la maquette est dessinée pour un A5

    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Filigrane : le Sri Yantra, très discret derrière le texte.
    mandala(c, W / 2, H * 0.55, W * 1.1, alpha=0.06)

    c.setStrokeColor(GOLD)
    c.setLineWidth(0.7 * k)
    c.rect(7 * mm * k, 7 * mm * k, W - 14 * mm * k, H - 14 * mm * k, fill=0, stroke=1)

    mandala(c, W / 2, H - 24 * mm * k, 19 * mm * k, alpha=0.95)

    centered(c, "LA MAISON VEDA", H - 34 * mm * k, SANS_B, 7 * k, GOLD, tracking=2.2 * k)
    centered(c, "Saint-Simon, Charente", H - 39 * mm * k, SANS, 7 * k, LIGHT)

    y = H - 49 * mm * k
    centered(c, "Cours de", y, SERIF, 23 * k, colors.white)
    centered(c, "Kundalini Yoga", y - 10.5 * mm * k, SERIF_I, 23 * k, GOLD)

    rule(c, y - 17 * mm * k, 24 * mm * k)

    # L'invitation, dans les mots d'Aurélie.
    ty = y - 24 * mm * k
    ty = wrap(c, "Lilie, fondatrice de La Maison VEDA, est en France et donne des "
                 "cours en septembre et en octobre seulement. Rejoignez-la pour une "
                 "expérience de reconnexion.",
              W / 2, ty, W - 40 * mm * k, SANS, 8.2 * k, 12 * k, LIGHT, align="center")

    # Le bas de la page est ancré, pas laissé au fil du texte : le cadre, le
    # bandeau et le pied de page ont des hauteurs connues, on les pose depuis
    # le bord inférieur pour qu'aucun ne finisse hors page.
    box_h = 38 * mm * k
    band_h = 24 * mm * k
    band_y = 28 * mm * k
    box_y = band_y + band_h + 7 * mm * k

    # Ce que la pratique ouvre : la liste s'empile vers le haut depuis le cadre,
    # pour ne jamais venir mordre dessus quel que soit le nombre de lignes.
    kw_gap = 5.6 * mm * k
    for i, line in enumerate(reversed(EXPERIENCE)):
        centered(c, line.upper(), box_y + box_h + 8 * mm * k + i * kw_gap,
                 SANS_B, 6.6 * k, GOLD, tracking=1.3 * k)
    c.setStrokeColor(GOLD)
    c.setLineWidth(0.6 * k)
    c.setFillColor(colors.Color(1, 1, 1, alpha=0.05))
    c.roundRect(15 * mm * k, box_y, W - 30 * mm * k, box_h, 4 * mm * k, fill=1, stroke=1)

    top = box_y + box_h
    centered(c, "TOUS LES LUNDIS", top - 8 * mm * k, SANS_B, 8.2 * k, GOLD, tracking=1.8 * k)

    c.setFont(SERIF, 17 * k)
    c.setFillColor(colors.white)
    c.drawCentredString(W * 0.34, top - 17 * mm * k, "10 h 00")
    c.drawCentredString(W * 0.66, top - 17 * mm * k, "18 h 30")
    c.setFont(SANS, 7 * k)
    c.setFillColor(LIGHT)
    c.drawCentredString(W * 0.34, top - 21.5 * mm * k, "le matin")
    c.drawCentredString(W * 0.66, top - 21.5 * mm * k, "le soir")
    c.setFont(SANS, 6.2 * k)
    c.setFillColor(colors.Color(0.72, 0.68, 0.55))
    c.drawCentredString(W * 0.66, top - 25 * mm * k, "à partir de 3 personnes")

    rule(c, top - 28.5 * mm * k, W - 46 * mm * k, colors.Color(1, 1, 1, alpha=0.15), 0.5 * k)
    c.setFont(SERIF, 14 * k)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, top - 34.5 * mm * k, "15 € la séance")

    # Le pont vers le Sri Lanka : c'est là que la pratique se prolonge.
    c.setFillColor(GOLD)
    c.roundRect(15 * mm * k, band_y, W - 30 * mm * k, band_h, 3 * mm * k, fill=1, stroke=0)
    tracked(c, "ET SI L'ENVIE VOUS PREND, RETROUVEZ-LA AU SRI LANKA",
            W / 2, band_y + band_h - 7 * mm * k, SANS_B, 6.6 * k, DARK, 1.6 * k)
    c.setFillColor(DARK)
    c.setFont(SERIF_I, 9.4 * k)
    c.drawCentredString(W / 2, band_y + band_h - 14 * mm * k, "Séjourner à La Maison VEDA · Rejoindre les cours du studio")
    c.drawCentredString(W / 2, band_y + band_h - 19.5 * mm * k, "Vivre une retraite · Voyager avec chauffeur privé")

    fy = 22 * mm * k
    c.setFont(SANS, 6.8 * k)
    c.setFillColor(LIGHT)
    c.drawCentredString(W / 2, fy, "Renseignements et inscription")
    c.setFont(SANS_B, 9 * k)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, fy - 5.5 * mm * k, "WhatsApp  +33 6 79 09 89 47")
    c.setFont(SANS, 6.8 * k)
    c.setFillColor(LIGHT)
    c.drawCentredString(W / 2, fy - 10.5 * mm * k, "lamaisonveda@gmail.com   ·   lamaisonveda.com")

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

    Toutes les hauteurs sont posées d'avance, en millimètres depuis le bas :
    une affiche ne se compose pas au fil du texte, et c'est ce qui garantit
    qu'aucun bloc n'en recouvre un autre.
    """
    W, H = A4
    c = pdfcanvas.Canvas(path, pagesize=A4)
    c._pagesize = A4

    c.setFillColor(DARK)
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Photo en tête, fondue vers le vert par un voile dégradé.
    photo_h = 100 * mm
    fit_cover(PHOTO_LAC, 0, H - photo_h, W, photo_h, c)
    c.drawImage(ImageReader(VOILE), 0, H - photo_h, width=W, height=photo_h * 0.62, mask="auto")

    mandala(c, W / 2, H - photo_h - 6 * mm, 20 * mm, alpha=0.95)

    centered(c, "LA MAISON VEDA", 176 * mm, SANS_B, 9, GOLD, tracking=3)
    centered(c, "Sri Lanka", 158 * mm, SERIF_I, 36, colors.white)
    rule(c, 150 * mm, 30 * mm)

    wrap(c, "Deux villas au bord du lac de Koggala, un yoga shala sur le toit, "
            "et la jungle tout autour.",
         W / 2, 142 * mm, W - 46 * mm, SANS, 10, 14, LIGHT, align="center")

    # Les quatre façons de venir, deux par ligne.
    col_w = (W - 40 * mm - 6 * mm) / 2
    card_h = 20 * mm
    for i, (title, desc) in enumerate(FACONS):
        cx = 20 * mm + (col_w + 6 * mm) * (i % 2)
        cy = 132 * mm - (i // 2) * (card_h + 4 * mm)
        c.setStrokeColor(colors.Color(0.73, 0.61, 0.39, alpha=0.45))
        c.setLineWidth(0.5)
        c.roundRect(cx, cy - card_h, col_w, card_h, 2.5 * mm, fill=0, stroke=1)
        c.setFont(SERIF, 13)
        c.setFillColor(GOLD)
        c.drawString(cx + 6 * mm, cy - 8 * mm, title)
        c.setFont(SANS, 7.6)
        c.setFillColor(LIGHT)
        wrap(c, desc, cx + 6 * mm, cy - 13.5 * mm, col_w - 12 * mm, SANS, 7.6, 9.5, LIGHT)

    # Bandeau doré : la retraite de février et ses places restantes.
    band_y, band_h = 57 * mm, 26 * mm
    c.setFillColor(GOLD)
    c.roundRect(20 * mm, band_y, W - 40 * mm, band_h, 3 * mm, fill=1, stroke=0)
    tracked(c, "PROCHAINE RETRAITE", W / 2, band_y + band_h - 8 * mm, SANS_B, 7.5, DARK, 2)
    c.setFillColor(DARK)
    c.setFont(SERIF, 16)
    c.drawCentredString(W / 2, band_y + band_h - 16 * mm, "Hatha & Kundalini · 7 au 13 février 2027")
    c.setFont(SANS_B, 9)
    c.drawCentredString(W / 2, band_y + band_h - 22 * mm, "Il reste 3 places   ·   à partir de 1 280 €")

    # Trois vignettes du lieu.
    th, ty = 25 * mm, 26 * mm
    tw = (W - 40 * mm - 2 * 4 * mm) / 3
    for i, photo in enumerate([PHOTO_MAISON, PHOTO_SHALA, PHOTO_PLAGE]):
        fit_cover(photo, 20 * mm + i * (tw + 4 * mm), ty, tw, th, c)

    c.setFont(SANS, 7.5)
    c.setFillColor(LIGHT)
    c.drawCentredString(W / 2, 18 * mm, "Habaraduwa, lac de Koggala, sud du Sri Lanka")
    c.setFont(SANS_B, 9.5)
    c.setFillColor(GOLD)
    c.drawCentredString(W / 2, 11 * mm, "WhatsApp  +33 6 79 09 89 47   ·   lamaisonveda.com")

    c.showPage()
    c.save()
    return path


for p in [
    flyer_cours(os.path.join(OUT, "cours-kundalini-A5.pdf"), A5),
    flyer_cours(os.path.join(OUT, "cours-kundalini-A4.pdf"), A4),
    affiche_sri_lanka(os.path.join(OUT, "sri-lanka-A4.pdf")),
]:
    print("OK ->", os.path.basename(p), os.path.getsize(p) // 1024, "Ko")
