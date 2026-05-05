import { Metadata } from 'next';
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin,
  Phone,
  Send
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contacto - Trámites Legales Venezuela',
  description: 'Contáctanos para solicitar tu presupuesto gratis. WhatsApp, email o teléfono. Respuesta en menos de 24 horas.',
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solicita tu presupuesto gratis. Te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                ¿Hablamos?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Estamos aquí para ayudarte con tus trámites documentales. 
                Escríbenos por WhatsApp para una respuesta inmediata.
              </p>
              
              <div className="space-y-6">
                <Card className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      WhatsApp
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +58 412 123 4567
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Respuesta inmediata
                    </p>
                  </div>
                </Card>
                
                <Card className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      contacto@tramiteslegales.com
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                      Respuesta en 24h
                    </p>
                  </div>
                </Card>
                
                <Card className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Horario de Atención
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lunes a Viernes
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      8:00 - 17:00 (Hora Venezuela)
                    </p>
                  </div>
                </Card>
                
                <Card className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ubicación
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Servicio 100% Online
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Atendemos desde Caracas, Venezuela<br />
                      Envíos a todo el mundo
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card padding="lg" className="h-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Solicitar Presupuesto
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+34 612 345 678"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Servicio de Interés
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                      <option value="">Selecciona un servicio</option>
                      <option value="acta-nacimiento">Acta de Nacimiento</option>
                      <option value="antecedentes-penales">Antecedentes Penales</option>
                      <option value="titulo-universitario">Título Universitario</option>
                      <option value="carta-solteria">Certificado de Soltería</option>
                      <option value="pasaporte">Pasaporte</option>
                      <option value="apostilla">Apostilla General</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      País de Residencia
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Ej: España, Argentina, USA..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Cuéntanos qué necesitas..."
                    ></textarea>
                  </div>
                  
                  <Button variant="primary" className="w-full" size="lg">
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Solicitud
                  </Button>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Te responderemos en menos de 24 horas. También puedes escribirnos directamente por WhatsApp.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
