import { FormField } from '../../../components/ui/FormField';
import { PageSection } from '../../../components/ui/PageSection';
import { PrimaryButton } from '../../../components/ui/PrimaryButton';

export function BookingPage() {
  return (
    <PageSection title="Concertar cita" description="Agenda una sesión 1:1 con un mediador de lectura.">
      <form className="form-grid">
        <FormField id="date" type="date" label="Fecha" required />
        <FormField id="time" type="time" label="Hora" required />
        <FormField id="topic" label="Tema de interés" placeholder="Narrativa histórica, ensayo..." />
        <PrimaryButton type="submit">Reservar cita</PrimaryButton>
      </form>
    </PageSection>
  );
}
