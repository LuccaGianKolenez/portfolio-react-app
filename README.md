# Portfolio — React App (React 18 + TypeScript + Vite + Redux Toolkit + React Query + React Router)

Frontend de portfólio em **React 18 + TypeScript** usando **Vite**, **Redux Toolkit**, **React Query** e **React Router**, com **testes (Vitest + Testing Library + MSW)** e consumo de **API externa** (JSONPlaceholder). Projeto pensado para **DX forte** e **padrões sênior**: tipagem estrita, validação de dados, camadas simples e scripts úteis.

> Objetivo: servir como referência de **setup moderno** em React para portfólio — roteamento, estado global, cache de dados, testes e documentação.

---

## Sumário
- [Stack & Decisões](#stack--decisões)
- [Arquitetura & Convenções](#arquitetura--convenções)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Como Rodar (Local)](#como-rodar-local)
- [Rotas](#rotas)
- [Estado (Redux Toolkit)](#estado-redux-toolkit)
- [Dados remotos (React Query)](#dados-remotos-react-query)
- [Testes](#testes)
- [Scripts](#scripts)
- [Troubleshooting](#troubleshooting)

---

## Stack & Decisões
- **React 18 + TypeScript + Vite**: build rápido, DX moderna.
- **Redux Toolkit**: estado global simples (exemplo `counter`).
- **React Query**: cache e revalidação de dados (exemplo `todos`).
- **React Router**: rotas SPA.
- **Zod** (opcional no frontend): validação de respostas da API externa.
- **Vitest + Testing Library + MSW**: testes confiáveis sem depender da internet.

---

## Arquitetura & Convenções
- **Camadas**:
  - `features/*` → domínios (Redux ou hooks de dados).
  - `pages/*` → telas por rota.
  - `routes/*` → roteamento e layout raiz.
  - `app/store.ts` → configuração do Redux.
  - `lib/*` → utilitários/clients (futuro).
- **Padrões**:
  - Tipagem estrita no TS (`strict: true`).
  - Componentes pequenos e **testáveis**.
  - **Validação** das respostas da API (Zod) para robustez.

---

## Estrutura de Pastas
```
portfolio-react-app/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ app/
│  │  └─ store.ts
│  ├─ components/                # (reservado p/ UI components)
│  ├─ features/
│  │  ├─ counter/                # Redux Toolkit (exemplo)
│  │  │  ├─ Counter.tsx
│  │  │  └─ counterSlice.ts
│  │  └─ todos/                  # React Query + API externa
│  │     ├─ api.ts
│  │     ├─ types.ts
│  │     └─ TodosList.tsx
│  ├─ pages/
│  │  ├─ HomePage.tsx
│  │  ├─ TodosPage.tsx
│  │  └─ AboutPage.tsx
│  ├─ routes/
│  │  └─ index.tsx               # BrowserRouter + rotas
│  ├─ docs/                      # (referências/contratos futuros)
│  │  └─ openapi.json
│  ├─ styles.css
│  ├─ main.tsx
│  └─ App.tsx
├─ tests/
│  ├─ setup.ts                   # MSW e jest-dom
│  ├─ testServer.ts              # handlers MSW
│  └─ TodosPage.test.tsx
├─ docs/
│  ├─ ARCHITECTURE.md
│  ├─ LOCAL_DEV.md
│  └─ TESTING.md
├─ .env.example
├─ index.html
├─ tsconfig.json
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## Variáveis de Ambiente
Crie `.env` a partir do `.env.example`:

```env
# Base URL para API externa
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com

# Habilitar React Query Devtools
VITE_RQ_DEVTOOLS=true
```

> Somente variáveis prefixadas com **`VITE_`** são expostas ao client pelo Vite.

---

## Como Rodar (Local)

```bash
pnpm install
cp .env.example .env
pnpm dev
# http://localhost:5173
```

Build/preview de produção:
```bash
pnpm build
pnpm preview
```

Checagem de tipos:
```bash
pnpm typecheck
```

---

## 🗺️ Rotas
- `/` — Home (demonstra `Redux Toolkit` com Counter).
- `/todos` — Lista de todos (React Query + **API externa**).
- `/about` — Página informativa.

---

## Estado (Redux Toolkit)
- `features/counter/counterSlice.ts` define `increment`, `decrement`, `addBy(n)`.
- `Counter.tsx` consome via `useSelector` e `useDispatch`.

Exemplo:
```tsx
const value = useSelector((s: RootState) => s.counter.value);
const dispatch = useDispatch();
<button onClick={() => dispatch(increment())}>+</button>
```

---

## Dados remotos (React Query)
- `features/todos/api.ts` consome **JSONPlaceholder** usando `fetch` e valida com Zod.
- `TodosList.tsx` usa `useQuery` e exibe loading/error/data.

Trocar a API:
```env
# .env
VITE_API_BASE_URL=https://minha.api.com
```

---

## Testes
- **Vitest + Testing Library + MSW** para testes de UI e network.
- `tests/testServer.ts` intercepta `/todos` e retorna dados mockados.
- `tests/TodosPage.test.tsx` verifica renderização assíncrona.

Executar testes:
```bash
pnpm test           # modo run
pnpm test:watch     # modo watch
```

---

## Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  }
}
```

---

## Troubleshooting
**Erro de CORS ao trocar API**  
→ Ajuste CORS no backend ou use um proxy de dev (config do Vite) se necessário.

**Falha em requests nos testes**  
→ MSW não interceptou: confira `tests/setup.ts` e `testServer.ts`.

**Tipos TS quebrando build**  
→ Rode `pnpm typecheck` e corrija; evite `any` sem necessidade.