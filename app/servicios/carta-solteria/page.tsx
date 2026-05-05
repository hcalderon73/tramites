import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Heart, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  Calendar
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Certificado de Soltería Apostillado - Trámites Legales Venezuela',
  description: 'Certificado de soltería venezolano con Apostilla de La Haya para matrimonio en España y otros países. Vigencia 6 meses.',
};

export default function CartaSolteriaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-500 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-pink-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Matrimonio</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Certificado de Soltería
              </h1>
              <p className="text-xl text-pink-100 max-w-2xl">
                Requisito obligatorio para contraer matrimonio o formar pareja de hecho en España.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €85</div>
              <div className="flex items-center text-pink-100 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                20-35 días hábiles
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
              <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-800 rounded-lg p-6">
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">
                      Para Matrimonio en España
                    </h3>
                    <p className="text-pink-700 dark:text-pink-300">
                      El certificado de soltería es <strong>obligatorio</strong> si eres venezolano 
                      y quieres casarte en España. Acredita ante las autoridades españolas que no 
                      estás casado actualmente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué es el Certificado de Soltería?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  También conocido como &quot;fe de soltería&quot; o &quot;constancia de estado civil&quot;, 
                  es un documento que certifica que una persona no está casada y es libre para contraer matrimonio.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Para que tenga validez en España debe estar <strong>apostillado</strong> ante el SAREN 
                  (Servicio Autónomo de Registros y Notarías de Venezuela).
                </p>
                <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg mt-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-rose-600 dark:text-rose-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-rose-900 dark:text-rose-200">
                        Vigencia: 6 Meses
                      </h4>
                      <p className="text-sm text-rose-700 dark:text-rose-300">
                        El certificado tiene una vigencia de 6 meses desde su emisión. 
                        Planifica tu solicitud acorde a la fecha de tu matrimonio.
                      </p>
                    </div>
                  </div>
                </div>
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
                      <strong>Copia certificada del Acta de Nacimiento</strong> (puede estar apostillada o no)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Cédula de identidad</strong> vigente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Datos completos:</strong> Nombres, apellidos, fecha y lugar de nacimiento
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Fecha estimada del matrimonio</strong> (para coordinar la vigencia)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Dirección de envío</strong> para el documento apostillado
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
                      desc: 'Completas el formulario indicando la fecha estimada de tu matrimonio.'
                    },
                    {
                      step: '2',
                      title: 'Gestión en Registro Civil',
                      desc: 'Nuestro equipo solicita la constancia de soltería en el Registro Civil de Venezuela.'
                    },
                    {
                      step: '3',
                      title: 'Emisión del Certificado',
                      desc: 'El Registro Civil emite la constancia de soltería (5-15 días hábiles).'
                    },
                    {
                      step: '4',
                      title: 'Apostilla',
                      desc: 'Gestionamos la Apostilla de La Haya ante el SAREN (5-10 días hábiles).'
                    },
                    {
                      step: '5',
                      title: 'Entrega Internacional',
                      desc: 'Te enviamos el certificado apostillado coordinando con la fecha de tu boda.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Matrimonio Civil en España */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Matrimonio Civil en España - Requisitos
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Además del certificado de soltería apostillado, necesitarás:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Acta de nacimiento apostillada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Pasaporte o NIE vigente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Empadronamiento (padrón)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">Certificado de soltería apostillado (vigente)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  * Requisitos pueden variar según la comunidad autónoma. Consulta en tu registro civil local.
                </p>
              </Card>

              {/* FAQs */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Preguntas Frecuentes
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué pasa si el certificado vence antes del matrimonio?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deberás solicitar uno nuevo. Por eso coordinamos la emisión con tu fecha de boda. 
                      Te recomendamos solicitarlo 1-2 meses antes del matrimonio.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Sirve para pareja de hecho?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, muchas comunidades autónomas también lo requieren para inscribir una pareja de hecho. 
                      Verifica los requisitos específicos en tu registro civil.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo casarme en Venezuela con este certificado?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Si te casas en Venezuela, no necesitas apostilla. Nuestro servicio está diseñado 
                      para quienes se casan en el extranjero.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Si estuve casado antes?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Necesitarás el certificado de divorcio o defunción del cónyuge anterior, 
                      también apostillado. Te asesoramos en este proceso.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  ¡Felicitaciones por tu boda! 💍
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Te ayudamos con toda la documentación para que tu matrimonio sea perfecto.
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
                  <Clock className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo de Entrega</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  20-35 días hábiles. Coordinamos con tu fecha de boda.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Envío</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  A cualquier país. Correo certificado con seguimiento.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Vigencia</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  6 meses desde la emisión. Planifica con anticipación.
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Planifica con Tiempo
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Solicita el certificado 2-3 meses antes de tu boda para 
                      tener margen de tiempo.
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
