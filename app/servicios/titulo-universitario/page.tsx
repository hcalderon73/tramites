import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Award, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Título Universitario Apostillado - Trámites Legales Venezuela',
  description: 'Apostilla de títulos universitarios venezolanos para homologación en España y otros países. Servicio 100% online.',
};

export default function TituloUniversitarioPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-purple-200 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Homologación</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Título Universitario
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl">
                Apostilla para homologación de estudios y ejercer profesiones reguladas en España.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €120</div>
              <div className="flex items-center text-purple-200 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                30-45 días hábiles
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
                  ¿Para qué necesitas apostillar tu título?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La apostilla de tu título universitario venezolano es obligatoria para:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Homologación de estudios</strong> ante el Ministerio de Universidades de España
                    </span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Convalidación</strong> para continuar estudios de posgrado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-5 h-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Ejercer profesiones reguladas</strong> (médicos, abogados, ingenieros, etc.)
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300">
                  Gestionamos el trámite completo: verificamos que tu título esté registrado en el MPPEU 
                  (Ministerio del Poder Popular para la Educación Universitaria), lo apostillamos ante el SAREN 
                  y te lo enviamos a cualquier país.
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
                      <strong>Título universitario original</strong> o constancia de grado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Registro en el MPPEU</strong> verificado (nosotros confirmamos esto)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Cédula de identidad</strong> del titular
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
                      title: 'Verificación',
                      desc: 'Confirmamos que tu título esté registrado en el MPPEU (Ministerio de Educación Universitaria).'
                    },
                    {
                      step: '2',
                      title: 'Solicitud al Registro',
                      desc: 'Solicitamos la copia certificada del título o certificación de la constancia de grado.'
                    },
                    {
                      step: '3',
                      title: 'Emisión del Documento',
                      desc: 'El registro universitario emite el documento oficial (10-20 días hábiles).'
                    },
                    {
                      step: '4',
                      title: 'Apostilla ante SAREN',
                      desc: 'Gestionamos la Apostilla de La Haya (10-15 días hábiles).'
                    },
                    {
                      step: '5',
                      title: 'Entrega',
                      desc: 'Te enviamos el título apostillado por correo certificado internacional.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Info Adicional */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Homologación vs Convalidación
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2">Homologación</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Para ejercer profesiones reguladas en España (médicos, abogados, ingenieros). 
                      Requiere título apostillado + tramitación ante el Ministerio.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Convalidación</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Para continuar estudios o fines académicos. Generalmente más sencillo que la homologación.
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
                      ¿Cómo sé si mi título está registrado?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nosotros verificamos esto por ti. Si tu universidad está reconocida por el CNU 
                      (Consejo Nacional de Universidades), generalmente el título está registrado.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo apostillar desde España?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, ese es nuestro servicio. No necesitas viajar a Venezuela. Nosotros gestionamos 
                      todo el proceso desde allá.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Cuánto tiempo tarda la homologación en España?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      La homologación es un trámite posterior que realiza el Ministerio de Universidades 
                      de España y puede tomar de 6 meses a 2 años. Nosotros solo gestionamos la apostilla 
                      del documento.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué pasa si perdí mi título original?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Podemos solicitar una copia certificada o constancia de grado ante el registro 
                      de tu universidad. Esto tiene un costo adicional.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Solicitar Ahora
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Inicia el proceso de apostilla de tu título. Primero verificamos que esté registrado.
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
                  <Clock className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo de Entrega</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  30-45 días hábiles desde la confirmación del pago.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Envío</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  A cualquier país del mundo por correo certificado.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Validez</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Apostilla de La Haya con vigencia permanente.
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Profesiones Reguladas
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Si vas a ejercer una profesión regulada (médico, abogado, etc.), 
                      verifica requisitos adicionales en el Ministerio de Universidades de España.
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
