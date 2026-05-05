import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Globe, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  FileText,
  Info,
  Plane
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Renovación Pasaporte Venezolano - Trámites Legales',
  description: 'Asesoría completa para renovar tu pasaporte venezolano desde España. Gestión de citas consulares y requisitos.',
};

export default function PasaportePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Asesoría</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Renovación de Pasaporte
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                Asesoría completa para renovar tu pasaporte venezolano desde España. 
                Te guiamos en todo el proceso.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €60</div>
              <div className="flex items-center text-blue-100 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                Variable según consulado
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
              {/* Info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">
                      Servicio de Asesoría
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300">
                      Este es un servicio de <strong>asesoría y gestión de cita</strong>. La emisión del pasaporte 
                      la realiza directamente el Consulado de Venezuela en España. Nosotros te preparamos 
                      para que tu trámite sea exitoso.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué incluye nuestro servicio?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La renovación del pasaporte venezolano debe gestionarse ante el Consulado de Venezuela 
                  en España. Te ofrecemos asesoría completa para que tu trámite sea rápido y exitoso.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Gestión de cita consular:</strong> Te ayudamos a obtener cita en el consulado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Revisión documental:</strong> Verificamos que tengas todos los documentos en regla
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Asesoría personalizada:</strong> Te guiamos paso a paso en el proceso
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Información actualizada:</strong> Conocemos los requisitos y cambios recientes
                    </span>
                  </li>
                </ul>
              </Card>

              {/* Requisitos */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Requisitos Generales
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Requisitos estándar (pueden variar según el consulado):
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Pasaporte anterior</strong> (vencido o por vencer)
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
                      <strong>Fotos tamaño pasaporte</strong> (fondo blanco, recientes)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Empadronamiento (padrón)</strong> actualizado
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Pago de tasas consulares</strong> (varía según tipo de pasaporte)
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Nota:</strong> Los requisitos pueden variar según el consulado 
                    (Madrid, Barcelona, Bilbao, etc.). Te informamos los específicos para tu caso.
                  </p>
                </div>
              </Card>

              {/* Tipos de Pasaporte */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Tipos de Pasaporte
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Pasaporte Normal (10 años)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Validez por 10 años. El más común para mayores de 18 años.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Tasas consulares: ~€120-150
                    </span>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Pasaporte Temporal (3 años)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Validez por 3 años. Generalmente para casos específicos.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Tasas consulares: ~€80-100
                    </span>
                  </div>
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Prórroga de Pasaporte
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Extensión de validez por 2-3 años adicionales.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                      Tasas consulares: ~€40-60
                    </span>
                  </div>
                </div>
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
                      title: 'Consulta Inicial',
                      desc: 'Evaluamos tu situación y te informamos los requisitos específicos para tu caso.'
                    },
                    {
                      step: '2',
                      title: 'Preparación Documental',
                      desc: 'Te guiamos para reunir todos los documentos necesarios correctamente.'
                    },
                    {
                      step: '3',
                      title: 'Gestión de Cita',
                      desc: 'Te ayudamos a obtener cita en el consulado correspondiente.'
                    },
                    {
                      step: '4',
                      title: 'Día de la Cita',
                      desc: 'Asistes al consulado con toda la documentación preparada.'
                    },
                    {
                      step: '5',
                      title: 'Seguimiento',
                      desc: 'Realizamos seguimiento hasta que recibes tu pasaporte.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Consulados */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Consulados de Venezuela en España
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Madrid</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      C. de Segovia, 10, Centro<br />
                      28005 Madrid
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Barcelona</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      C/ de Mallorca, 237<br />
                      08008 Barcelona
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Bilbao</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      C/ Rodríguez Arias, 6<br />
                      48008 Bilbao
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Vigo</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      C/ de Tomás Alonso, 71<br />
                      36203 Vigo
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
                      ¿Cuánto tarda el pasaporte?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      El tiempo varía según el consulado y la demanda. Puede ser desde 2 semanas 
                      hasta 3 meses. Te informamos el tiempo estimado actual.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo viajar con el pasaporte vencido?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No es recomendable. Algunos países permiten la entrada con pasaporte vencido 
                      venezolano + prórroga, pero otros no. Verifica con el país destino.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Necesito cita para el consulado?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, generalmente se requiere cita previa. Algunos consulados tienen alta demanda 
                      y las citas se agotan rápidamente. Nosotros te ayudamos a gestionarla.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué pasa si perdí mi pasaporte?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deberás tramitar uno nuevo. Requiere declaración de pérdida y documentación adicional. 
                      Te asesoramos en este proceso.
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
                  ¿Necesitas renovar tu pasaporte?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Te guiamos en todo el proceso. Evita errores que retrasen tu trámite.
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo Estimado</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Variable según consulado. Generalmente 2 semanas a 3 meses.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Plane className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Validez</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Pasaporte normal: 10 años<br />
                  Prórroga: 2-3 años adicionales
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Incluye</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Asesoría completa, gestión de cita y seguimiento del trámite.
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Tasas Consulares
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Las tasas consulares no están incluidas en nuestro servicio 
                      y deben pagarse directamente en el consulado.
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
