import Home from "./pages/home/Home";

import Materials from "./pages/routes/materials/Materials";
import Preparation from "./pages/routes/preparation/Preparation";
import Production from "./pages/routes/production/Production";
import Storage from "./pages/routes/storage/Storage";
import Dispatch from "./pages/routes/dispatch/Dispatch";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="materials" element={<Materials />} />
            <Route path="preparation" element={<Preparation />} />
            <Route path="production" element={<Production />} />
            <Route path="storage" element={<Storage />} />
            <Route path="dispatch" element={<Dispatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
