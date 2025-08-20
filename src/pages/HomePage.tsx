import { Counter } from "../features/counter/Counter";

export default function HomePage() {
  return (
    <div className="container">
      <h1>Portfolio React App</h1>
      <p>React + TypeScript + Vite + Redux Toolkit + React Query + React Router</p>
      <Counter />
    </div>
  );
}
