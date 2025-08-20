import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodosPage from "../src/pages/TodosPage";

function renderWithProviders(ui: React.ReactElement) {
  const qc = new QueryClient();
  return render(<QueryClientProvider client={qc}>{ui}</QueryClientProvider>);
}

describe("TodosPage", () => {
  it("renderiza itens da API (mock)", async () => {
    renderWithProviders(<TodosPage />);
    expect(screen.getByText(/Todos/i)).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/Comprar café/i)).toBeInTheDocument();
      expect(screen.getByText(/Estudar React/i)).toBeInTheDocument();
    });
  });
});
