import { Metadata } from 'next';
import ContactoContent from './ContactoContent';

export const metadata: Metadata = {
  title: 'Contacto - Trámites Legales Venezuela',
  description: 'Contáctanos para solicitar tu presupuesto gratis. WhatsApp, email o formulario online. Respuesta en menos de 24 horas.',
};

export default function ContactoPage() {
  return <ContactoContent />;
}
