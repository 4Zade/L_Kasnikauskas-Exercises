import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ComponentPage from './assets/components/ComponentPage.tsx';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<ComponentPage />} />
        <Route path="/home" element={<ComponentPage />} />
        <Route path="/menu" element={<ComponentPage />} />
        <Route path="/about" element={<ComponentPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
