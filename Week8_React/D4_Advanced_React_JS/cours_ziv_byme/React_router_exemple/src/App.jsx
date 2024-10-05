import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import About from './About';
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRouter;
