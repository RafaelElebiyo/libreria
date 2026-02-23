import { useEffect, useState } from 'react';
import { PageSection } from '../../../components/ui/PageSection';
import { getBooks } from '../../../services/api/booksService';
import { formatCurrency } from '../../../shared/utils/formatCurrency';

export function CatalogPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageSection title="Compra de libros" description="Catálogo mockeado con contrato async reusable.">
      {loading ? (
        <p>Cargando catálogo...</p>
      ) : (
        <div className="grid-2">
          {books.map((book) => (
            <article key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <strong>{formatCurrency(book.price)}</strong>
            </article>
          ))}
        </div>
      )}
    </PageSection>
  );
}
