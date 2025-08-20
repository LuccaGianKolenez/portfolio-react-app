import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const API_BASE_URL = process.env.VITE_API_BASE_URL ?? "https://jsonplaceholder.typicode.com";

export const server = setupServer(
  http.get(`${API_BASE_URL}/todos`, () => {
    return HttpResponse.json([
      { userId: 1, id: 1, title: "Comprar café", completed: false },
      { userId: 1, id: 2, title: "Estudar React", completed: true }
    ]);
  })
);
