import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./routes/Detail";
import List from "./routes/List.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
