/* global React, ReactDOM, Navbar, Hero, Guides, Programme, Villas, Tarifs, FAQ, FinalCTA, Footer, Reserver */
const { useState: useStateA, useEffect: useEffectA } = React;

function Home({ onReserve }) {
    return (
        <div className="min-h-full bg-veda-dark font-sans text-veda-light">
            <Navbar onReserve={onReserve} />
            <main>
                <Hero onReserve={onReserve} />
                <Guides />
                <Programme />
                <Villas />
                <Tarifs onReserve={onReserve} />
                <FAQ />
                <FinalCTA onReserve={onReserve} />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    const [route, setRoute] = useStateA("home");
    const scrollRef = React.useRef(null);
    useEffectA(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, [route]);
    return (
        <div id="kit-scroll" ref={scrollRef} className="h-screen overflow-y-auto bg-veda-dark">
            {route === "home"
                ? <Home onReserve={() => setRoute("reserver")} />
                : <Reserver onBack={() => setRoute("home")} />}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
