import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TodosPage from "../pages/TodosPage";
import AboutPage from "../pages/AboutPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <a href="https://jsonplaceholder.typicode.com/" target="_blank">API Externa</a>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<div className="container"><h1>404</h1><Link to="/">Voltar</Link></div>} />
      </Routes>
    </BrowserRouter>
  );
}
