import { PageSection } from '../../../components/ui/PageSection';
import { PrimaryButton } from '../../../components/ui/PrimaryButton';

const PLANS = [
  { name: 'Esencial', price: '$9', benefits: '1 club mensual + newsletter premium' },
  { name: 'Pro', price: '$19', benefits: '3 clubs mensuales + sesiones grupales' },
];

export function SubscriptionPage() {
  return (
    <PageSection
      title="Suscripción al club"
      description="Modelo de planes listo para sincronizarse con catálogos del backend."
    >
      <div className="grid-2">
        {PLANS.map((plan) => (
          <article key={plan.name} className="plan-card">
            <h3>{plan.name}</h3>
            <p>{plan.price}/mes</p>
            <small>{plan.benefits}</small>
            <PrimaryButton>Elegir plan</PrimaryButton>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
