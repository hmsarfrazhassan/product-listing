import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./routes/Detail";
import List from "./routes/List.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
