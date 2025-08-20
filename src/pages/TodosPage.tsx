import { TodosList } from "../features/todos/TodosList";

export default function TodosPage() {
  return (
    <div className="container">
      <h1>Todos</h1>
      <p>Dados de <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a></p>
      <TodosList />
    </div>
  );
}
