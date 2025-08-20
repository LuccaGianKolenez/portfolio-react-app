import "@testing-library/jest-dom";
import { server } from "./testServer";

// MSW - API mock para testes
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
