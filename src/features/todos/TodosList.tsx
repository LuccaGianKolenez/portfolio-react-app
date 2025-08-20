import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./api";

export function TodosList() {
  const { data, isLoading, isError, refetch } = useQuery({ queryKey: ["todos"], queryFn: fetchTodos });

  if (isLoading) return <div className="card">Carregando...</div>;
  if (isError) return <div className="card">Erro ao carregar. <button className="btn" onClick={() => refetch()}>Tentar novamente</button></div>;

  return (
    <div className="card">
      <h2>Todos (API externa)</h2>
      <div className="list">
        {data!.map(t => (
          <div key={t.id} className="card" style={{ borderColor: t.completed ? "#16a34a" : "#334155" }}>
            <strong>#{t.id}</strong> — {t.title} {t.completed ? "✅" : "⏳"}
          </div>
        ))}
      </div>
    </div>
  );
}
