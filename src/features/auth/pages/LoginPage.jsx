import { useNavigate } from 'react-router-dom';
import { FormField } from '../../../components/ui/FormField';
import { PageSection } from '../../../components/ui/PageSection';
import { PrimaryButton } from '../../../components/ui/PrimaryButton';
import { useAuth } from '../components/AuthProvider';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    login({
      name: formData.get('email').split('@')[0],
      token: 'future-jwt-token',
    });
    navigate('/');
  };

  return (
    <PageSection
      title="Iniciar sesión"
      description="Interfaz lista para conectar con endpoint /auth/login de FastAPI, Django o Spring Boot."
    >
      <form className="form-grid" onSubmit={onSubmit}>
        <FormField id="email" type="email" label="Correo" placeholder="tu@email.com" required />
        <FormField id="password" type="password" label="Contraseña" required />
        <PrimaryButton type="submit">Entrar</PrimaryButton>
      </form>
    </PageSection>
  );
}
