import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  FileCheck
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Antecedentes Penales Apostillados - Trámites Legales Venezuela',
  description: 'Certificado de antecedentes penales venezolano con Apostilla de La Haya. Requisito obligatorio para residencia y nacionalidad española.',
};

export default function AntecedentesPenalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-red-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Obligatorio</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Antecedentes Penales
              </h1>
              <p className="text-xl text-red-100 max-w-2xl">
                Certificado apostillado requerido para trámites de residencia, 
                nacionalidad y empleo público en España.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €95</div>
              <div className="flex items-center text-red-200 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                20-40 días hábiles
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
              {/* Alert Importante */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">
                      Documento Obligatorio
                    </h3>
                    <p className="text-red-700 dark:text-red-300">
                      El certificado de antecedentes penales es <strong>exigido por el Gobierno español</strong> para:
                      permisos de residencia, arraigo, nacionalidad, renovaciones de NIE/TIE y empleo público.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué incluye este servicio?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Obtenemos tu certificado de antecedentes penales ante el CICPC (Cuerpo de Investigaciones 
                  Científicas, Penales y Criminalísticas) de Venezuela y lo apostillamos ante el MPPRE 
                  (Ministerio del Poder Popular para Relaciones Exteriores).
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Este documento certifica que no tienes antecedentes penales en Venezuela y es 
                  <strong> imprescindible</strong> para la mayoría de trámites migratorios en España.
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
                      <strong>Cédula de identidad vigente</strong> (escaneada por ambos lados)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Datos personales completos:</strong> Nombres, apellidos, fecha y lugar de nacimiento
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Dirección completa</strong> para el envío internacional
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Indicar el propósito:</strong> Nacionalidad, residencia, trabajo, etc.
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
                      title: 'Solicitud y Pago',
                      desc: 'Completas el formulario con tus datos y realizas el pago del servicio.'
                    },
                    {
                      step: '2',
                      title: 'Gestión ante CICPC',
                      desc: 'Nuestro equipo solicita el certificado en las oficinas del CICPC en Venezuela.'
                    },
                    {
                      step: '3',
                      title: 'Emisión del Certificado',
                      desc: 'El CICPC emite el certificado de antecedentes penales (10-20 días hábiles).'
                    },
                    {
                      step: '4',
                      title: 'Apostilla ante MPPRE',
                      desc: 'Gestionamos la Apostilla de La Haya ante el Ministerio de Relaciones Exteriores.'
                    },
                    {
                      step: '5',
                      title: 'Envío Internacional',
                      desc: 'Te enviamos el certificado apostillado por correo certificado con seguimiento.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Vigencia */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Vigencia del Certificado
                </h2>
                <div className="flex items-start">
                  <FileCheck className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      El certificado de antecedentes penales tiene una vigencia de <strong>3 meses</strong> 
                      desde su emisión para trámites en España.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Es importante coordinar la solicitud con las fechas de tu trámite migratorio 
                      para asegurar que el documento esté vigente al momento de presentarlo.
                    </p>
                  </div>
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
                      ¿Para qué trámites lo necesito?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Es obligatorio para: arraigo familiar o social, nacionalidad española, 
                      renovación de residencia, empleo público y algunos permisos de trabajo.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué pasa si tengo antecedentes?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      El certificado mostrará tus antecedentes penales si los tienes. Esto no 
                      necesariamente impide tu trámite, pero debe ser declarado. Te recomendamos 
                      asesoría legal específica.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo solicitarlo si estoy en Venezuela?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Si estás en Venezuela, puedes solicitarlo directamente en el CICPC. 
                      Nuestro servicio está diseñado para venezolanos que residen en el exterior 
                      y no pueden viajar.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Solicitar Ahora
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  No demores tu trámite de residencia o nacionalidad. 
                  Te respondemos en menos de 24 horas.
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
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo de Entrega</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  20-40 días hábiles desde la confirmación del pago.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Envío</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  A cualquier país del mundo por correo certificado.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Validez</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  3 meses de vigencia. Apostilla incluida.
                </p>
              </Card>

              {/* Alert Vigencia */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Planifica con Anticipación
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Por la vigencia de 3 meses, solicita el certificado cuando estés 
                      próximo a presentar tu trámite.
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
