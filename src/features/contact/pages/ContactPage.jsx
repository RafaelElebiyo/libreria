import { FormField } from '../../../components/ui/FormField';
import { PageSection } from '../../../components/ui/PageSection';
import { PrimaryButton } from '../../../components/ui/PrimaryButton';

export function ContactPage() {
  return (
    <PageSection title="Contacto" description="Canal de contacto preparado para endpoint /contact/messages.">
      <form className="form-grid">
        <FormField id="name" label="Nombre" required />
        <FormField id="email" label="Correo" type="email" required />
        <label className="form-field" htmlFor="message">
          <span>Mensaje</span>
          <textarea id="message" name="message" rows="5" placeholder="¿En qué podemos ayudarte?" />
        </label>
        <PrimaryButton type="submit">Enviar</PrimaryButton>
      </form>
    </PageSection>
  );
}
