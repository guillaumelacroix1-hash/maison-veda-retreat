import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reserver from './pages/Reserver';

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reserver" element={<Reserver />} />
            </Routes>
        </Router>
    );
}

export default App;
