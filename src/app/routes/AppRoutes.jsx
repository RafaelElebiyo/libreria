import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../features/home/pages/HomePage';
import { AboutPage } from '../../features/about/pages/AboutPage';
import { ServicesPage } from '../../features/services/pages/ServicesPage';
import { ContactPage } from '../../features/contact/pages/ContactPage';
import { LoginPage } from '../../features/auth/pages/LoginPage';
import { RegisterPage } from '../../features/auth/pages/RegisterPage';
import { BookingPage } from '../../features/booking/pages/BookingPage';
import { SubscriptionPage } from '../../features/subscription/pages/SubscriptionPage';
import { CatalogPage } from '../../features/catalog/pages/CatalogPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/subscription" element={<SubscriptionPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
