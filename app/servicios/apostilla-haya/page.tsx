import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Stamp, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowLeft,
  MessageCircle,
  Globe,
  FileText,
  Shield,
  Scale
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Apostilla de La Haya Venezuela - Trámites Legales',
  description: 'Apostillamos cualquier documento público venezolano. Validez en 124 países. Servicio rápido y seguro desde España.',
};

export default function ApostillaHayaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center text-emerald-100 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Servicios
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Badge variant="white" className="mb-4">Internacional</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Apostilla de La Haya
              </h1>
              <p className="text-xl text-emerald-100 max-w-2xl">
                Certificamos tus documentos venezolanos para que tengan validez legal en 124 países.
              </p>
            </div>
            <div className="mt-6 md:mt-0 text-right">
              <div className="text-3xl font-bold">Desde €70</div>
              <div className="flex items-center text-emerald-100 mt-2">
                <Clock className="w-5 h-5 mr-2" />
                15-30 días hábiles
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
              {/* ¿Qué es? */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Qué es la Apostilla de La Haya?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  La Apostilla de La Haya es un sello internacional que certifica la autenticidad de 
                  documentos públicos para que sean reconocidos en países signatarios del 
                  <strong> Convenio de La Haya de 1961</strong>.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Venezuela y España son signatarios de este convenio, por lo que los documentos 
                  venezolanos apostillados tienen plena validez legal en España sin necesidad de 
                  legalización consular adicional.
                </p>
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mt-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-emerald-900 dark:text-emerald-200">
                        124 Países Reconocen la Apostilla
                      </h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        Incluye España, Portugal, Italia, Argentina, Chile, México, USA y más.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Documentos que apostillamos */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Documentos que Apostillamos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-emerald-600" />
                      Registro Civil
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                      <li>• Actas de nacimiento</li>
                      <li>• Actas de matrimonio</li>
                      <li>• Actas de defunción</li>
                      <li>• Certificados de soltería</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-emerald-600" />
                      Policiales y Penales
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                      <li>• Antecedentes penales</li>
                      <li>• Certificados de conducta</li>
                      <li>• Cartas de buena conducta</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <Scale className="w-5 h-5 mr-2 text-emerald-600" />
                      Notariales
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                      <li>• Poderes notariales</li>
                      <li>• Escrituras públicas</li>
                      <li>• Testamentos</li>
                      <li>• Fe de vida</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white flex items-center">
                      <Stamp className="w-5 h-5 mr-2 text-emerald-600" />
                      Académicos
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-7">
                      <li>• Títulos universitarios</li>
                      <li>• Constancias de graduación</li>
                      <li>• Certificaciones académicas</li>
                      <li>• Notas certificadas</li>
                    </ul>
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
                      <strong>Documento original</strong> o copia certificada emitida por la autoridad competente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Datos del titular</strong> completos
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Dirección de envío</strong> para el documento apostillado
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Nota:</strong> El documento debe estar previamente certificado por la autoridad 
                    correspondiente (Registro Civil, Notaría, Universidad, etc.) antes de la apostilla.
                  </p>
                </div>
              </Card>

              {/* Proceso */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Proceso de Apostilla
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Evaluación',
                      desc: 'Nos envías copia del documento para verificar que cumple los requisitos para apostillar.'
                    },
                    {
                      step: '2',
                      title: 'Solicitud',
                      desc: 'Completas el formulario y realizas el pago del servicio.'
                    },
                    {
                      step: '3',
                      title: 'Gestión ante SAREN',
                      desc: 'Nuestro equipo en Venezuela presenta el documento ante el SAREN para apostilla.'
                    },
                    {
                      step: '4',
                      title: 'Emisión de Apostilla',
                      desc: 'El SAREN coloca el sello de apostilla en tu documento (10-20 días hábiles).'
                    },
                    {
                      step: '5',
                      title: 'Entrega',
                      desc: 'Te enviamos el documento apostillado a cualquier país del mundo.'
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold">
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

              {/* Comparativa */}
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Apostilla vs Legalización Consular
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">Característica</th>
                        <th className="text-left py-3 px-4 font-semibold text-emerald-600 dark:text-emerald-400">Apostilla</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-600 dark:text-gray-400">Legalización</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4">Convenio</td>
                        <td className="py-3 px-4">La Haya (1961)</td>
                        <td className="py-3 px-4">Tradicional</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4">Países</td>
                        <td className="py-3 px-4">124 países</td>
                        <td className="py-3 px-4">Todos</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4">Proceso</td>
                        <td className="py-3 px-4">Un solo paso</td>
                        <td className="py-3 px-4">Múltiples pasos</td>
                      </tr>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4">España - Venezuela</td>
                        <td className="py-3 px-4 font-semibold text-green-600">✓ Aplica</td>
                        <td className="py-3 px-4 text-gray-400">No aplica</td>
                      </tr>
                    </tbody>
                  </table>
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
                      ¿Cuánto tiempo tiene de validez una apostilla?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      La apostilla en sí no expira, pero el documento apostillado puede tener vigencia limitada. 
                      Por ejemplo, antecedentes penales suelen tener 3-6 meses de validez.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Puedo apostillar desde España?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Sí, nosotros lo hacemos por ti. No necesitas viajar a Venezuela. Gestionamos todo el 
                      proceso desde Caracas y te enviamos el documento apostillado.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Qué documentos NO se pueden apostillar?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      No se apostillan: pasaportes, cédulas de identidad, carnets de conducir, 
                      ni documentos privados sin certificación notarial.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      ¿Apostilla electrónica o física?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Venezuela emite apostillas físicas. Sin embargo, algunos países aceptan 
                      copias digitalizadas del documento apostillado. Verifica los requisitos de tu país destino.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Apostilla tu Documento
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Envíanos una copia de tu documento y te confirmamos si puede apostillarse.
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
                  <Clock className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tiempo de Entrega</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  15-30 días hábiles según tipo de documento.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cobertura</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Válida en 124 países signatarios del Convenio de La Haya.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <Stamp className="w-6 h-6 text-emerald-600 mr-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Entidad</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Apostilla emitida por el SAREN (Servicio Autónomo de Registros y Notarías).
                </p>
              </Card>

              {/* Alert */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 text-sm">
                      Verificación Previo
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      Envíanos una copia de tu documento antes de contratar. 
                      Verificamos que esté correctamente emitido para apostillar.
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
