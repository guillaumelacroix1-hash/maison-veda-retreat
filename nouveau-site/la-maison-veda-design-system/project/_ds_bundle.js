/* @ds-bundle: {"format":4,"namespace":"LaMaisonVedaDesignSystem_a675a4","components":[],"sourceHashes":{"ui_kits/site-retraite/app.jsx":"4525fa9d3c18","ui_kits/site-retraite/components.jsx":"a69a45810788","ui_kits/site-retraite/home.jsx":"a92b33b14c95","ui_kits/site-retraite/reserver.jsx":"95869677959a","ui_kits/site-retraite/sections.jsx":"8f356f14b87f","ui_kits/site-retraite/tarifs.jsx":"10d7ca18a05c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LaMaisonVedaDesignSystem_a675a4 = window.LaMaisonVedaDesignSystem_a675a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/site-retraite/app.jsx
try { (() => {
/* global React, ReactDOM, Navbar, Hero, Guides, Programme, Villas, Tarifs, FAQ, FinalCTA, Footer, Reserver */
const {
  useState: useStateA,
  useEffect: useEffectA
} = React;
function Home({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-veda-dark font-sans text-veda-light"
  }, /*#__PURE__*/React.createElement(Navbar, {
    onReserve: onReserve
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onReserve: onReserve
  }), /*#__PURE__*/React.createElement(Guides, null), /*#__PURE__*/React.createElement(Programme, null), /*#__PURE__*/React.createElement(Villas, null), /*#__PURE__*/React.createElement(Tarifs, {
    onReserve: onReserve
  }), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onReserve: onReserve
  })), /*#__PURE__*/React.createElement(Footer, null));
}
function App() {
  const [route, setRoute] = useStateA("home");
  const scrollRef = React.useRef(null);
  useEffectA(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [route]);
  return /*#__PURE__*/React.createElement("div", {
    id: "kit-scroll",
    ref: scrollRef,
    className: "h-screen overflow-y-auto bg-veda-dark"
  }, route === "home" ? /*#__PURE__*/React.createElement(Home, {
    onReserve: () => setRoute("reserver")
  }) : /*#__PURE__*/React.createElement(Reserver, {
    onBack: () => setRoute("home")
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-retraite/components.jsx
try { (() => {
/* global React */
const {
  useState,
  useEffect,
  useRef
} = React;

/* ----------------------------------------------------------
   Icon — wraps lucide UMD. Renders a stable <span> whose
   contents are managed imperatively so React never fights
   lucide's DOM replacement.
---------------------------------------------------------- */
function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 2
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !window.lucide) return;
    ref.current.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    i.setAttribute("class", className);
    i.setAttribute("stroke-width", strokeWidth);
    ref.current.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        "stroke-width": strokeWidth
      }
    });
  }, [name, className, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "inline-flex items-center justify-center"
  });
}

/* ----------------------------------------------------------
   Reveal — signature fade-in-up on scroll (whileInView).
---------------------------------------------------------- */
function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as: Tag = "div"
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Failsafe 1: if already in (or above) the viewport on mount, show immediately.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 0.92) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: "-40px"
    });
    io.observe(el);
    // Failsafe 2: never let content stay invisible if IO never fires.
    const t = setTimeout(() => setShown(true), 600);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: className,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`
    }
  }, children);
}

/* ----------------------------------------------------------
   Logo — Sri Yantra mandala + two-line wordmark.
---------------------------------------------------------- */
function Logo({
  className = "h-10"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `flex items-center gap-3 ${className}`
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-veda-mandala-gold.svg",
    alt: "La Maison Veda",
    className: "h-full w-auto shrink-0"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center leading-none"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-heading text-veda-gold whitespace-nowrap",
    style: {
      fontSize: "1.05em",
      fontWeight: 500,
      letterSpacing: "0.08em"
    }
  }, "LA MAISON VEDA"), /*#__PURE__*/React.createElement("span", {
    className: "font-sans text-veda-light/80 whitespace-nowrap",
    style: {
      fontSize: "0.55em",
      fontWeight: 300,
      letterSpacing: "0.32em",
      marginTop: "5px"
    }
  }, "LAKE VILLAS & YOGA")));
}

/* ----------------------------------------------------------
   SectionHeader — eyebrow + heading w/ gold-italic accent +
   animated gold divider. `accent` splits the title.
---------------------------------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  accent,
  after,
  center = true,
  light = false,
  divider = false,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `${center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"} mb-16`
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "h3",
    className: "text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
  }, eyebrow), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    delay: 0.1,
    className: `text-4xl md:text-6xl font-heading leading-tight ${light ? "text-veda-light" : "text-veda-dark"}`
  }, title, " ", accent && /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold"
  }, accent), " ", after), divider && /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.3,
    className: `${center ? "mx-auto" : ""} mt-8`
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-24 h-px bg-veda-gold"
  })), intro && /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.4,
    as: "p",
    className: `font-light mt-8 text-sm sm:text-base leading-relaxed ${light ? "text-veda-light/70" : "text-veda-dark/70"}`
  }, intro));
}

