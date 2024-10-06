import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Principal from './pages/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        {/* <Route path="/character/:id" element={<CharacterPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
