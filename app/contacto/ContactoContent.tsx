'use client';

import { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Clock, 
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactoContent() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    servicio: '',
    pais: '',
    mensaje: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        // Reset form
        setFormData({
          nombre: '',
          apellido: '',
          email: '',
          telefono: '',
          servicio: '',
          pais: '',
          mensaje: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Error de conexión. Por favor intenta de nuevo.');
    }
  };

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

                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          ¡Mensaje enviado!
                        </h4>
                        <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                          Hemos recibido tu solicitud y te responderemos en menos de 24 horas. 
                          También hemos enviado una confirmación a tu email.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 dark:text-red-200">
                          Error al enviar
                        </h4>
                        <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                          {errorMessage || 'Por favor intenta de nuevo o contáctanos por WhatsApp.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Apellido *
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="+34 612 345 678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Servicio de Interés *
                    </label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="acta-nacimiento">Acta de Nacimiento</option>
                      <option value="antecedentes-penales">Antecedentes Penales</option>
                      <option value="titulo-universitario">Título Universitario</option>
                      <option value="carta-solteria">Certificado de Soltería</option>
                      <option value="pasaporte">Pasaporte</option>
                      <option value="apostilla">Apostilla General</option>
                      <option value="poder-notarial">Poder Notarial</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="pais" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      País de Residencia
                    </label>
                    <input
                      type="text"
                      id="pais"
                      name="pais"
                      value={formData.pais}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Ej: España, Argentina, USA..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="Cuéntanos qué necesitas..."
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full" 
                    size="lg"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Al enviar, aceptas nuestra{' '}
                    <a href="/privacidad" className="text-blue-600 hover:underline">
                      Política de Privacidad
                    </a>
                    . Te responderemos en menos de 24 horas.
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