/* ----------------------------------------------------------
   Footer
---------------------------------------------------------- */
function Footer() {
  const links = ["Accueil", "La maison VEDA", "Cours & Formations", "Hébergement"];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-veda-dark text-veda-light py-16 px-6 border-t border-white/5 relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl font-heading tracking-widest uppercase"
  }, "La Maison ", /*#__PURE__*/React.createElement("span", {
    className: "text-veda-gold italic"
  }, "Veda")), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/60 font-light text-sm leading-relaxed"
  }, "Une invitation \xE0 la reconnexion profonde \xE0 travers le Hatha et le Kundalini Yoga, au c\u0153ur du Sri Lanka.")), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-veda-gold font-semibold tracking-widest uppercase text-sm"
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-4 text-sm font-light text-veda-light/70"
  }, /*#__PURE__*/React.createElement("li", {
    className: "flex items-start gap-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    className: "w-4 h-4 text-veda-gold/70 shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, "4 rue des Moulins", /*#__PURE__*/React.createElement("br", null), "16120 Saint-Simon, France")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    className: "w-4 h-4 text-veda-gold/70 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "+33 6 79 09 89 47")), /*#__PURE__*/React.createElement("li", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    className: "w-4 h-4 text-veda-gold/70 shrink-0"
  }), /*#__PURE__*/React.createElement("span", null, "lamaisonveda@gmail.com")))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-veda-gold font-semibold tracking-widest uppercase text-sm"
  }, "Liens Utiles"), /*#__PURE__*/React.createElement("ul", {
    className: "space-y-3 text-sm font-light text-veda-light/70"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    className: "hover:text-veda-gold transition-colors cursor-pointer"
  }, l))))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-veda-gold font-semibold tracking-widest uppercase text-sm"
  }, "Suivez-nous"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-4"
  }, /*#__PURE__*/React.createElement("a", {
    className: "w-10 h-10 rounded-full border border-veda-light/20 flex items-center justify-center hover:bg-veda-gold hover:border-veda-gold hover:text-white transition-all cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram",
    className: "w-4 h-4"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-veda-light/40 font-light"
  }, /*#__PURE__*/React.createElement("p", null, "2027 \xA9 La Maison VEDA \u2013 Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("p", null, "Con\xE7u pour une exp\xE9rience digitale premium."))));
}
Object.assign(window, {
  Icon,
  Reveal,
  Logo,
  SectionHeader,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-retraite/home.jsx
try { (() => {
/* global React, Logo, Icon, Reveal, SectionHeader, Footer */
const {
  useState: useStateH,
  useEffect: useEffectH
} = React;

/* ---------------- Navbar ---------------- */
function Navbar({
  onReserve
}) {
  const [scrolled, setScrolled] = useStateH(false);
  const [menuOpen, setMenuOpen] = useStateH(false);
  useEffectH(() => {
    const scroller = document.getElementById("kit-scroll");
    const onScroll = () => setScrolled((scroller ? scroller.scrollTop : window.scrollY) > 50);
    const target = scroller || window;
    target.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => target.removeEventListener("scroll", onScroll);
  }, []);
  const nav = ["Vos Guides", "Programme", "Hébergement", "Tarifs"];
  return /*#__PURE__*/React.createElement("nav", {
    className: `absolute top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3 md:py-4" : "bg-transparent border-b border-transparent py-4 md:py-6"}`,
    style: {
      position: "sticky"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("a", {
    className: "block cursor-pointer"
  }, /*#__PURE__*/React.createElement(Logo, {
    className: "h-8 md:h-11"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex items-center space-x-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-8 text-sm font-medium tracking-wide text-veda-light"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    className: "hover:text-veda-gold transition-colors duration-300 cursor-pointer"
  }, n))), /*#__PURE__*/React.createElement("button", {
    onClick: onReserve,
    className: "flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full hover:bg-white transition-colors duration-300 shadow-md"
  }, "R\xE9server")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(!menuOpen),
    className: "md:hidden p-2 text-veda-light hover:text-veda-gold transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: menuOpen ? "x" : "menu",
    className: "w-6 h-6"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "md:hidden absolute top-full left-0 w-full bg-veda-dark border-b border-white/10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col px-6 py-4 space-y-4 text-sm font-medium tracking-wide text-veda-light"
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => setMenuOpen(false),
    className: "block py-2 hover:text-veda-gold border-b border-white/5 cursor-pointer"
  }, n)), /*#__PURE__*/React.createElement("button", {
    onClick: onReserve,
    className: "w-full px-4 py-3 text-sm font-semibold tracking-wide text-veda-dark bg-veda-gold rounded-full"
  }, "R\xE9server"))));
}

/* ---------------- Hero ---------------- */
function Hero({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-veda-dark -mt-[88px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-veda-dark/40 z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-veda-dark to-transparent z-10"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-veda-dark/80 to-transparent z-10"
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/hero-lake.jpg",
    alt: "Retraite Sri Lanka",
    className: "w-full h-full object-cover object-center"
  })), /*#__PURE__*/React.createElement("div", {
    className: "z-20 text-center px-4 max-w-4xl flex flex-col items-center mt-16"
  }, /*#__PURE__*/React.createElement("span", {
    className: "px-6 py-1.5 border border-veda-gold/40 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-8 text-veda-light bg-veda-dark/30 backdrop-blur-md"
  }, "7 au 13 f\xE9vrier 2027"), /*#__PURE__*/React.createElement("h1", {
    className: "text-6xl sm:text-7xl md:text-[7rem] leading-[1.1] mb-6 font-heading text-veda-light"
  }, "Retraite", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "font-heading italic font-light text-veda-gold drop-shadow-lg"
  }, "Sri Lanka")), /*#__PURE__*/React.createElement("p", {
    className: "text-lg md:text-xl font-light text-veda-light max-w-2xl mx-auto mb-12 drop-shadow-md"
  }, "Immersion Hatha & Kundalini au c\u0153ur de la jungle, face au lac sacr\xE9 de Koggala."), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:flex-row gap-4 sm:gap-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onReserve,
    className: "px-10 py-3.5 bg-veda-gold hover:bg-white text-veda-dark text-sm sm:text-base font-semibold tracking-widest uppercase transition-colors duration-300 rounded-full shadow-lg"
  }, "R\xE9servation"), /*#__PURE__*/React.createElement("button", {
    className: "px-10 py-3.5 border border-white/50 text-white hover:border-white hover:bg-white/10 text-sm sm:text-base font-semibold tracking-widest uppercase transition-all duration-300 rounded-full backdrop-blur-sm"
  }, "D\xE9couvrir"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-8 z-20 pointer-events-none animate-bounce"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down",
    className: "text-white/50 w-6 h-6"
  })));
}

