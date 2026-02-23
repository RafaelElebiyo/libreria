import { PageSection } from '../../../components/ui/PageSection';

const SERVICES = [
  'Círculos de lectura semanales',
  'Curaduría personalizada por perfil lector',
  'Eventos con autores y especialistas',
];

export function ServicesPage() {
  return (
    <PageSection title="Servicios" description="Oferta inicial mockeada, conectable a /services.">
      <ul>
        {SERVICES.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </PageSection>
  );
}
