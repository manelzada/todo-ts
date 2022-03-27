import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Active } from "./pages/Active";
import { Complete } from "./pages/Complete";
import Home from "./pages/Home";

import "./pages/Home.css";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Link to="/">
          <h1>To Do</h1>
        </Link>
        <div>
          <Link to="/active">
            <button className="btn">Tarefas Ativas</button>
          </Link>
          <Link to="/complete">
            <button className="btn">Tarefas Concluidas</button>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/active" element={<Active />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </Router>
  );
}