/* ---------------- Guides (VosGuides) ---------------- */
function Guides() {
  const [moreA, setMoreA] = useStateH(false);
  const [moreN, setMoreN] = useStateH(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("h3", {
    className: "text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
  }, "Vos Guides"), /*#__PURE__*/React.createElement("h2", {
    className: "text-5xl md:text-7xl font-heading mb-12 leading-[1.1]"
  }, "L'union du ", /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold"
  }, "Hatha"), /*#__PURE__*/React.createElement("br", null), "& du ", /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold"
  }, "Kundalini"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.2,
    className: "space-y-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pl-6 border-l-4 border-veda-gold"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-2xl font-heading mb-4 text-white"
  }, "Aur\xE9lie Dutrey"), /*#__PURE__*/React.createElement("div", {
    className: "text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3"
  }, /*#__PURE__*/React.createElement("p", null, "Aur\xE9lie, Radha Navjot kaur est la fondatrice de La maison VEDA, studio de yoga et centre de retraites \xE0 St-Simon en Charente et \xE0 Habaraduwa dans le sud du Sri Lanka."), moreA && /*#__PURE__*/React.createElement("p", null, "Elle transmet la pratique du yoga Kundalini selon les enseignements de Gurmukh Kaur Khalsa et sera votre professeure de Kundalini & M\xE9ditation et coordinatrice sur place."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMoreA(!moreA),
    className: "text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
  }, moreA ? "- Lire moins" : "+ En savoir plus"))), /*#__PURE__*/React.createElement("div", {
    className: "pl-6 border-l-4 border-veda-gold"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-2xl font-heading mb-4 text-white"
  }, "Nathalie Catinaud"), /*#__PURE__*/React.createElement("div", {
    className: "text-veda-light/80 leading-relaxed font-light text-sm sm:text-base space-y-3"
  }, /*#__PURE__*/React.createElement("p", null, "Originaire de Charente, Nathalie a rencontr\xE9 le yoga il y a une quinzaine d'ann\xE9es lors d'un long voyage au Canada."), moreN && /*#__PURE__*/React.createElement("p", {
    className: "italic"
  }, "\xAB Je remercie chaque jour l'univers de m'avoir guid\xE9 sur la voie du yoga. \xBB"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMoreN(!moreN),
    className: "text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
  }, moreN ? "- Lire moins" : "+ En savoir plus"))))), /*#__PURE__*/React.createElement("div", {
    className: "lg:w-1/2 relative w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row gap-12 sm:gap-20 justify-center lg:justify-end items-end"
  }, [{
    pos: "22% center",
    off: "translate-x-5 -translate-y-5"
  }, {
    pos: "68% center",
    off: "-translate-x-5 translate-y-5 mt-0"
  }].map((it, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.2,
    className: `w-[60%] sm:w-[48%] relative group ${i === 0 ? "pb-8" : ""}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: `absolute inset-0 border border-veda-gold/60 -z-10 ${it.off} rounded-xl pointer-events-none hidden sm:block transition-transform duration-700`
  }), /*#__PURE__*/React.createElement("div", {
    className: "overflow-hidden rounded-xl bg-veda-dark shadow-2xl relative z-10"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/guides-aurelie-nathalie.jpeg",
    alt: "Guide",
    style: {
      objectPosition: it.pos
    },
    className: "w-full h-auto aspect-[3/4] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 hover:scale-105"
  })))))))));
}
Object.assign(window, {
  Navbar,
  Hero,
  Guides
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-retraite/reserver.jsx
try { (() => {
/* global React, Logo, Icon, Footer */
const {
  useState: useStateR
} = React;
function Reserver({
  onBack
}) {
  const [submitted, setSubmitted] = useStateR(false);
  const [data, setData] = useStateR({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    housingType: "Single",
    minivan: false,
    message: ""
  });
  const set = k => e => setData(d => ({
    ...d,
    [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  const field = "w-full bg-veda-dark/50 border border-white/10 rounded-xl px-4 py-3 text-veda-light focus:outline-none focus:border-veda-gold/50 focus:ring-1 focus:ring-veda-gold/50 transition-all font-light placeholder-white/30";
  const label = "block text-xs font-semibold tracking-widest uppercase text-veda-light/80 mb-2";
  return /*#__PURE__*/React.createElement("div", {
    className: "min-h-full bg-veda-dark font-sans text-veda-light flex flex-col"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "w-full z-50 bg-veda-dark/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center"
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    className: "cursor-pointer"
  }, /*#__PURE__*/React.createElement(Logo, {
    className: "h-8 md:h-10"
  })), /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    className: "flex items-center gap-2 text-sm font-medium hover:text-veda-gold transition-colors cursor-pointer"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    className: "w-4 h-4"
  }), "Retour \xE0 l'accueil"))), /*#__PURE__*/React.createElement("main", {
    className: "flex-grow flex items-center justify-center px-4 py-12 md:py-24 relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-1/4 left-10 w-64 h-64 bg-veda-gold/5 rounded-full blur-[100px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-1/4 right-10 w-80 h-80 bg-veda-light/5 rounded-full blur-[120px] pointer-events-none"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10"
  }, !submitted ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-center mb-10"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-4xl md:text-5xl font-heading mb-4"
  }, "R\xE9server votre ", /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold"
  }, "Retraite")), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/70 font-light text-sm md:text-base"
  }, "Remplissez le formulaire ci-dessous. Nous vous recontacterons tr\xE8s vite pour finaliser votre inscription.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    className: "space-y-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "Pr\xE9nom *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: data.firstName,
    onChange: set("firstName"),
    className: field,
    placeholder: "Votre pr\xE9nom"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "Nom *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    value: data.lastName,
    onChange: set("lastName"),
    className: field,
    placeholder: "Votre nom"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "Email *"), /*#__PURE__*/React.createElement("input", {
    required: true,
    type: "email",
    value: data.email,
    onChange: set("email"),
    className: field,
    placeholder: "votre@email.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "T\xE9l\xE9phone"), /*#__PURE__*/React.createElement("input", {
    value: data.phone,
    onChange: set("phone"),
    className: field,
    placeholder: "Optionnel"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "Type d'h\xE9bergement *"), /*#__PURE__*/React.createElement("select", {
    value: data.housingType,
    onChange: set("housingType"),
    className: `${field} appearance-none`
  }, /*#__PURE__*/React.createElement("option", {
    className: "bg-veda-dark"
  }, "Single"), /*#__PURE__*/React.createElement("option", {
    className: "bg-veda-dark"
  }, "Partag\xE9"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 pt-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: data.minivan,
    onChange: set("minivan"),
    className: "w-5 h-5 rounded bg-veda-dark/50 accent-veda-gold cursor-pointer",
    id: "mv"
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "mv",
    className: "text-sm font-light text-veda-light/90 cursor-pointer select-none"
  }, "Je suis int\xE9ress\xE9.e par l'excursion en minivan")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: label
  }, "Message *"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    rows: "4",
    value: data.message,
    onChange: set("message"),
    className: `${field} resize-none`,
    placeholder: "Avez-vous des questions ou des particularit\xE9s (allergies, sant\xE9) ?"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-4"
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "w-full bg-veda-gold text-veda-dark font-bold tracking-widest uppercase py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-md"
  }, "Envoyer ma demande"), /*#__PURE__*/React.createElement("p", {
    className: "text-center mt-4 text-xs font-light text-veda-light/50"
  }, "Aucun paiement n'est requis \xE0 cette \xE9tape.")))) : /*#__PURE__*/React.createElement("div", {
    className: "text-center py-10 flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-20 h-20 bg-veda-gold/10 rounded-full flex items-center justify-center mb-6 text-veda-gold"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    className: "w-10 h-10 text-veda-gold"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-3xl md:text-4xl font-heading mb-4"
  }, "Merci, ", data.firstName || "à bientôt", " !"), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/70 font-light mb-10 max-w-md mx-auto"
  }, "Votre demande de r\xE9servation a bien \xE9t\xE9 envoy\xE9e. Nous vous contacterons tr\xE8s prochainement pour valider votre inscription."), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    className: "px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors"
  }, "Retour \xE0 l'accueil")))), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Reserver
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/reserver.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-retraite/sections.jsx
try { (() => {
/* global React, Icon, Reveal, SectionHeader */
const {
  useState: useStateS
} = React;

/* ---------------- Programme ---------------- */
function Programme() {
  const items = [{
    icon: "sun",
    title: "Matinées ressourçantes",
    desc: "Sadhana au lever du soleil face au lac, suivi de cours de yoga Kundalini ou Hatha pour éveiller le corps et l'esprit.",
    image: "../../assets/images/yoga-sunrise.jpg"
  }, {
    icon: "wind",
    title: "Pratiques profondes",
    desc: "Yin yoga, yoga nidra, danse du dragon, chants de mantras et méditations pour une introspection profonde.",
    image: "../../assets/images/yoga-practice.jpg"
  }, {
    icon: "moon",
    title: "Expériences incluses",
    desc: "Clôturez vos journées avec des expériences immersives : breathwork, soirée kirtan et cacao cérémonie.",
    image: "../../assets/images/villa-lake-house.jpeg"
  }, {
    icon: "map",
    title: "Découverte & culture",
    desc: "Refuge et libération des tortues, temple bouddhiste et cérémonie puja, et visite de Galle classée UNESCO.",
    image: "../../assets/images/stilt-fishermen.jpeg"
  }, {
    icon: "heart",
    title: "Temps libre & farniente",
    desc: "Après-midi libre : plage, cours de surf, cours de cuisine, usine à thé ou safari d'éléphants.",
    image: "../../assets/images/beach.jpeg"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "L'Exp\xE9rience",
    title: "Le Programme de",
    accent: "Votre Retraite",
    divider: true,
    intro: "Durant la retraite, quelques sorties touristiques sont planifi\xE9es, mais l'id\xE9e est de privil\xE9gier le repos et l'introspection entre les cours."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  }, items.map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.1 + 0.2
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-shadow duration-500 border border-veda-gold/10 group relative overflow-hidden h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.image,
    alt: item.title,
    className: "w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-veda-dark/85"
  })), /*#__PURE__*/React.createElement("div", {
    className: "relative z-10 flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-14 h-14 rounded-full bg-veda-gold/10 flex items-center justify-center mb-6 border border-transparent group-hover:border-veda-gold/30 transition-colors"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    className: "w-6 h-6 text-veda-gold"
  })), /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-heading mb-3 group-hover:text-white transition-colors duration-300"
  }, item.title), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-dark/70 group-hover:text-veda-light/90 leading-relaxed font-light text-sm transition-colors duration-300"
  }, item.desc))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.7
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-veda-dark text-white p-10 rounded-2xl shadow-xl relative overflow-hidden h-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute top-0 right-0 w-32 h-32 bg-veda-gold rounded-bl-full -mr-16 -mt-16 pointer-events-none opacity-80"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-heading mb-3 text-veda-gold"
  }, "Pension Compl\xE8te"), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/90 leading-relaxed font-light text-sm mb-6"
  }, "Savourez 3 repas v\xE9g\xE9tariens par jour, pr\xE9par\xE9s avec soin par notre \xE9quipe srilankaise locale."), /*#__PURE__*/React.createElement("span", {
    className: "inline-block px-4 py-1.5 bg-veda-gold rounded-full text-[10px] font-bold tracking-[0.1em] uppercase text-veda-dark"
  }, "Inclus"))))));
}

/* ---------------- Villas (carousels) ---------------- */
function VillaCard({
  name,
  accent,
  desc,
  images,
  offsetClass
}) {
  const [idx, setIdx] = useStateS(0);
  return /*#__PURE__*/React.createElement("div", {
    className: offsetClass
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-4xl font-heading mb-2 text-veda-light"
  }, name, " ", /*#__PURE__*/React.createElement("span", {
    className: "text-veda-gold"
  }, accent)), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/70 font-light text-sm"
  }, desc)), /*#__PURE__*/React.createElement("div", {
    className: "relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 group cursor-zoom-in"
  }, /*#__PURE__*/React.createElement("img", {
    src: images[idx],
    alt: name,
    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-3 overflow-x-auto pb-2"
  }, images.map((img, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setIdx(i),
    className: `relative w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${idx === i ? "ring-2 ring-veda-gold ring-offset-2 ring-offset-veda-dark opacity-100 scale-105" : "opacity-50 hover:opacity-100"}`
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    className: "w-full h-full object-cover"
  })))));
}
function Villas() {
  const [more, setMore] = useStateS(false);
  const house = ["../../assets/images/villa-lake-house.jpeg", "../../assets/images/villa-lake-loft.jpeg", "../../assets/images/yoga-practice.jpg"];
  const loft = ["../../assets/images/villa-lake-loft.jpeg", "../../assets/images/villa-lake-house.jpeg", "../../assets/images/yoga-sunrise.jpg"];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-2xl"
  }, /*#__PURE__*/React.createElement(Reveal, {
    as: "h3",
    className: "text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
  }, "Votre H\xE9bergement"), /*#__PURE__*/React.createElement(Reveal, {
    as: "h2",
    delay: 0.1,
    className: "text-4xl md:text-6xl font-heading leading-tight"
  }, "Les villas de ", /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold"
  }, "La maison VEDA"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.3,
    className: "text-veda-light/80 font-light max-w-lg space-y-4 text-sm sm:text-base leading-relaxed"
  }, /*#__PURE__*/React.createElement("p", null, "\xC0 seulement 2h15 de l'a\xE9roport de Colombo, au bord du mythique lac de Koggala, nich\xE9 au c\u0153ur de la jungle, \xE0 proximit\xE9 des plus belles plages de surf du sud du Sri Lanka."), more && /*#__PURE__*/React.createElement("p", null, "Levers de soleil \xE0 couper le souffle, faune et flore luxuriante, \xE0 5 mn en tuktuk de la plage. Un lieu d\xE9di\xE9 \xE0 la d\xE9tente et au l\xE2cher-prise."), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMore(!more),
    className: "text-veda-gold text-xs uppercase tracking-widest font-semibold hover:text-white transition-colors mt-2"
  }, more ? "- Lire moins" : "+ En savoir plus"))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(VillaCard, {
    name: "La",
    accent: "'Lake House'",
    desc: "Une maison authentique sri-lankaise, aux murs en terre, juste au bord du lac.",
    images: house,
    offsetClass: ""
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.2
  }, /*#__PURE__*/React.createElement(VillaCard, {
    name: "Le",
    accent: "'Lake Loft'",
    desc: "Une villa contemporaine, son yoga shala perch\xE9 offrant une vue imprenable sur le lac.",
    images: loft,
    offsetClass: "lg:mt-24"
  })))));
}
Object.assign(window, {
  Programme,
  Villas,
  VillaCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-retraite/tarifs.jsx
try { (() => {
/* global React, Icon, Reveal, SectionHeader */
const {
  useState: useStateT
} = React;

/* ---------------- Tarifs ---------------- */
function Tarifs({
  onReserve
}) {
  const included = ["6 nuits d'hébergement", "Pension complète (végétarienne)", "2 à 4 pratiques de yoga / jour", "Expériences (Cacao, Kirtan...)", "Activités durant la retraite"];
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-[#fdfbf7] text-veda-dark relative overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Rejoignez-nous",
    title: "Dates &",
    accent: "Tarifs",
    intro: "Pr\xE9parez votre voyage vers une immersion totale au c\u0153ur du Sri Lanka. Retrouvez ici toutes les informations pratiques et nos formules d'h\xE9bergement."
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center space-y-16"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl"
  }, /*#__PURE__*/React.createElement(InfoCard, {
    icon: "calendar",
    title: "Dates du s\xE9jour"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-medium mb-2"
  }, "7 au 13 f\xE9vrier 2027"), /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-veda-dark/60"
  }, "Arriv\xE9e le dimanche \xE0 14h", /*#__PURE__*/React.createElement("br", null), "D\xE9part le samedi \xE0 11h")), /*#__PURE__*/React.createElement(InfoCard, {
    icon: "plane",
    title: "Transport"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm text-veda-dark/70 leading-relaxed"
  }, "Vol pour Colombo (d\xE9calage +1j). Navette a\xE9roport-h\xF4tel partageable avec le groupe.")), /*#__PURE__*/React.createElement(InfoCard, {
    icon: "check",
    title: "Ce qui est inclus"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "space-y-2 text-sm text-veda-dark/80 inline-block text-left"
  }, included.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    className: "flex items-start gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    className: "w-4 h-4 text-veda-gold shrink-0 mt-0.5"
  }), /*#__PURE__*/React.createElement("span", null, it)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.2,
    className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl pt-8 border-t border-veda-gold/20"
  }, /*#__PURE__*/React.createElement(PriceCard, {
    tier: "Standard",
    dark: false,
    title: "Chambre Partag\xE9e",
    sub: "Pour 2, 3 ou 4 personnes. L'id\xE9al pour partager l'exp\xE9rience.",
    price: "1280",
    onReserve: onReserve
  }), /*#__PURE__*/React.createElement(PriceCard, {
    tier: "Premium",
    dark: true,
    title: "Chambre Single",
    sub: "Profitez de votre espace priv\xE9 pour un repos total.",
    price: "1480",
    onReserve: onReserve
  })))));
}
function InfoCard({
  icon,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-8 rounded-3xl shadow-sm border border-veda-gold/10 text-center flex flex-col items-center transition-transform duration-500 hover:-translate-y-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 bg-veda-gold/5 rounded-full text-veda-gold mb-6 inline-flex"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    className: "w-8 h-8 text-veda-gold"
  })), /*#__PURE__*/React.createElement("h4", {
    className: "text-xl font-heading mb-3"
  }, title), children);
}
function PriceCard({
  tier,
  dark,
  title,
  sub,
  price,
  onReserve
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `rounded-[2.5rem] p-10 relative flex flex-col items-center text-center group border transition-all duration-500 ${dark ? "bg-veda-dark text-white border-veda-gold/20 shadow-2xl" : "bg-white border-veda-gold/20 shadow-xl hover:shadow-2xl"}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `absolute -top-4 text-[10px] sm:text-xs font-bold tracking-widest uppercase py-2 px-6 rounded-full shadow-md ${dark ? "bg-veda-gold text-veda-dark" : "bg-veda-dark text-white"}`
  }, tier), /*#__PURE__*/React.createElement("h4", {
    className: `text-3xl font-heading mb-3 mt-4 ${dark ? "text-veda-gold" : ""}`
  }, title), /*#__PURE__*/React.createElement("p", {
    className: `text-sm mb-10 font-light ${dark ? "text-veda-light/60" : "text-veda-dark/60"}`
  }, sub), /*#__PURE__*/React.createElement("div", {
    className: "flex items-baseline gap-2 mb-10 justify-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: `text-6xl font-heading ${dark ? "text-white" : "text-veda-gold"}`
  }, price), /*#__PURE__*/React.createElement("span", {
    className: `text-2xl font-medium ${dark ? "text-veda-gold" : ""}`
  }, "\u20AC")), /*#__PURE__*/React.createElement("button", {
    onClick: onReserve,
    className: `w-full py-4 font-bold tracking-widest uppercase transition-colors duration-300 rounded-full text-sm shadow-md ${dark ? "bg-veda-gold text-veda-dark group-hover:bg-white" : "bg-veda-dark text-veda-light group-hover:bg-black"}`
  }, "R\xE9server ma place"), /*#__PURE__*/React.createElement("p", {
    className: `text-xs mt-4 font-light leading-relaxed ${dark ? "text-veda-gold/80" : "text-veda-dark/60"}`
  }, "Acompte de 500\u20AC par virement.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "italic"
  }, "Solde 1 mois avant le d\xE9part.")));
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [{
    q: "Billet d'avion",
    a: "Tarifs à partir de 600 €. Privilégiez les vols de nuit ; le vol direct Paris-Colombo avec Sri Lankan Airlines avoisine les 10h."
  }, {
    q: "Formalités (Passeport, Visa, Vaccins)",
    a: "Passeport valide 6 mois minimum. Demande d'ETA sur eta.gov.lk 1 mois avant le départ (obtention en 24h, 50$). Le vaccin anti-covid n'est plus obligatoire."
  }, {
    q: "Climat & tenue",
    a: "Climat chaud et humide (plus de 30°). Prévoyez des vêtements légers, un chapeau, un maillot et un châle pour les visites de temple. Tenue blanche bienvenue pour la séance de Venus Kriya."
  }, {
    q: "Monnaie & retraits",
    a: "1€ ≈ 360 roupies LKR. Retraits possibles aux distributeurs ATM avec une carte Visa/CB. Retirez environ 150€ à l'arrivée."
  }];
  const [open, setOpen] = useStateT(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-white text-veda-dark relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-4xl mx-auto"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Recommandations",
    title: "Pr\xE9parer",
    accent: "son voyage"
  }), /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, faqs.map((faq, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 0.05
    }, /*#__PURE__*/React.createElement("div", {
      className: `border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-veda-gold bg-[#fdfbf7]" : "border-gray-200"}`
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      className: "w-full text-left px-6 py-5 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-heading text-lg md:text-xl pr-8"
    }, faq.q), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      className: `w-5 h-5 text-veda-gold transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "px-6 pb-6 text-veda-dark/70 font-light text-sm md:text-base leading-relaxed border-t border-veda-gold/10 pt-4"
    }, faq.a)));
  }))));
}

/* ---------------- FinalCTA ---------------- */
function FinalCTA({
  onReserve
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "py-24 md:py-32 px-6 bg-veda-dark text-veda-light relative z-10 overflow-hidden border-t border-white/5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl group"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/guides-aurelie-nathalie.jpeg",
    alt: "Vos h\xF4tes",
    className: "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 bg-gradient-to-t from-veda-dark via-transparent to-transparent opacity-80 mix-blend-multiply"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute bottom-0 left-0 w-full p-8 sm:p-12 z-10"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-3xl font-heading text-veda-gold drop-shadow-md"
  }, "Les Filles"), /*#__PURE__*/React.createElement("p", {
    className: "text-white/80 font-light mt-2"
  }, "Vos h\xF4tes pour cette retraite inoubliable."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.2,
    className: "flex flex-col space-y-8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "text-veda-gold text-xs sm:text-sm font-semibold tracking-[0.2em] mb-4 uppercase"
  }, "Pr\xEAt(e) pour le d\xE9part ?"), /*#__PURE__*/React.createElement("h2", {
    className: "text-5xl sm:text-6xl md:text-7xl font-heading leading-tight mb-8"
  }, "R\xE9servez votre ", /*#__PURE__*/React.createElement("span", {
    className: "italic text-veda-gold block"
  }, "Retraite.")), /*#__PURE__*/React.createElement("p", {
    className: "text-veda-light/70 font-light leading-relaxed max-w-lg text-lg"
  }, "Les places sont limit\xE9es pour garantir une exp\xE9rience intimiste et personnalis\xE9e. Rejoignez-nous au Sri Lanka pour une parenth\xE8se de bien-\xEAtre absolu.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onReserve,
    className: "group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest text-veda-dark uppercase bg-veda-gold rounded-full transition-all duration-300 hover:bg-white shadow-lg hover:-translate-y-1"
  }, "R\xE9server ma retraite ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("p", {
    className: "mt-6 text-sm text-veda-light/50 font-light italic"
  }, "*Acompte de r\xE9servation via paiement s\xE9curis\xE9.")))));
}
Object.assign(window, {
  Tarifs,
  FAQ,
  FinalCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-retraite/tarifs.jsx", error: String((e && e.message) || e) }); }

})();
