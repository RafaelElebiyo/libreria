import { Link } from 'react-router-dom';
import { PageSection } from '../../../components/ui/PageSection';

export function HomePage() {
  return (
    <PageSection
      title="Bienvenido a Libel"
      description="Una plataforma para descubrir libros, reservar encuentros y crecer como comunidad lectora."
    >
      <div className="grid-2">
        <article>
          <h3>Experiencia</h3>
          <p>Clubs temáticos, eventos en vivo y acompañamiento de mediadores de lectura.</p>
        </article>
        <article>
          <h3>CTA principal</h3>
          <p>
            ¿Listo para tu siguiente historia? <Link to="/subscription">Suscríbete al club</Link>.
          </p>
        </article>
      </div>
    </PageSection>
  );
}
