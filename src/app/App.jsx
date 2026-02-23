import { AppRoutes } from './routes/AppRoutes';
import { MainLayout } from '../components/layout/MainLayout';

export function App() {
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  );
}
