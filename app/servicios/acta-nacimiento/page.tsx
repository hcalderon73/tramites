import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  Shield
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Acta de Nacimiento Apostillada - Trámites Legales Venezuela',
  description: 'Obtén tu copia certificada del acta de nacimiento venezolana con Apostilla de La Haya. Servicio 100% online desde cualquier país.',
};

export default function ActaNacimientoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-blue-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Más Solicitado</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Acta de Nacimiento
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Copia certificada con Apostilla de La Haya. Válida para nacionalidad española, 
                residencia y otros trámites.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €80</div>
              <div className="flex items-center text-blue-200 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                20-30 días hábiles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué incluye este servicio?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Gestionamos la obtención de tu partida de nacimiento venezolana con Apostilla de La Haya. 
                  Este documento es <strong>obligatorio</strong> para la mayoría de trámites de extranjería en España 
                  y otros países.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  El proceso es <strong>100% online</strong>: envías tus datos y nosotros nos encargamos de 
                  solicitar la copia certificada en el Registro Civil de Venezuela, gestionar la apostilla 
                  ante el SAREN y enviártela a tu domicilio en cualquier país.
                </p>
              </Card>

              {/* Requisitos */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Requisitos
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Datos completos del registro:</strong> Nombres y apellidos, fecha y lugar de nacimiento, 
                      nombres de los padres
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Número de cédula de identidad</strong> (del titular o de los padres si es para menor)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Dirección de envío completa</strong> en el país donde te encuentres
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Proceso */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Proceso Paso a Paso
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Solicitud Online',
                      desc: 'Completas el formulario con tus datos y realizas el pago.'
                    },
                    {
                      step: '2',
                      title: 'Gestión en Venezuela',
                      desc: 'Nuestro equipo solicita la copia certificada en el Registro Civil correspondiente.'
                    },
                    {
                      step: '3',
                      title: 'Emisión del Documento',
                      desc: 'El Registro Civil emite la copia certificada (tarda entre 5-15 días hábiles).'
                    },
                    {
                      step: '4',
                      title: 'Apostilla',
                      desc: 'Gestionamos la Apostilla de La Haya ante el SAREN (5-10 días hábiles).'
                    },
                    {
                      step: '5',
                      title: 'Envío Internacional',
                      desc: 'Te enviamos el documento apostillado por correo certificado a tu dirección.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* FAQs */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo tramitar mi acta sin regresar a Venezuela?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, ese es precisamente nuestro servicio. Nosotros gestionamos todo desde Venezuela 
                      mientras tú permaneces en tu país de residencia.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Cuánto tiempo tiene de validez?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      El acta de nacimiento en sí no expira, pero algunos trámites (como la nacionalidad española) 
                      pueden requerir que el documento tenga una emisión reciente (generalmente menos de 3-6 meses).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Es válida para la nacionalidad española?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, la copia certificada apostillada es el documento requerido para los trámites de 
                      nacionalidad española por residencia o por opción.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Necesito enviar mi documento original?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No, solo necesitamos los datos de tu registro. Nosotros solicitamos la copia certificada 
                      directamente al Registro Civil.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Listo para empezar?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Solicita tu presupuesto gratis. Te respondemos en menos de 24 horas.
                </p>
                <Link href="/contacto">
                  <Button variant="primary" className="w-full mb-3">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    WhatsApp Gratis
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="w-full">
                    Formulario Online
                  </Button>
                </Link>
              </Card>

              {/* Info Cards */}
              <Card>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo de Entrega</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  20-30 días hábiles desde la confirmación del pago.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Envío</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  A cualquier país del mundo por correo certificado con seguimiento.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Garantía</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Documento 100% legal y válido. Apostilla de La Haya incluida.
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Importante
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Los tiempos de entrega son estimados y pueden variar según la disponibilidad 
                      del Registro Civil y el SAREN.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
