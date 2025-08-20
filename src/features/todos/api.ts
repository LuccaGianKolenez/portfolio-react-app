import { Todo, TodoSchema } from "./types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "https://jsonplaceholder.typicode.com";

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch(`${API_BASE_URL}/todos?_limit=10`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  const data = await res.json() as unknown;
  if (!Array.isArray(data)) throw new Error("Invalid todos response");
  return data.map((t) => TodoSchema.parse(t));
}
