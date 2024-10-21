import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/product/Detail';

const App: React.FC = () => (
    <Router >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    </Router >
);


export default App;

