// ?? operador de coalescência nula : pega o valor da variavel de ambiente , caso contrario usa localhost
export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8081";