import { BOOKS_MOCK } from '../../mocks/books';

export async function getBooks() {
  // Simulación de latencia y contrato asíncrono idéntico a una API real.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(BOOKS_MOCK);
    }, 350);
  });
}
