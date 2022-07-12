import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
