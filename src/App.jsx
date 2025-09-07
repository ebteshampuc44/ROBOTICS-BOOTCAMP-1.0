import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './Components/Home';
import DetailedCurriculum from './Components/DetailedCurriculum';
import Register from './Components/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="curriculum" element={<DetailedCurriculum />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;