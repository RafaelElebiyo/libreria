import { FormField } from '../../../components/ui/FormField';
import { PageSection } from '../../../components/ui/PageSection';
import { PrimaryButton } from '../../../components/ui/PrimaryButton';

export function RegisterPage() {
  return (
    <PageSection
      title="Crear cuenta"
      description="Formulario desacoplado, listo para POST /auth/register."
    >
      <form className="form-grid">
        <FormField id="fullName" label="Nombre completo" required />
        <FormField id="email" type="email" label="Correo" required />
        <FormField id="password" type="password" label="Contraseña" required />
        <PrimaryButton type="submit">Registrarme</PrimaryButton>
      </form>
    </PageSection>
  );
}
