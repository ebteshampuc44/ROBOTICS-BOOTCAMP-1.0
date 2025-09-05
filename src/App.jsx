import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import Home from './Components/Home';
import DetailedCurriculum from './Components/DetailedCurriculum';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="curriculum" element={<DetailedCurriculum />} />
      </Route>
    </Routes>
  );
}

export default App;