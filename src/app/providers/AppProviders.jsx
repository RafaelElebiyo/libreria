import { AuthProvider } from '../../features/auth/components/AuthProvider';

export function AppProviders({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
